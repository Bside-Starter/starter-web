import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import qs from "qs";

export interface AxiosRequestParams {
  method: string;
  url: string;
  queryParams?: unknown;
  requestBody?: unknown;
  headers?: AxiosRequestHeaders;
}

export const axiosUtils = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  AXIOS_CONFIG_DEFAULT: {
    timeout: 200000,
    paramsSerializer: {
      serialize: (params: Record<string, unknown>) =>
        qs.stringify(params, { arrayFormat: "brackets" }),
    },
    withCredentials: true,
  },
};

export const request = async <T>(
  instance: AxiosInstance,
  method: string,
  url: string,
  queryParams: unknown,
  requestBody: unknown,
  headers?: AxiosRequestHeaders
): Promise<AxiosResponse<T>> => {
  switch (method) {
    case axiosUtils.GET:
      return instance.get(url, { params: queryParams, headers });
    case axiosUtils.POST:
      return instance.post(url, requestBody, {
        params: queryParams,
        headers,
      });
    case axiosUtils.PUT:
      return instance.put(url, requestBody, {
        params: queryParams,
        headers,
      });
    case axiosUtils.DELETE:
      return instance.delete(url, {
        params: queryParams,
        headers,
      });
    default:
      return Promise.reject(new Error("Invalid HttpMethod"));
  }
};

export class AppAxiosInstance {
  private baseURL: string;

  private instance: AxiosInstance | undefined;

  constructor(type: "main" | "mock") {
    switch (type) {
      case "main":
        this.baseURL = "http://223.130.128.167";
        break;
      case "mock":
        this.baseURL = "";
        break;
      default:
        this.baseURL = "";
    }
  }

  private createInstance = (): AxiosInstance => {
    const { baseURL } = this;
    const axiosConfig: AxiosRequestConfig = {
      ...axiosUtils.AXIOS_CONFIG_DEFAULT,
      baseURL,
    };
    return axios.create(axiosConfig);
  };

  public readonly getInstance = (): AxiosInstance => {
    if (!this.instance) {
      this.instance = this.createInstance();
    }
    return this.instance;
  };
}

export const defaultAxios = new AppAxiosInstance("main");
export const mockAxios = new AppAxiosInstance("mock");
