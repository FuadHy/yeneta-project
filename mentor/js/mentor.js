var token = localStorage.getItem('yeneta_mentor_token')
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
    }
}
logout.onclick = function(e){
    e.preventDefault()
    localStorage.removeItem('yeneta_mentor_token')
    window.location.href = 'login.html'
}

if(token){
    document.getElementsByClassName('user-name')[0].innerHTML = `${JSON.parse(localStorage.getItem('yeneta_mentor')).Mentor_First_Name} <span>Mentor</span>`
}