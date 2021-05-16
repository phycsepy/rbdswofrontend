const sign_up = document.getElementById('Sign_up')
const email = document.getElementById('Email')
const password = document.getElementById('psw')
const change = document.getElementById('intro2')
let message

//signup data 
const sign_updata ={"email":"","password":""}

sign_up.addEventListener('click',()=>Sign_up())



 email.addEventListener('keyup',(ele)=>{
   sign_updata.email = ele.target.value
   
 })

 password.addEventListener('keyup',(ele)=>{
    sign_updata.password = ele.target.value
}) 


function Sign_up(){
    url = 'https://rbds-attendance.herokuapp.com/user/signup'
    console.log(sign_updata)
    sendserver(sign_updata,url)
    setTimeout(() => {
        change.innerHTML ="Create an account"
        }, 6000)
    

}
   
    

  function sendserver(details,url){
    console.log('in send')
    const options = {
        method: 'POST',
        body: JSON.stringify(details),
        headers:{
            "Content-Type":"application/json"
        }
        
    };
     fetch(url,options).then((res) => res.json()).then((res)=>{
          change.innerHTML = (res.message !== undefined)?res.message:"Please recheck yout details"
     })    
    
}
    

    
              
