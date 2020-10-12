import {getField} from "vuex-map-fields";

export default {
    getJob: state => jobID => state.jobs.find((job) => job.id == jobID),
    queriedJobs: state => state.jobs
};