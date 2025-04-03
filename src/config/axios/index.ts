import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ResponseError } from './error';
import { MAIN_URL } from '../utils';

let instance = axios.create();

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {

    config.baseURL = `${MAIN_URL}`;

    config.headers = {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25JZCI6MSwicm9sZUlkIjoiMyIsImZpbyI6IlRlc3RVc2VyMSIsInVzZXJuYW1lIjoidGVzdFVzZXJAa2VpdCIsImV4cCI6MTc0ODk5OTkxNCwiaWF0IjoxNzQyOTc5OTE0fQ.v1TlGvFN0OUaLWkDRrKHb-PpM9C4RQsFEgrzVX4_ItQ`,
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