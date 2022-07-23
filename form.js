var h1=document.getElementById("h1")
var form1=document.getElementById("form1")
var form2=document.getElementById("form2")
h1.addEventListener("click",()=>{
    console.log("clicked")
    form1.classList.add("valid")
    form2.classList.add("valid")
    h1.classList.add("valid")
    h2.classList.add("valid")
})

var h2=document.getElementById("h2")
var form1=document.getElementById("form1")
var form2=document.getElementById("form2")
h2.addEventListener("click",()=>{
    form1.classList.remove("valid")
    form2.classList.remove("valid")
    h1.classList.remove("valid")
    h2.classList.remove("valid")
})

var input=document.getElementsByTagName("input")
var login=document.getElementById("login")
var form=document.querySelector("form")
var email=document.getElementById("email")
var pass=document.getElementById("pass")

form.onsubmit=()=>{
    return false
}

login.onclick=()=>{
    if(input[0].value !== "" && input[1].value !==""){
      sp1.innerText="";
      form.onsubmit=()=>{return true}

    }

    else{
        if(input[0].value == ""){
            sp1.innerText="empty";
            email.classList.add("valid")
            setTimeout(()=>{
                sp1.innerText="";
                email.classList.remove("valid")
            },2000)

        }
        if(input[1].value == ""){
            sp2.innerText="empty";
            pass.classList.add("valid")
            setTimeout(()=>{
                sp2.innerText="";
                pass.classList.remove("valid")
            },2000)

        }
    }
}



var form=document.getElementById("form2")
var fname=document.getElementById("fname")
var lname=document.getElementById("lname")
var pass=document.getElementById("pass")
var pass2=document.getElementById("pass2")
var tel=document.getElementById("tel")
var email=document.getElementById("email")
var login2=document.getElementById("login2")
form.onsubmit=()=>{return false}
login2.onclick=()=>{
    if(fname.value !==""){
        sp3.innerText=""
        form.onsubmit=()=>{return true}
    }
    else{
        if(fname.value ==""){
            sp3.innerText="empty";
            setTimeout(()=>{
                sp3.innerText="";
            },2000)
        }
    }
}