import axios from 'axios'
//import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/';

//POST传参序列化
/*axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});*/

//返回状态判断
axios.interceptors.response.use((res) =>{
  if(!res.data.success){
    // _.toast(res.data.msg);
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  _.toast("网络异常", 'fail');
  return Promise.reject(error);
});

export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  /**
   * 用户登录
   
  Login(params) {
      return fetch('/users/api/userLogin', params)
  },
  */
  /**
   * 用户注册
   
  Regist(params) {
      return fetch('/users/api/userRegist', params)
  },
*/
  /**
   * 发送注册验证码
   
   RegistVerifiCode(tellphone) {
       return fetch('/users/api/registVerifiCode', {tellphone: tellphone})
   },
*/
  /**
   * 获取约跑步列表
   
  SportsList() {
    return fetch('/api/sportList')
  },*/

  /**
   * 获取约跑步详情
   
  SportsDetail(id) {
      return fetch('/api/sportDetail', {sportId: id})
  },*/

  /**
   * 获取用户信息
   
  UserInfo(id) {
      return fetch('/users/api/userInfo', {userId: id})
  },*/

  /**
   * 获取用户发布约行个数
   
  getPubTotravelNum(id) {
    return fetch('/users/api/getPubTotravelNum', {userId: id})
  },*/

  /**
  * 获取用户自己发布的约行
  
  getMyTravel(id) {
    return fetch('/users/api/myTravel', {userId: id})
  },*/
}