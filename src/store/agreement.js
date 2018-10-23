

export default {
  state: {

    agreements: [
      {
        id: "Acuerdo 1",
        user: { name: "Antonio López" },
        rider: { name: "Miguel Herrero" },
        junk: { name: "Botellas de vidrio" },
        date: "27/01/2016",
        price: "5€",
        location: "Partida de la Mar, 45, 46132 Almàssera, València"
        
      },

      {
        id: "Acuerdo 2",
        user: { name: "Julio Maldonado" },
        rider: { name: "Alicia Sanz" },
        junk: { name: "Aceite de motor" },
        date: "17/08/2017",
        price:"7,5€",
        location: "Carrer Metge Andreu Minguet, 2-4, 46910 Sedaví, València"
      },

      {
        id: "Acuerdo 3",
        user: { name: "Eva Gutierrez" },
        rider: { name: "Ivanjo Garcia" },
        junk: { name: "Periodicos Viejos" },
        date: "01/12/2018",
        price:"2,5€",
        location:"Camino Alqueria Aiguamolls, 46014 Valencia"
      },
    ],
    agreementsAcepted: [
      {
        id: "Acuerdo 6",
        user: { name: "Raul Fernandez" },
        rider: { name: "Miguel Herrero" },
        junk: { name: "Placa Base" },
        date: "18/06/2016",
        price: "5'5€",
        location: "Partida de la Mar, 45, 46132 Almàssera, València"
        
      },

      {
        id: "Acuerdo 7",
        user: { name: "Sara Gomez" },
        rider: { name: "Benito Segura" },
        junk: { name: "Cajas de cartón" },
        date: "02/10/2018",
        price:"3€",
        location: "Carrer Metge Andreu Minguet, 2-4, 46910 Sedaví, València"
      },

      {
        id: "Acuerdo 8",
        user: { name: "Sergio Martorell" },
        rider: { name: "Beatriz Lanzas" },
        junk: { name: "Pilas" },
        date: "01/12/2018",
        price:"1€",
        location:"Camino Alqueria Aiguamolls, 46014 Valencia"
      },
    ],
      agreementsRejected: [
        {
          id: "Acuerdo 9",
          user: { name: "Manuel Ramirez" },
          rider: { name: "David Flor" },
          junk: { name: "Televisor" },
          date: "30/03/2018",
          price: "10€",
          location: "Partida de la Mar, 45, 46132 Almàssera, València"
          
        },
  
        {
          id: "Acuerdo 10",
          user: { name: "Soraya Mendoza" },
          rider: { name: "Paco Martinez" },
          junk: { name: "Ventilador" },
          date: "17/08/2017",
          price:"6€",
          location: "Carrer Metge Andreu Minguet, 2-4, 46910 Sedaví, València"
        },
  
        {
          id: "Acuerdo 11",
          user: { name: "Laura Narvaez" },
          rider: { name: "Carlos Molina" },
          junk: { name: "Altavoces" },
          date: "17/06/2018",
          price:"7,99€",
          location:"Camino Alqueria Aiguamolls, 46014 Valencia"
        },
    ]

  },
  mutations: {
    ['ACEPT_AGREEMENT']: (state, newAgreement) => {
      state.agreementsAcepted.push(newAgreement);
      state.agreements.splice(state.agreements.indexOf(newAgreement), 1);
    },
    ['REJECT_AGREEMENT']: (state, newAgreement) => {
      state.agreementsRejected.push(newAgreement);
      state.agreements.splice(state.agreements.indexOf(newAgreement), 1);
    },
    ['ADD_AGREEMENT']: (state, newAgreement) => {
      state.agreements.push(newAgreement);
    }
  },
  actions: {
  }
}