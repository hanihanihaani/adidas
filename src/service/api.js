export const SERVER = 'http://192.168.1.210:3000';

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