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

import menu from '@/api/menu';

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
    // is authenticated
    isAuthenticated(state) {
        return true;
    },
    // logged in user
    loggedInUser(state) {
        return true;
        //  return state.auth.user
    },
    // breaking points
    windowBreakPoint: state => {
        if (state.windowWidth >= 1200) return "xl"
        else if (state.windowWidth >= 992) return "lg"
        else if (state.windowWidth >= 768) return "md"
        else if (state.windowWidth >= 576) return "sm"
        else return "xs"
    },
    // dashboard Menus

}

export default getters
