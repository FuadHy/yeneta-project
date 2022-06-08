var token = localStorage.getItem('yeneta_admin_token')
var login = document.getElementById('signedout')
var account = document.getElementById('loggedin')
var logout = document.getElementById('logout')

window.onload = function(){
    if(!token){
        if(/login.html/.test(window.location.pathname)) return
        window.location.href = 'login.html'
    } else {
        login.style.display = 'none'
        account.style.display = 'block'
        logout.style.display = 'block'
    }
}
logout.onclick = function(e){
    e.preventDefault()
    localStorage.removeItem('yeneta_admin_token')
    window.location.href = 'login.html'
}
let l = document.getElementById('user-name')
if(token){
    document.getElementById('user--name').innerHTML = `${JSON.parse(localStorage.getItem('yeneta_admin')).First_Name} <span>Admin</span>`
    if(l) l.innerHTML = `Hey, ${JSON.parse(localStorage.getItem('yeneta_admin')).First_Name}`
}