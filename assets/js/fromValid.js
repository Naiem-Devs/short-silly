window.addEventListener('load', () => { 
    const email = document.querySelector('.email');
    const button = document.querySelector('#submitbtn');
    const text =  document.querySelector('#message');

    const validateEmail= (email) => {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }


    function formValidation() {
        if (email.value.length > 0) {
            if(validateEmail(email.value)){
                text.classList.add("fas")
                text.classList.add("fa-check-circle")
                text.classList.remove("fal")
                text.classList.remove("fa-times")
            }else{
                text.classList.add("fa-times")
                text.classList.add("fal")
                text.classList.remove("fas")
                text.classList.remove("fa-check-circle")
            }
        }else{ 
            text.classList.add("fa-times")
            text.classList.add("fal")
            text.classList.remove("fas")
            text.classList.remove("fa-check-circle")
        }
    }  


    email.addEventListener('change',()=>{
        formValidation()
    })
})