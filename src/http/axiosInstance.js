import axios from 'axios';

// 创建一个 axios 实例
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8001', // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如添加认证 token
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    if (error.response) {
      // 服务器返回的状态码在 2xx 以外
      switch (error.response.status) {
        case 401:
          // 未授权，可以重定向到登录页面
          console.error('未授权，请登录');
          break;
        case 403:
          // 禁止访问
          console.error('禁止访问');
          break;
        case 404:
          // 请求的资源未找到
          console.error('请求的资源未找到');
          break;
        case 500:
          // 服务器内部错误
          console.error('服务器内部错误');
          break;
        default:
          console.error(`错误: ${error.response.status}`);
      }
    } else if (error.request) {
      // 请求已经发出，但没有收到响应
      console.error('请求已经发出，但没有收到响应', error.request);
    } else {
      // 其他错误
      console.error('其他错误', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;