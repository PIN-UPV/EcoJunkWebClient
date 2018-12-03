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
        },
        filterMarksByType: (state) => (jpList) => {
            return state.markers.filter((mark) => {
                for(var i = 0; i < jpList.length; i++){
                    for(var j = 0; j < mark.types.length; j++){
                        return mark.types[j].toLowerCase().indexOf(jpList[i].toLowerCase()) > -1;
                    }
                }  
            });
        },
        filterMarks: (filter, jpList) => {
            if(jpList.length == 0){
                return filterMarksByName(filter)
            } else {
                return filterMarksByType(jpList).concat(filterMarksByName(filter))
            }
        }
    },
    mutations: {
        ['LOAD_MARKS']: (state, obj) => {
            if (obj.page == 1) state.markers = obj.data;
            else state.markers = state.markers.concat(obj.data);
        },
        ['CHANGE_MAP']: (state, map) => {
            state.map = map;
        }
    },
    actions: {
        ['CHANGE_MAP']: ({ commit }, map) => {
            commit('CHANGE_MAP', map);
        },
        ['LOAD_MARKS']: ({ commit, rootState }, page) => {
            {
                commit('STATUS_LOADING', null, { root: true })
                axios({
                        url: rootState.apiPath + '/junk_points/?page=' + page,
                        method: 'GET'
                    })
                    .then(resp => {
                        commit('STATUS_SUCCESS', null, { root: true })
                        commit('LOAD_MARKS', { data: resp.data.results, page: page })
                    })
                    .catch(err => {
                        commit('STATUS_ERROR', err, { root: true })
                    })
            }
        }
    }
}