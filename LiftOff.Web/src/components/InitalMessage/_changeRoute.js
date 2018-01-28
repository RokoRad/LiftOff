export default (type) => {
  if(type === 'login') {
    window.location.href = "/register";
  } else {
    window.location.href = "/";
  }
}