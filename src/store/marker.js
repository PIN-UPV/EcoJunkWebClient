//import axios from 'axios'

export default {
    namespaced: true,
    state: {
        map: null,
        markers: [{
                id: 1,
                latitude: 39.4925663,
                longitude: -0.3352995000000192,
                junkPointType: {
                    name: "baterías",
                    description: "Contenedor de baterías",
                    direction: "Calle Partida Calvet, 4, 46120 Alboraya, Valencia"
                }
            },
            {
                id: 2,
                latitude: 39.47195019999999,
                longitude: -0.37658250000004045,
                junkPointType: {
                    name: "aparatos electrónicos",
                    description: "Contenedor de aparatos electrónicos",
                    direction: "Plaza del Ayuntamiento, 9, 46002 Valencia"
                }
            },
            {
                id: 3,
                latitude: 39.5121979,
                longitude: -0.34500600000001214,
                junkPointType: {
                    name: "vidrio",
                    description: "Contenedor de vidrio",
                    direction: "Partida de la Mar, 45, 46132 Almàssera, València"
                }
            },
            {
                id: 4,
                latitude: 39.4265636,
                longitude: -0.37924729999997453,
                junkPointType: {
                    name: "aceite",
                    description: "Contenedor de aceite",
                    direction: "Carrer Metge Andreu Minguet, 2-4, 46910 Sedaví, València"
                }
            },
            {
                id: 5,
                latitude: 39.4551991,
                longitude: -0.4086612999999488,
                junkPointType: {
                    name: "papel",
                    description: "Contenedor de papel",
                    direction: "Camino Alqueria Aiguamolls, 46014 Valencia"
                }
            },
            {
                id: 6,
                latitude: 39.4593852,
                longitude: -0.4402628000000277,
                junkPointType: {
                    name: "plástico",
                    description: "Contenedor de plástico",
                    direction: "Calle dels Seders, 4, 46950 Chirivella"
                }
            },
            {
                id: 7,
                latitude: 39.3652727,
                longitude: -0.4212844999999561,
                junkPointType: {
                    name: "raider",
                    description: "Ubicación de raider",
                    direction: "Avinguda d'Espioca, 70, 46460 Silla, València"
                }
            },
            {
                id: 8,
                latitude: 39.3893925,
                longitude: -0.3979825000000119,
                junkPointType: {
                    name: "raider",
                    description: "Ubicación de raider",
                    direction: "Carrer Riu Turia, 46470 Albal"
                }
            }
        ]
    },
    getters: {
        filterMarksByName: (state) => (filter) => {
            return state.markers.filter((mark) => {
                return mark.junkPointType.description.toLowerCase().indexOf(filter.toLowerCase()) > -1;
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