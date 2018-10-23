//import axios from 'axios'

export default {
    namespaced: true,
    state: {
        map: null,
        markers: [{
                street_name: "Calle Partida Calvet, 4, 46120 Alboraya, Valencia",
                description: "Contenedor de baterías",
                location: {
                    type: "Point",
                    coordinates: [39.4925663, -0.3352995000000192]
                },
                type: {
                    name: 'baterías',
                    description: 'Contenedor de baterías'
                }
            },
            {
                street_name: "Plaza del Ayuntamiento,9,46002 Valencia",
                description: "Contenedor de aparatos electrónicos",
                location: {
                    type: "Point",
                    coordinates: [39.47195019999999, -0.37658250000004045]
                },
                type: {
                    name: 'aparatos electrónicos',
                    description: 'Contenedor de aparatos electrónicos'
                }
            },
            {
                street_name: "Partida de la Mar, 45, 46132 Almàssera, València",
                description: "Contenedor de vidrio",
                location: {
                    type: "Point",
                    coordinates: [39.5121979, -0.34500600000001214]
                },
                type: {
                    name: 'vidrio',
                    description: 'Contenedor de vidrio'
                }
            },
            {
                street_name: "Carrer Metge Andreu Minguet, 2-4, 46910 Sedaví, València",
                description: "Contenedor de aceite",
                location: {
                    type: "Point",
                    coordinates: [39.4265636, -0.37924729999997453]
                },
                type: {
                    name: 'aceite',
                    description: 'Contenedor de aceite'
                }
            },
            {
                street_name: "Camino Alqueria Aiguamolls, 46014 Valencia",
                description: "Contenedor de papel",
                location: {
                    type: "Point",
                    coordinates: [39.4551991, -0.4086612999999488]
                },
                type: {
                    name: 'papel',
                    description: 'Contenedor de papel'
                }
            },
            {
                street_name: "Calle dels Seders, 4, 46950 Chirivella",
                description: "Contenedor de plástico",
                location: {
                    type: "Point",
                    coordinates: [39.4593852, -0.4402628000000277]
                },
                type: {
                    name: 'plástico',
                    description: 'Contenedor de plástico'
                }
            },
            {
                street_name: "Avinguda d'Espioca, 70, 46460 Silla, València",
                description: "Ubicación de rider",
                location: {
                    type: "Point",
                    coordinates: [39.3652727, -0.4212844999999561]
                },
                type: {
                    name: 'rider',
                    description: 'Ubicación de rider'
                }
            },
            {
                street_name: "Carrer Riu Turia, 46470 Albal",
                description: "Ubicación de rider",
                location: {
                    type: "Point",
                    coordinates: [39.3893925, -0.3979825000000119]
                },
                type: {
                    name: 'rider',
                    description: 'Ubicación de rider'
                }
            }
        ]
    },
    getters: {
        filterMarksByName: (state) => (filter) => {
            return state.markers.filter((mark) => {
                return mark.type.description.toLowerCase().indexOf(filter.toLowerCase()) > -1;
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