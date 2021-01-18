import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields';

var dataIndex = {
  jobs: 0,
  states: 1,
  cities: 2,
  mainCategories: 3,
  categories: 4,
  mainCategorySEO: 5,
  categorySEO: 6,
  stateSEO: 7,
  citySEO: 8,
  premiumJobs: 9
};

export const state = () => ({
  jobs: [],
  singleJob: {},
  premiumJobs: [],
  filter: {
    stateId: 0,
    cityId: [],
    mainCategoryId: 0,
    categoryId: [],
    freelance: 0,
    partTime: 0,
    internship: 0,
    temporary: 0,
    fromHome: 0,
    freeText: "",
    sortBy: {},
    radius: 0,
    lat: 0,
    lng: 0
  },
  filterDefault: {
    stateId: 0,
    cityId: [],
    mainCategoryId: 0,
    categoryId: [],
    freelance: 0,
    partTime: 0,
    internship: 0,
    temporary: 0,
    fromHome: 0,
    freeText: "",
    radius: 1,
    lat: 0,
    lng: 0
  },
  filterDefinition: [
    {
      name: "stateId",
      multiple: false,
      server: true,
      resetSubCategory: true,
      subCategory: "cityId"
    },
    {
      name: "cityId",
      multiple: true,
      server: false,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "mainCategoryId",
      multiple: false,
      server: true,
      resetSubCategory: true,
      subCategory: "categoryId"
    },
    {
      name: "categoryId",
      multiple: true,
      server: false,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "freelance",
      multiple: false,
      server: false,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "partTime",
      multiple: false,
      server: false,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "internship",
      multiple: false,
      server: false,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "temporary",
      multiple: false,
      server: false,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "fromHome",
      multiple: false,
      server: false,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "freeText",
      multiple: false,
      server: true,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "radius",
      multiple: false,
      server: true,
      resetSubCategory: false,
      subCategory: ""
    },
    {
      name: "lat",
      multiple: false,
      server: true,
      resetSubCategory: false,
      subCategory: ""
    }
    , {
      name: "lng",
      multiple: false,
      server: true,
      resetSubCategory: false,
      subCategory: ""
    }],

  stateIdData: [],
  mainCategoryIdData: [],
  cityIdData: [],
  categoryIdData: [],
  freelanceData: [{ name: "Freelance", id: 1 }],
  fromHomeData: [{ name: "From Home", id: 1 }],
  partTimeData: [{ name: "Part Time", id: 1 }],
  internshipData: [{ name: "Internship", id: 1 }],
  temporaryData: [{ name: "Temporary", id: 1 }],
  metaTags: {
    title: "Jewish Jobs on Macher: The Largest Jewish Classifieds Website in the US",
    description: "The largest jewish jobs website in NYC, Brooklyn, Boro Park, Five Towns, Crown Heights, Woodmere, Monsey, Lakewood and more.",
    socialTitle: "",
    socialDescription: "",
    canonical: "",
    twitter: "@FrumJewishJobs",
    siteName: "Macher",
    categoryName: "",
    location: ""
  },
  currentPage: 1,
  perPage: 25
});

