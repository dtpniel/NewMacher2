import {getUser} from "../services/api/auth";

export const MUTATIONS = {
    IS_MOBILE: 'isMobile',
    LOGGED_USER: 'loggedInUser'
};
export const ACTIONS = {
    INIT: 'nuxtServerInit',
    LOGGED_USER: 'loggedInUser'
};
export const GETTERS = {
    IS_MOBILE: 'isMobile',
    IS_AUTHENTICATED: 'isAuthenticated',
    LOGGED_USER: 'loggedInUser'
};

const store = {
    state() {
        return {
            isMobile: false,
            user: []
        }
    },
    mutations: {
        [MUTATIONS.IS_MOBILE](state, isMobile) {
            state.isMobile = isMobile;
        },
        [MUTATIONS.LOGGED_USER](state, user) {
            state.user = user;
        }
    },
    actions: {
        [ACTIONS.INIT]({commit}, {req}) {
            const MobileDetect = require('mobile-detect');
            const md = new MobileDetect(req.headers['user-agent']);
            const isMobile = md.mobile();
            commit('isMobile', isMobile)
        },
        [ACTIONS.LOGGED_USER]({commit}, user) {
            return getUser(user).then(({data}) => {
                commit(MUTATIONS.LOGGED_USER, data.recordset);
                return data;
            });
        }
    },
    getters: {
        [GETTERS.IS_MOBILE](state) {
            if (process.browser) {
                const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
                return width < 990;
            }
            return state.isMobile;
        },
        [GETTERS.IS_AUTHENTICATED](state) {
            return true;
        },
        [GETTERS.LOGGED_USER](state) {
            return true;
            //  return state.auth.user
        }
    }
};

export default store;
