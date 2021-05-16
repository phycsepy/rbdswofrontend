
const changer = document.getElementById('intro2')
const mail = document.getElementById('lemail')
const psw = document.getElementById('lpsw')
const but = document.getElementById('Login')
const bo = document.getElementById('bo')
const login_update ={"email":"","password":""}

mail.addEventListener('keyup',(ele)=>{
    login_update.email = ele.target.value
    
  })
 
  psw.addEventListener('keyup',(ele)=>{
     login_update.password = ele.target.value
 }) 

but.addEventListener('click',()=>Login())
let userstoken

function Login(){
    console.log(login_update)
    url = 'https://rbds-attendance.herokuapp.com/user/login'
   
    const options = {
        method: 'POST',
        body: JSON.stringify(login_update),
        headers:{
            "Content-Type":"application/json"
        }
        
    };
    
     fetch(url,options).then((res) => res.json()).then((res)=>{
         userstoken = res.token 
        if(res.message === "Auth successful"){
              bo.innerHTML  = ` <h1>ur in </h1> 
              <button id="start">start</button>
              <button id="stop">stop</button>
              <div id="message"></div>
              `
        const start = document.getElementById('start')
        const stop = document.getElementById('stop')
        const mes = document.getElementById('message')
        let restoken = []
        start.addEventListener("click",()=>timeStart())
        const timeStart = ()=>{
            fetch('https://rbds-attendance.herokuapp.com/attendance/startSession', {
                method: 'post',
                headers: {
                    'Authorization': 'Bearer '+userstoken
                }
            })
                .then(response => console.table(response));
        }
        stop.addEventListener("click",()=>timestop())
        const timestop = ()=>{
            fetch('https://rbds-attendance.herokuapp.com/attendance/endSession', {
                method: 'post',
                headers: {
                    'Authorization': 'Bearer '+userstoken
                }
            })
                .then(response => console.table(response));
        }
        }
        })
        
   
}





    
   
