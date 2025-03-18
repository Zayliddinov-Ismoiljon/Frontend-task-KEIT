import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseError } from './error';
import { MAIN_URL } from '../utils';

let instance = axios.create();

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const access_token = localStorage.getItem('access_token');

    config.baseURL = `${MAIN_URL}`;

    config.headers = {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/ld+json',
    }
    return config;
}

const onRequestError = async (error: AxiosError): Promise<AxiosError> => {
    new ResponseError(error);
    return Promise.reject(error);
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
}

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    new ResponseError(error);
    return Promise.reject(error);
}

instance.interceptors.request.use(onRequest as any, onRequestError)
instance.interceptors.response.use(onResponse, onResponseError)

export default instance;