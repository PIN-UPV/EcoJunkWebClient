//import axios from 'axios'

export default {
    namespaced: true,
    state: {
        map: null,
        markers: [
        {
                id: 1,
                latitude: 39.4925663,
                longitude: -0.3352995000000192,
                junkPointType: {
                    name: "baterías",
                    description: "Baterías"
                }
            },
            {
                id: 2,
                latitude: 39.47195019999999,
                longitude: -0.37658250000004045,
                junkPointType: {
                    name: "aparatos electrónicos",
                    description: "Aparatos electrónicos"
                }
            },
            {
                id: 3,
                latitude: 39.5121979,
                longitude: -0.34500600000001214,
                junkPointType: {
                    name: "vidrio",
                    description: "Vidrio"
                }
            },
            {
                id: 4,
                latitude: 39.4265636,
                longitude: -0.37924729999997453,
                junkPointType: {
                    name: "aceite",
                    description: "Aceite"
                }
            },
            {
                id: 5,
                latitude: 39.4551991,
                longitude: -0.4086612999999488,
                junkPointType: {
                    name: "papel",
                    description: "Papel"
                }
            },
            {
                id: 6,
                latitude: 39.4593852,
                longitude: -0.4402628000000277,
                junkPointType: {
                    name: "plástico",
                    description: "Plástico"
                }
            },
            {
                id: 7,
                latitude: 39.3652727,
                longitude: -0.4212844999999561,
                junkPointType: {
                    name: "raider",
                    description: "Raider"
                }
            },
            {
                id: 8,
                latitude: 39.3893925,
                longitude: -0.3979825000000119,
                junkPointType: {
                    name: "raider",
                    description: "User"
                }
            },
            {
                id: 9,
                latitude: 39.4500605,
                longitude: -0.4736546000000317,
                junkPointType: {
                    name: "Ecoparque Alaquàs Aldaia",
                    description: "Ubicación del Ecoparque Alaquàs Aldaia"
                }
            }]
    },
    getters: {
        filterMarksByName: (state) => (filter) => {
            return state.markers.filter((mark) => {
                return mark.junkPointType.name.indexOf(filter.toLowerCase()) > -1;
            });
        }
    },
    mutations: {
        ['LOAD_MARKS']: (state, marks) => {
            state.markers = state.markers.concat(marks);
        },
        ['CHANGE_MAP']: (state, map) => {
            state.map = map;
        }
    },
    actions: {        
        ['CHANGE_MAP']: ({ commit }, map) => {
            commit('CHANGE_MAP', map);
        }
        /*['LOAD_MARKS']: ({ commit, rootState}) => {{
                commit('STATUS_LOADING',null,{root: true})
                axios({
                        url: rootState.apiPath + '/junk_points/', 
                        method: 'GET'
                    })
                    .then(resp => {
                        commit('STATUS_SUCCESS',null,{root: true})
                        commit('LOAD_MARKS', resp.data.results)
                    })
                    .catch(err => {
                        commit('STATUS_ERROR', err,{root: true})
                    })
            }
        }*/
    }
}