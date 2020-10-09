/*=
* ========
*
*  MUTATIONS.JS FILE
* @head
* @isMobile
* @updateUserInfo
* =========
*
* */
const mutations = {
    // Check Mobile device
    isMobile(state, isMobile) {
        state.isMobile = isMobile;
    },
    // User/Account
    isLoggedIn(state, user) {
    },
    // Updates user info in state and localstorage
    updateUserInfo(state, payload) {
        let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser
        for (const property of Object.keys(payload)) {
            if (payload[property] != null) {
                state.user[property] = payload[property]
                userInfo[property] = payload[property]
            }
        }
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
    },
}

export default mutations

