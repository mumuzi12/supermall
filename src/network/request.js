import axios from 'axios';

export function request (config) {
  //
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/x6',
    timeout: 5000
  });
  // axios拦截器
  // 拦截请求
  // config 中一些信息不符合服务规则
  // 在发送请求时显示一个请求图标
  // 某些网络请求必须携带一些特殊的信息 登录--token

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    //console.log(err);
  });
  instance.interceptors.response.use(res => {
    //console.log(res);
    return res.data;
  }, err => {
    console.log(err);
  });
  // 本身返回的就是一个promise
  return instance(config);
}


