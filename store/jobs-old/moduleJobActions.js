export default {

    async getJobs({commit, state}) {
        return axios.post(process.env.baseApi + "/jobs", {filter: state.filter})
            .then(jobs => {
                    if (!jobs.data)
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

    async getJobsMobile({commit, state}) {
        return axios.post(process.env.baseApi + "/jobsMobile", {filter: state.filter})
            .then(jobs => {
                    if (!jobs.data)
                        return;
                    var data = jobs.data.data.recordsets;
                    commit("setJobs", data[dataIndex.jobs]);
                    commit("setcurrentPage", 1);
                    // commit("setStateData", data[dataIndex.states]);
                    // commit("setMainCategoryData", data[dataIndex.mainCategories]);
                }
            )
    },

    async getJobsQueryString({commit, dispatch}, data) {
        var route = data.route;
        return axios.post(process.env.baseApi + "/jobsQueryString", data.qstring)
            .then(jobs => {
                    if (!jobs.data.data)
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


    async getSingleJob({commit, dispatch}, data) {
        return axios.post(process.env.baseApi + "/singleJob", data)
            .then(singleJob => {
                    if (!singleJob.data)
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

    setMetaTagsSingle({commit}, data) {

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
        breadcrumbs.push({name: title, url: "/" + qstring1})

        qstring2 = data.categoryQstring;
        breadcrumbs.push({name: title, url: "/" + qstring1 + "/" + qstring2})

        qstring3 = "item/" + data.id
        breadcrumbs.push({name: title, url: "/" + qstring1 + "/" + qstring2 + "/" + qstring3})

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

    setMetaTags({commit}, data) {

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
            breadcrumbs.push({name: title, url: "/" + qstring1})
            commit("setFilter", {mainCategoryId: mainCategory[0].mainCategoryId});
        }

        var category = data[dataIndex.categorySEO];
        if (category[0]) {
            title = category[0].title;
            description = category[0].description;
            qstring2 = category[0].qstring;
            breadcrumbs.push({name: title, url: "/" + qstring1 + "/" + qstring2})
            commit("setFilter", {categoryId: [category[0].categoryId]});
        }

        var stateUS = data[dataIndex.stateSEO]
        if (stateUS[0]) {
            location = " in " + stateUS[0].title;
            params.push({name: "stateId", id: stateUS[0].stateId});
            commit("setFilter", {stateId: stateUS[0].stateId});
        }

        var city = data[dataIndex.citySEO]
        if (city[0]) {
            location = " in " + city[0].title;
            params.push({name: "cityId", id: city[0].cityId});
            commit("setFilter", {cityId: [city[0].cityId]});
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

    async resetFilter({commit}) {
        commit("resetFilter")
    }
}