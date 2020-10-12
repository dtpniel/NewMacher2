import axios from "axios"

export default {

    async fetchJobss({commit, state}) {
        return axios.post(process.env.baseApi + "/jobs", {filter: state.filter})
            .then(jobs => {
                    if (!jobs.data)
                        return;
                    var data = jobs.data.data.recordsets;
                    // data[dataIndex.states].unshift({ id: 0, name: "All States" });
                    // data[dataIndex.mainCategories].unshift({ id: 0, name: "All Categories" });
                    commit("setJobs", data[dataIndex.jobs]);
                }
            )
    },
    fetchJobs({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios.post(process.env.baseApi + "/jobs", {params: {filter: payload.filter}})
                .then((response) => {
                    commit('SET_JOBS', response.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
}