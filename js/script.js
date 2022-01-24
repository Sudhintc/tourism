let smail=document.getElementById("semail");
let phone=document.getElementById("phone");
let pwd1=document.getElementById("password1");
let pwd2=document.getElementById("password2");




function svalidate(){
    var res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var psr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(res.test(smail.value)!="1"){
        alert("enter a valid email");
        return false;
    }
    else if(phoneno.test(phone.value)!="1"){
        alert("enter valid phone number");
        return false;
    }
    else if(psr.test(pwd1.value)!="1"){
        alert("password should be of minimum 8 characters,must contain an uppercase,lowercase and at least one number");
        return false;
    }
    else if(pwd1.value!=pwd2.value){
        alert("password does not match");
        return false;
    }
    else{
        alert("validation success");
        return true;
    }
};

pwd1.addEventListener('keyup',function(){
    let sr=document.getElementById("strengthResult");
    let textElement = $(this).val()
        let strength = 0


        if (textElement.length > 0) {
            let sizeElements = textElement.length

            if (sizeElements > 10) {

                strength += 30

            } else {
                let calcMath = (sizeElements * 2)

                strength += calcMath

            }

        }

        let lowerCase = new RegExp(/[a-z]/)
        if (lowerCase.test(textElement)) {
            strength += 16
        }

        let upperCase = new RegExp(/[A-Z]/)
        if (upperCase.test(textElement)) {
            strength += 18
        }

        let regularNumber = new RegExp(/[0-9]/i)
        if (regularNumber.test(textElement)) {
            strength += 16
        }

        let specialChars = new RegExp(/[^a-z0-9]/i)
        if (specialChars.test(textElement)) {
            strength += 20
        }

        if(strength <10){
            sr.style.width="0%";
            sr.innerText="";
        }
       else if (strength < 21) {
            sr.style.width="20%";
            sr.style.backgroundColor="red";
            sr.innerText="20%";

        } else
            if (strength > 20 && strength < 41) {
                sr.style.width="20%";
                sr.style.backgroundColor="red";
                sr.innerText="20%";// weak password
            } else
                if (strength > 40 && strength < 61) {
                    sr.style.width="40%";
                    sr.style.backgroundColor="orange";
                    sr.innerText="42%";
                } else
                    if (strength > 60 && strength < 81) {
                        sr.style.width="60%";
                        sr.style.backgroundColor="grey";
                        sr.innerText="62%";
                    } else  if (strength > 81 && strength < 90) {
                        sr.style.width="84%";
                        sr.style.backgroundColor="mediumseagreen";
                        sr.innerText="84%";
                    }
                    else {
                        sr.style.width="100%";
                        sr.style.backgroundColor="green";
                        sr.innerText="100%";
                    }


        

    });