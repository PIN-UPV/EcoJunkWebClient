import axios from 'axios'

export default {
    namespaced: true,
    state: {
        map: null,
        markers: []
    },
    getters: {
        filterMarksByName: (state) => (filter) => {
            return state.markers.filter((mark) => {
                return mark.description.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            });
        }
    },
    mutations: {
        ['LOAD_MARKS']: (state, data) => {
            state.markers = state.markers.concat(data);
        },
        ['CHANGE_MAP']: (state, map) => {
            state.map = map;
        }
    },
    actions: {
        ['CHANGE_MAP']: ({ commit }, map) => {
            commit('CHANGE_MAP', map);
        },
        ['LOAD_MARKS']: ({ commit, dispatch, rootState }, newUrl) => {
            {
                commit('STATUS_LOADING', null, { root: true })
                axios({
                        url: newUrl,
                        method: 'GET'
                    })
                    .then(resp => {
                        commit('STATUS_SUCCESS', null, { root: true })
                        commit('LOAD_MARKS', resp.data.results)
                        if (resp.data.next != null) dispatch('LOAD_MARKS', resp.data.next)
                    })
                    .catch(err => {
                        commit('STATUS_ERROR', err, { root: true })
                    })
            }
        }
    }
}