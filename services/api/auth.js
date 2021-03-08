import {request} from './common';

const BASE_URL = `${process.env.baseApi || ''}`;

/**
 * Helper method to get user details based on the params
 * @param data
 * @param options
 * @returns {Promise<AxiosResponse<any>>}
 */
export function getUser(data, options = {}) {
    return request(`${BASE_URL}/auth/user/me`, {
        method: 'POST',
        data,
        ...options
    });
}
