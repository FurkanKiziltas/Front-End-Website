const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const description = document.querySelector("#description");

function error(input, message){
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback mt-1 mb-3";
};
function success(input){
    input.className = "form-control mb-3 is-valid";
};
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(input.value)){
        error(input, "Hatalı E-Posta Adresi");
    }else {
        success(input);
    }
};
function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input, "Boş Bırakılamaz");
        }else{
            success(input);
        }
    });
};

form.addEventListener("submit", function(e){
    e.preventDefault();
    checkRequired([username,email,tel,description]);
    checkEmail(email);
});
