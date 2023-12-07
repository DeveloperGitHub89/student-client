export function isAuthenticated(){
    return getToken() ? true:false;
}
export function getToken(){
    return localStorage.getItem("token");
}