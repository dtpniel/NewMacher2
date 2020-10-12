import {updateField} from "vuex-map-fields";

export default {

    setJobs(state, data) {
        state.jobs = data;
    },
    setSingleJob(state, data) {
        state.singleJob = data;
    },

    setStateData(state, data) {
        state.stateIdData = data;
    },

    setCityData(state, data) {
        state.cityIdData = data;
    },

    setMainCategoryData(state, data) {
        state.mainCategoryIdData = data;
    },

    setCategoryData(state, data) {
        state.categoryIdData = data;
    },

    setpremiumJobs(state, data) {
        state.premiumJobs = data;
    },

    setMetaTags(state, metaTags) {
        state.metaTags = Object.assign({}, state.metaTags, metaTags);
    },

    setFilter(state, filter) {
        state.filter = Object.assign({}, state.filter, filter)
    },

    updateFilter(state, field) {
        updateField(state.filter, field);
    },

    resetFilter(state) {
        Object.assign(state.filter, state.filterDefault);
    },

    setcurrentPage(state, currentPage) {
        state.currentPage = currentPage;
    },

    setperPage(state, perPage) {
        state.perPage = perPage;
    }
};
