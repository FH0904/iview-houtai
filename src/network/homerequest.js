import request from "./request";


export function getGoods(page) {
  return request({
    url: 'user/main/index',
    params:{
      page
    }
  })
}

export function login(phone,password) {
  return request({
    url: 'user/auth/login',
    params:{
      phone,
      password
    }
  })
}
