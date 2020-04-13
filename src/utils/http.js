import axios from "axios";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";

const service = axios.create({
  baseURL: "http://localhost:21222/"
});

//添加请求拦截器
service.interceptors.request.use(
  config => {
    var token = "token";
    config.headers["Authorization"] = "Bear " + token;
    return config;
  },
  error => {
    console.log("request", error);
  }
);

service.interceptors.response.use(
  response => {
    //服务器返回都是200
    return response.data;
  },
  error => {
    return {
      data: {
        code: 600,
        msg: "服务器维护中",
        data: null
      }
    };
  }
);

var http = {
  get: function(url, params, success, fail) {
    var config = {
      url: url,
      params: params,
      method: "get"
    };
    this.request(config, success, fail);
  },
  post: function(url, data, success, fail) {
    var config = {
      url: url,
      data: data,
      method: "post"
    };
    this.request(config, success, fail);
  },
  request(config, success, fail) {
  
    service.request(config).then(data => {
      if (data.code == 401) {
        //未登录
      }
      if (data.code == 402) {
        //token 失效 使用refreshtoken 换取token继续请求
        this.request(config, success, fail);
      }

      if (data.code == 0) {
        success(data);
      } else {
        fail(data);
      }
    });
  }
};

export default http;
