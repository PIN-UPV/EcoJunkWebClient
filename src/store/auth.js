import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('user-token') || ''
    },
    getters: {
        isAuthenticated: state => !!state.token
    },
    mutations: {
        ['AUTH_SUCCESS']: (state, token) => {
            state.token = token
        },
        ['AUTH_LOGOUT']: (state) => {
            state.token = ''
        }
    },
    actions: {
        ['AUTH_LOGIN']: ({ commit, rootState }, user) => {
            return new Promise((resolve, reject) => { // The Promise used for router redirect in login
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/users/login',
                    data: user,
                    method: 'POST',
                    crossDomain: true,
                }).then(resp => {
                    const token = resp.data.token
                    localStorage.setItem('user-token', token) // store the token in localstorage
                    // Save Authorization header for all futur request
                    axios.defaults.headers.common['Authorization'] = token
                    commit('AUTH_SUCCESS', token)
                    commit('STATUS_SUCCESS', null, { root: true })
                    // you have your token, now log in your user :)
                    //dispatch('user/USER_REQUEST', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)
                })
            })
        },
        ['AUTH_REGISTER']: ({ commit, rootState }, data) => {
            return new Promise((resolve, reject) => { // The Promise used for router redirect in login
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/auth/register',
                    data: data,
                    method: 'POST',
                    crossDomain: true,
                }).then(resp => {
                    const token = resp.data.token
                    localStorage.setItem('user-token', token) // store the token in localstorage
                    // Save Authorization header for all futur request
                    axios.defaults.headers.common['Authorization'] = token
                    commit('AUTH_SUCCESS', token)
                    commit('STATUS_SUCCESS', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)
                })
            })
        },
        ['AUTH_LOGOUT']: ({ commit }) => {
            return new Promise((resolve) => {
                commit('AUTH_LOGOUT')
                //commit('user/AUTH_LOGOUT', null, { root: true })
                localStorage.removeItem('user-token') // clear your user's token from localstorage
                //localStorage.removeItem('user-profile')
                resolve()
            })
        }
    }
}