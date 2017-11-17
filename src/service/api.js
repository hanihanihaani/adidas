import MyFetch from "./MyFetch";
export const SERVER = 'http://192.168.1.210:3000';


const apiConfig = {
  login:["/login","POST","json"],
  logout:["/logout"],
  signup:["/signup","POST","json"],
  captcha:["/captcha"],

  addCat:["/manage/category","POST","json"],
  modifyCat:["/manage/category","PUT","json"],
  delCat:["/manage/category","DELETE","json"],
  getCats:["/manage/category","GET","json"],

  addProduct:["/manage/product","POST","json"],
  getPro:["/manage/product","GET","query"],
  getProduct:["/manage/product","GET","path"],
  delProduct:["/manage/product","DELETE","path"],

  addCart:["/shoppingcart","POST","json"],
  getCart:["/shoppingcart"],
  delCart:["/shoppingcart","DELETE","path"]
}

const takeConfigToFunc = (config) => {
  const api = {};
  for (let key in config) {
    const value = config[key];
    if (value.length === 3 && value[2] !== "none") {
      api[key] = (payload) => (MyFetch(...value,payload));
    } else {
      api[key] = () => (MyFetch(...value));
    }
  }
  return api;
}

export default takeConfigToFunc(apiConfig);

/*
export const login = (form) => {
  return fetch(SERVER+'/login',{
    credentials:'include',
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(form)
  }).then((res) => {
    return res.json()
  }) 
}

export const captcha = () => {
  return fetch(SERVER+'/captcha',{
    credentials:'include'
  }).then((res) => {
    return res.json();
  })
}

export const logout = () => {
  return fetch(SERVER+"/logout",{
    credentials:"include"
  }).then((res) => {
    return res.json();
  })
}

export const signup = (form) => {
  return fetch(SERVER+'/signup',{
    credentials:'include',
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body:JSON.stringify(form)
  }).then((res) => {
    return res.json()
  })

}

export const getCats = (level) => {
  return fetch(SERVER+'/manage/category/'+(level||""),{
    credentials:'include',
  }).then((res) => {
    return res.json()
  })
}

export const addCat = (form) => {
  return  fetch(SERVER+'/manage/category',{
    credentials:'include',
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(form)
  }).then((res) => {
    return res.json()
 })
}

export const addProduct = (form) => {
  return fetch(SERVER+'/manage/product',{
    credentials:'include',
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(form)
  }).then((res) => {
    return res.json()
  })
}
*/

