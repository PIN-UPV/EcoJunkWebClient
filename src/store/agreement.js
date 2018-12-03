import axios from 'axios'


export default {
    namespaced: true,
    state: {
        results: []
    },
    getters: {
        dealsWithoutRider: (state) => {
            return state.results.filter((result) => {
                return result.state == "P";
            });
        },
        myDeals: (state, getters, rootState) => {
            return state.results.filter((result) => {
                return result.customer.email == rootState.auth.profile.email;
            });
        },
        finalizedDeals: (state) => {
            return state.results.filter((result) => {
                return result.state == "F";
            });
        }
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
        ['AGREE_GETALL']: (state, res) => {
            state.results = res
        }
    },
    actions: {
        ['AGREE_GET']: ({ commit, rootState }, user) => {
            return new Promise((resolve, reject) => { // The Promise used for router redirect in login
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/deals/',
                    data: user,
                    method: 'GET',
                    crossDomain: true,
                }).then(resp => {
                    const res = resp.data.results
                        //localStorage.setItem('user-token', token) // store the token in localstorage
                        // Save Authorization header for all futur request
                        //axios.defaults.headers.common['Authorization'] = token
                    commit('AGREE_GETALL', res)
                    commit('STATUS_SUCCESS', null, { root: true })
                        // you have your token, now log in your user :)
                        //dispatch('user/USER_REQUEST', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                        //localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)
                })
            })
        },
        ['AGREE_ADD']: ({ commit, rootState }, agreement) => {
            return new Promise((resolve, reject) => {
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    headers: {
                        accept: 'application/json'
                    },
                    url: rootState.apiPath + '/deals/',
                    data: agreement,
                    method: 'POST',
                    crossDomain: true,
                }).then(resp => {
                    commit('STATUS_SUCCESS', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    reject(err)
                })
            })
        },
        ['DEAL_ACCEPT']: ({ commit, rootState }, Deal) => {
            return new Promise((resolve, reject) => {
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/deals/' + Deal.id + '/accept_deal/',
                    method: 'POST'
                }).then(resp => {
                    commit('STATUS_SUCCESS', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    reject(err)
                })
            })
        },
        ['DEAL_DECLINE']: ({ commit, rootState }, Deal) => {
            return new Promise((resolve, reject) => {
                commit('STATUS_LOADING', null, { root: true })
                axios({
                    url: rootState.apiPath + '/deals/' + Deal.id + '/decline_deal/',
                    method: 'POST'
                }).then(resp => {
                    commit('STATUS_SUCCESS', null, { root: true })
                    resolve(resp)
                }).catch(err => {
                    commit('STATUS_ERROR', err.response.data.message, { root: true })
                    reject(err)
                })
            })
        }
    }
}