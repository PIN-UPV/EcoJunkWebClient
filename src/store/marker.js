import axios from 'axios'

export default {
    namespaced: true,
    state: {
        map: null,
<<<<<<< HEAD
        markers: []
=======
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
                type:[
                    {
                        name: 'plástico',
                        description: 'Ubicación de rider'
                    },
                    {
                        name: 'aceite',
                        description: 'Ubicación de rider'
                    }
                ] 
            }
        ]
>>>>>>> d403b46e2444e65588474e6483d9e7680143f6ba
    },
    getters: {
        filterMarksByName: (state) => (filter) => {
            return state.markers.filter((mark) => {
                return mark.description.toLowerCase().indexOf(filter.toLowerCase()) > -1;
            });
        },
<<<<<<< HEAD
        filterMarksByType: (state) => (filter) => {
            return state.markers.filter((mark) => {
                for(var i = 0; i < filter.length; i++){
                    for(var j = 0; j < mark.types.lenght; j++){
                        return mark.type[j].toLowerCase().indexOf(filter[i].toLowerCase()) > -1;
                    }
                }  
=======
        filterMarksByTags: (state) => (filter) => {
            return state.markers.filter((mark) => {
                for (var itemt in mark.type.name) {
                    for(var itemf in filter){
                        if(itemt.toLowerCase().indexOf(itemf.toLowerCase()) > -1){
                            return mark.type
                        }
                    }
                }
>>>>>>> d403b46e2444e65588474e6483d9e7680143f6ba
            });
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