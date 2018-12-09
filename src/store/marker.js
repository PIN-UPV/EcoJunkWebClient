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
                        return mark.types[j].name.toLowerCase().indexOf(jpList[i].toLowerCase()) > -1;
                    }
                }  
            });
        },
        filterMarks: (state) => ( filter, jpList) => {
            var result;
            return state.markers.filter((mark) => {
                if(jpList.length == 0){
                    return mark.description.toLowerCase().indexOf(filter.toLowerCase()) > -1;
                } else {
                    for(var i = 0; i < jpList.length; i++){
                        for(var j = 0; j < mark.types.length; j++){
                            result = mark.types[j].name.toLowerCase().indexOf(jpList[i].toLowerCase()) > -1;
                            if(result){
                            return (result && (mark.description.toLowerCase().indexOf(filter.toLowerCase()) > -1))
                            }
                        }
                    }  
                   
                }
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
        ['LOAD_MARKS']: ({ commit, dispatch}, newUrl) => {
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