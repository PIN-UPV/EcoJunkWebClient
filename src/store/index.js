import Vue from 'vue'
import Vuex from 'vuex'

import markerModule from './marker';
import agreementModule from './agreement';
import authModule from './auth';

Vue.use(Vuex)

export const store = new Vuex.Store({
    //strict: true,
    state: {
         //apiPath: 'http://localhost:8000/api/v1',
        apiPath: 'http://192.168.99.100:8000/api/v1',
        status: '',
        errorMsg: ''
    },
    modules: {
        marker: markerModule,
        agreement: agreementModule,
        auth: authModule
    },
    mutations: {
        ['STATUS_SUCCESS']: (state) => {
            state.status = 'success'
        },
        ['STATUS_LOADING']: (state) => {
            state.status = 'loading'
        },
        ['STATUS_ERROR']: (state, msg) => {
            state.status = 'error'
            state.errorMsg = msg || ''
        }
    }
})