// import axios from "axios";

import {getAuth
        ,GithubAuthProvider
        ,GoogleAuthProvider
        ,signInWithPopup} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
class AuthLogic {
  constructor(){
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () =>{
    return this.auth;
  }
  getGoogleAuthProvider = () =>{
    return this.googleProvider;
  }
}//end of AuthLogic

export default AuthLogic;

//로그아웃(html에서 버튼 누를때) 호출 되는 함수
//파라미터에는 auth(firebase.js -> app -> getAuth)가 필요
//파라미터로 auth를 넣어줘야 signOut()호출이 가능
//이때 에러가 발생 -> 인증 받지 않아서 
export const logout = (auth) =>{
  return new Promise((resolve, reject) =>{
    auth.signOut().catch(e => reject(alert(e+":로그아웃 에러 발생")))
    localStorage.removeItem('uid');
    localStorage.removeItem('displayName');
    localStorage.removeItem('email');
    resolve();
  })
};



export const loginGoogle = (auth, googleProvider) => {
  console.log("loginGoogle 호출 성공");
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);
      console.log(JSON.stringify(result));
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("displayName", user.displayName);
      localStorage.setItem("email", user.email);
      resolve(user);
    }).catch((error) => reject(error));
})
}

//파이어베이스 인증에서 등록해둔 이메일과 비번으로 로그인 하기
export const loginEail = (params) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
}

export const loginKakao = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: "get",
        url:"카카오토큰을 받아올  URL주소",
        params: params

      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  })
}