import {getField} from "vuex-map-fields";

export default {
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
        jobs.sort(function () {
            return 0.5 - Math.random()
        });

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
    sum: (state, getters) => {
        return getters.filteredJobs.length
    },
    currentPage: state => {
        return state.currentPage
    },
    perPage: state => {
        return state.perPage
    },
    metaTags: state => {
        return state.metaTags
    },
    singleJob: state => {
        return state.singleJob
    }
};