export const mutations = {

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

export const getters = {

  filteredJobs: state => {
    var filter = state.filter;
    return state.jobs
      .filter(x => {
        return (
          (filter.cityId.length == 0 ||
            filter.cityId.indexOf(x.cityId) > -1) &&
          (filter.categoryId.length == 0 ||
            filter.categoryId.indexOf(x.categoryId) > -1) &&
          (
            //no job type defined, take all 
            !(filter.freelance || filter.fullTime || filter.partTime || filter.fromHome || filter.internship || filter.temporary) ||
            (filter.freelance == x.freelance && filter.freelance) ||
            (filter.partTime == x.partTime && filter.partTime) ||
            (filter.fromHome == x.fromHome && filter.fromHome) ||
            (filter.internship == x.internship && filter.internship) ||
            (filter.temporary == x.temporary && filter.temporary)

          ));
      })
      .sort((a, b) => {
        var direction = state.filter.sortBy.direction;
        var sortBy = state.filter.sortBy.value;
        if (sortBy == "type") {
          if (b.type > a.type) return 1;
          else if (a.type > b.type) return -1;
        }
        if (direction == "desc") return new Date(b.date) - new Date(a.date);
        else return new Date(a.date) - new Date(b.date);
      }
      )
  },
  filteredJobsSliced: (state, getters) => {
    return getters.filteredJobs.slice(state.filter.start, state.perPage * state.currentPage);
  },
  premiumJobs: state => {
    var filter = state.filter;
    let jobs = [];
    let premiumJobs = [];

    Object.assign(jobs, state.premiumJobs);
    jobs.sort(function () { return 0.5 - Math.random() });

    //try to find 3 jobs from the main category
    premiumJobs = jobs
      .filter(x => {
        return (
          filter.mainCategoryId == 0 ||
          filter.mainCategoryId == x.mainCategoryId
        );
      })

    //if there are not enough, combine it with other premium ads
    if (premiumJobs.length < 3) {
      if (premiumJobs.length > 0)
        premiumJobs.push(...jobs);
      else
        premiumJobs = jobs;
    }

    return premiumJobs.slice(0, 3);
  },

  getFilter: state => {
    return getField(state.filter)
  },
  sum: (state, getters) => { return getters.filteredJobs.length },
  currentPage: state => { return state.currentPage },
  perPage: state => { return state.perPage },
  metaTags: state => { return state.metaTags },
  singleJob: state => { return state.singleJob }
};


export const actions = {

  async getJobs({ commit, state }) {
    return axios.post(process.env.baseApi + "/jobs/jobsList", { filter: state.filter })
      .then(jobs => {
        if (!jobs.data || !jobs.data.data)
          return;
        var data = jobs.data.data.recordsets;

        // data[dataIndex.states].unshift({ id: 0, name: "All States" });
        // data[dataIndex.mainCategories].unshift({ id: 0, name: "All Categories" });
        commit("setJobs", data[dataIndex.jobs]);
        commit("setStateData", data[dataIndex.states]);
        commit("setCityData", data[dataIndex.cities]);
        commit("setMainCategoryData", data[dataIndex.mainCategories]);
        commit("setCategoryData", data[dataIndex.categories]);
        commit("setcurrentPage", 1);
      }
      )
  },

  async getJobsMobile({ commit, state }) {
    return axios.post(process.env.baseApi + "/jobs/jobsListMobile", { filter: state.filter })
      .then(jobs => {
        if (!jobs.data || !jobs.data.data)
          return;
        var data = jobs.data.data.recordsets;
        commit("setJobs", data[dataIndex.jobs]);
        commit("setcurrentPage", 1);
        // commit("setStateData", data[dataIndex.states]);
        // commit("setMainCategoryData", data[dataIndex.mainCategories]);
      }
      )
  },

  async getJobsQueryString({ commit, dispatch }, data) {
    var route = data.route;
    return axios.post(process.env.baseApi + "/jobs/jobsQueryString", data.qstring)
      .then(jobs => {
        if (!jobs.data || !jobs.data.data)
          return;
        var data = jobs.data.data.recordsets;
        // data[dataIndex.states].unshift({ id: 0, name: "All States" });
        // data[dataIndex.mainCategories].unshift({ id: 0, name: "All Categories" });
        commit("setJobs", data[dataIndex.jobs]);
        commit("setStateData", data[dataIndex.states]);
        commit("setCityData", data[dataIndex.cities]);
        commit("setMainCategoryData", data[dataIndex.mainCategories]);
        commit("setCategoryData", data[dataIndex.categories]);
        commit("setpremiumJobs", data[dataIndex.premiumJobs]);
        dispatch("setMetaTags", data);
        //dispatch("setMetaTags", { data: data, route: route });
      }
      )
  },


  async getSingleJob({ commit, dispatch }, data) {
    return axios.post(process.env.baseApi + "/jobs/singleJob", data)
      .then(singleJob => {
        if (!singleJob.data || !singleJob.data.data)
          return;
        var data = singleJob.data.data.recordset;
        if (!data.length)
          return;

        commit("setSingleJob", data[0]);
        dispatch("setMetaTagsSingle", data);

        // commit("setStateData", data[dataIndex.states]);
        //dispatch("setMetaTags", { data: data, route: route });
      }
      )
  },

  setMetaTagsSingle({ commit }, data) {

    var data = data[0];

    var breadcrumbs = [{
      name: "Home",
      url: "/"
    }];

    var metaTags = {
      title: "",
      description: "",
      socialTitle: "",
      socialDescription: "",
      canonical: "",
      categoryName: "",
      location: ""
    };

    var title;
    var description;
    var qstring1, qstring2, qstring3;
    var canonical = "";

    //grap the information from db result

    qstring1 = data.mainCategoryQstring;
    breadcrumbs.push({ name: title, url: "/" + qstring1 })

    qstring2 = data.categoryQstring;
    breadcrumbs.push({ name: title, url: "/" + qstring1 + "/" + qstring2 })

    qstring3 = "item/" + data.id
    breadcrumbs.push({ name: title, url: "/" + qstring1 + "/" + qstring2 + "/" + qstring3 })

    //create canonical by params
    canonical = process.env.baseUrl + breadcrumbs[breadcrumbs.length - 1].url;


    title = data.title;
    description = data.description.substring(0, 200);

    //final: set the tags
    metaTags.title = "Macher Jewish Jobs - " + title;
    metaTags.description = "Macher Jewish Jobs - " + description;
    metaTags.socialTitle = title;
    metaTags.socialDescription = description;
    metaTags.canonical = canonical;
    commit("setMetaTags", metaTags);
  },

  setMetaTags({ commit }, data) {

    var breadcrumbs = [{
      name: "Home",
      url: "/"
    }];

    var metaTags = {
      title: "",
      description: "",
      socialTitle: "",
      socialDescription: "",
      canonical: "",
      categoryName: "",
      location: ""
    };

    var params = [];

    var title;
    var description;
    var qstring1, qstring2;
    var location = "";
    var canonical = "";

    //grap the information from db result
    var mainCategory = data[dataIndex.mainCategorySEO];
    if (mainCategory[0]) {
      title = mainCategory[0].title;
      description = mainCategory[0].description;
      qstring1 = mainCategory[0].qstring;
      breadcrumbs.push({ name: title, url: "/" + qstring1 })
      commit("setFilter", { mainCategoryId: mainCategory[0].mainCategoryId });
    }

    var category = data[dataIndex.categorySEO];
    if (category[0]) {
      title = category[0].title;
      description = category[0].description;
      qstring2 = category[0].qstring;
      breadcrumbs.push({ name: title, url: "/" + qstring1 + "/" + qstring2 })
      commit("setFilter", { categoryId: [category[0].categoryId] });
    }

    var stateUS = data[dataIndex.stateSEO]
    if (stateUS[0]) {
      location = " in " + stateUS[0].title;
      params.push({ name: "stateId", id: stateUS[0].stateId });
      commit("setFilter", { stateId: stateUS[0].stateId });
    }

    var city = data[dataIndex.citySEO]
    if (city[0]) {
      location = " in " + city[0].title;
      params.push({ name: "cityId", id: city[0].cityId });
      commit("setFilter", { cityId: [city[0].cityId] });
    }

    if (!title)
      return;

    //create canonical by params
    canonical = process.env.baseUrl + breadcrumbs[breadcrumbs.length - 1].url;
    params.forEach((param, index) => {
      if (index == 0)
        canonical += "?";
      else
        canonical += "&";
      canonical += param.name + "=" + param.id;
    });


    //final: set the tags
    metaTags.title = "Jewish " + title + " Jobs" + location + " on Macher";
    metaTags.description = "Search here for thousands of jewish jobs - "
      + description + location +
      " and more on Macher, the largest jewish classifieds website";
    metaTags.socialTitle = title + " Jobs";
    metaTags.socialDescription = description + " Jobs";
    metaTags.canonical = canonical;

    metaTags.categoryName = title;
    metaTags.location = location;
    commit("setMetaTags", metaTags);
  },

  async resetFilter({ commit }) {
    commit("resetFilter")
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};