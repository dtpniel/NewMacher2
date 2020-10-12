import state from './moduleJobState'
import mutations from './moduleJobMutations'
import actions from './moduleJobActions'
import getters from './moduleJobGetters'

export default {
    isRegistered: false,
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}