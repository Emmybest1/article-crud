import axios from "axios";

export const get = (endpoint) => axios.get(endpoint);
export const get_single_resource = (endpoint, id) => axios.get(endpoint + `?id=${id}`.toString());
export const post = (endpoint, data) => axios.post(endpoint, data);
export const del = (endpoint, id) => axios.delete(endpoint + `?id=${id}`.toString());
