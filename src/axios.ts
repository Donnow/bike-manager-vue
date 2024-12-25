import axios from "axios";

// 创建axios实例
const instance = axios.create({
	baseURL: "/api", // 设置代理的基础URL
	// 其他配置...
});

// 请求拦截器
instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// 响应拦截器
instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			// 处理未授权，例如重定向到登录页
			// ...existing code...
		}
		return Promise.reject(error);
	}
);

export default instance;
