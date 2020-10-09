/* moduleDashboard.js  */


// initial state
import state from './moduleDashboardState'
import mutations from './moduleDashboardMutations'
import actions from './moduleDashboardActions'
import getters from './moduleDashboardGetters'


export default {
    namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}
