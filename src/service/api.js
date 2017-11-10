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