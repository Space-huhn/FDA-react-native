class Interceptor {
  static request(httpInstance) {
    httpInstance.getAxiosInstance().interceptors.request.use(
      async (config) => {
        const queryConfig = config;
        const isAbsoluteURLRegex = /^(?:\w+:)\/\//;

        // queryConfig.headers['X-Localization'] = getCookie('NEXT_LOCALE') || 'en';

        if (!isAbsoluteURLRegex.test(config.url)) {
          // queryConfig.url = `http://api.loc:8085/api/v1/${queryConfig.url}`;

          //check url address on make modification
          queryConfig.url = `http://api.loc:3050/api/${queryConfig.url}`;
        }

        const token = localStorage.getItem('authToken');

        if (token) {
          queryConfig.headers.Authorization = `Bearer ${token}`;
        }

        return queryConfig;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  static response(httpInstance) {
    httpInstance.getAxiosInstance().interceptors.response.use(
      async (response) => {
        return response;
      },
      async (error) => {
        return Promise.reject(error.response);
      }
    );
  }
}

export default Interceptor;