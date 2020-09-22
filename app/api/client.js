import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
    baseURL: 'http://192.168.0.104:9000/api'
});

// Change implementation of get method for AsyncStorage
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);
    
    if(response.ok) {
        cache.store(url, response.data);
        return response;
    }

    const data = await cache.get(url); 
    // return ok response, otherwise return response with failed msg
    return data ? { ok: true, data } : response;
}

export default apiClient;