
//存储用户的授权信息


const tokenName = 'car-net-token';

export function getToken() {
    return localStorage.getItem(tokenName);
}

//获取token的用户名
export function getUsername() {
    let token = getToken();
    if (!token)
        return "未登录";


    return token.split('%')[0];
}

//设置token
export function setToken(token) {
    localStorage.setItem(tokenName, token);
}

//清除token
export function clearToken() {
    localStorage.removeItem(tokenName);
}

//是否已经登录
export function isLogin() {
    if (localStorage.getItem(tokenName)) {
        return true;
    }
    return false;
}

