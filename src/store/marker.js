import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    markers: [
      {
        id: 1,
        latitude: 39.478688,
        longitude: -0.365236,
        junkPointType: {
          name: "Jardin de Monforte",
          description: "Ubicación del jardín de Monforte"
        }
      },
      {
        id: 2,
        latitude: 39.475496, 
        longitude: -0.375662,
        junkPointType: {
          name: "Catedral de Valencia",
          description: "Ubicación de la catedral de Valencia"
        }
      },
      {
        id: 3,
        latitude: 39.479172,
        longitude: -0.390297,
        junkPointType: {
          name: "Nuevo Centro",
          description: "Ubicación de Nuevo Centro"
        }
      }
    ]

  },
  mutations: {

  },
  actions: {
  }
})