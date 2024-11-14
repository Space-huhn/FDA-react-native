import axios from 'axios';
import Interceptors from './interceptors';
import qs from 'qs';

const stringifyParams = (params) => {
  return qs.stringify(params, {
    arrayFormat: 'comma',
    allowDots: true,
    skipNulls: true,
  });
};

class Http {
  axios;

  constructor() {
    this.axios = axios.create({
      defaults: {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    });

    Interceptors.request(this);
    Interceptors.response(this);
  }

  getAxiosInstance() {
    return this.axios;
  }

  async get(url, params = {}) {
    try {
      const response = await this.axios.get(url, {
        params,
        responseType: this.responseType,
        paramsSerializer: params => {
          return stringifyParams(params);
          return params;
        }
      });
      return response.data;

    } catch (e) {
      throw e.data;
    }
  }

  async delete(url, data = {}) {
    try {
      const response = await this.axios.delete(url, {
        data
      });

      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  async patch(url, data) {
    try {
      const response = await this.axios.patch(url, data);
      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  async post(url, data, onUploadProgress = () => {
  }) {
    console.log(`data: ${data}`)
    try {
      console.log(url)
      const response = await this.axios.post(url, data, {
        onUploadProgress: onUploadProgress
      });
      return response.data;
    } catch (e) {
      console.log(e)
      throw e?.data;
    }
  }

  async put(url, data) {
    try {
      const response = await this.axios.put(url, data);
      return response.data;
    } catch (e) {
      throw e.data;
    }
  }

  setHeaders(headers) {
    this.axios.defaults.headers = {
      ...this.axios.defaults.headers,
      ...headers
    };
    return this;
  }

  setParams(params) {
    this.axios.defaults.params = {
      ...this.axios.defaults.params,
      ...params
    };
    return this;
  }

  getResponseData() {
    return this;
  }
}

export default Http;
