import axios from 'axios';

const axiosInstance = axios.create({});

/**
 * Helper method to set axios config
 */
axiosInstance.interceptors.request.use(async config => {
    return config
}, error => Promise.reject(error));

/**
 * Helper axios method to make API requests
 * @param url
 * @param options
 * @returns {Promise<AxiosResponse<any>>}
 */
export function request(url, options = {}) {
    return axiosInstance({
        url,
        ...options
    })
        .then(res => res.data)
        .catch(error => {
            const {response = null, request = null} = error || {};
            if (response) {
                const {status = null, data = null} = response || {};
                // The request was made and the server responded with a status code
                return Promise.reject({code: status, message: data});
            } else if (request) {
                // The request was made but no response was received
                return Promise.reject({code: 'noResponse', message: 'No Response'});
            }
            // Something happened in setting up the request that triggered an Error
            return Promise.reject({code: 'setup', message: error.message});
        });
}

export {axiosInstance};
