import Vue from 'vue'
import Vuex from 'vuex'
import markerModule from './marker';
import agreementModule from './agreement';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        apiPath: 'http://localhost:8000/api/v1',
        status: '',
        errorMsg: ''
    },
    modules: {
        marker: markerModule,
        agreement: agreementModule
    },
    mutations: {
        ['STATUS_SUCCES']: (state) => {
            state.status = 'succes'
        },
        ['STATUS_LOADING']: (state) => {
            state.status = 'loading'
        },
        ['STATUS_ERROR']: (state, payload) => {
            state.status = 'error'
            state.msg = payload.message || ''
        }
    }
})