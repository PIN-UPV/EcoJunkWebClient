import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: localStorage.getItem('user-token') || '',
        profile: JSON.parse(localStorage.getItem('user-profile')) || {},
        location: {
            lat: null,
            long: null
        }
    },
    getters: {
        isAuthenticated: state => !!state.token
    },
    mutations: {
        ['AUTH_LOGIN']: (state, token) => {
            state.token = token
        },
        ['AUTH_LOGOUT']: (state) => {
            state.token = ''
            state.profile = ''
        },
        ['AUTH_PROFILE']: (state, profile) => {
            state.profile = profile
        },
        ['ADD_USER_LOCATION']: (state, location) => {
            state.location.lat = location.lat;
            state.location.long = location.long;
        },
    },
    actions: {
        ['AUTH_LOGIN']: ({ commit, rootState, dispatch }, user) => {
            return new Promise((resolve, reject) => { // The Promise used for router redirect in login
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/users/login/',
                    data: user,
                    method: 'POST',
                    crossDomain: true,
                }).then(resp => {
                    const token = "JWT " + resp.data.token
                    localStorage.setItem('user-token', token) // store the token in localstorage
                        // Save Authorization header for all futur request
                    axios.defaults.headers.common['Authorization'] = token
                    commit('AUTH_LOGIN', token)
                        // you have your token, now log in your user :)
                    dispatch('AUTH_PROFILE', null)
                    commit('STATUS_SUCCESS', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)
                })
            })
        },
        ['AUTH_REGISTER']: ({ commit, rootState, dispatch }, data) => {
            return new Promise((resolve, reject) => { // The Promise used for router redirect in login
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/auth/register',
                    data: data,
                    method: 'POST',
                    crossDomain: true,
                }).then(resp => {
                    const token = "JWT " + resp.data.token
                    localStorage.setItem('user-token', token) // store the token in localstorage
                        // Save Authorization header for all futur request
                    axios.defaults.headers.common['Authorization'] = token
                    commit('AUTH_LOGIN', token)
                    dispatch('AUTH_PROFILE', null)
                    commit('STATUS_SUCCESS', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)
                })
            })
        },
        ['AUTH_PROFILE']: ({ commit, rootState }) => {
            return new Promise((resolve, reject) => {
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/users/me/',
                    method: 'GET'
                }).then(resp => {
                    localStorage.setItem('user-profile', JSON.stringify(resp.data)) // store the token in localstorage
                    commit('AUTH_PROFILE', resp.data)
                    commit('STATUS_SUCCESS', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    reject(err)
                })
            })
        },
        ['AUTH_LOGOUT']: ({ commit }) => {
            return new Promise((resolve) => {
                commit('AUTH_LOGOUT')
                localStorage.removeItem('user-profile')
                localStorage.removeItem('user-token') // clear your user's token from localstorage
                resolve()
            })
        }
    }
}