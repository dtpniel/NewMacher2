/*=
* ========
*
*  GETTERS.JS FILE
* @loggedInUser
* @isMobile
* @isAuthenticated
* =========
*
* */
const getters = {
    isMobile: (state) => {
        // NOTE: windowBreakPoint can be used to determine the widht and set all along the side
        if (process.browser) {
            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (width < 990)
                return true;
            else
                return false;
        } else return state.isMobile;
    },
    isAuthenticated(state) {
        return true;
    },

    loggedInUser(state) {
        return true;
        //  return state.auth.user
    },
    windowBreakPoint: state => {
        if (state.windowWidth >= 1200) return "xl"
        else if (state.windowWidth >= 992) return "lg"
        else if (state.windowWidth >= 768) return "md"
        else if (state.windowWidth >= 576) return "sm"
        else return "xs"
    },
}

export default getters
