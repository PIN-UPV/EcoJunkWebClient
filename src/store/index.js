import Vue from 'vue'
import Vuex from 'vuex'
import { markerModule } from './marker';
import { agreementModule} from './agreement';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {

  },
  modules: {
    marker: markerModule,
    agreement: agreementModule
  }
})
