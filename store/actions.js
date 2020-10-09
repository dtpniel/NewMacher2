/*=

* ========
*
*  ACTIONS.JS FILE
* @updateUserInfo
* @nuxtServerInit
*
* =========
*
* */
const actions = {
    // User/Account
    updateUserInfo({commit}, payload) {
        commit('UPDATE_USER_INFO', payload)
    },

    async nuxtServerInit({commit}, {req}) {
        var MobileDetect = require('mobile-detect'),
            md = new MobileDetect(req.headers['user-agent']);
        var isMobile = false;
        if (md.mobile())
            isMobile = true;
        await commit('isMobile', isMobile)

    }
}

export default actions
