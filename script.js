const sign = document.querySelector(".sigIn")
const register = document.querySelector(".register")
const success = document.querySelector(".success")
const signButton = document.querySelector(".signEmailForm button")
const signForm = document.querySelector(".signEmailForm")
signButton.addEventListener("click", (element)=>
{
    validation(element, "signInputContainer")
    if(signForm.checkValidity())
    {
        sign.style.display = "none"
        register.style.display = "flex"
        success.style.display = "none"
        console.log("enviou");
    }
})

const registerButton = document.querySelector(".registerForm button")
const registerForm = document.querySelector(".registerForm")
registerButton.addEventListener("click", (element)=>
{
    validation(element, "registerInputContainer")
    selectValidation()
    if(registerForm.checkValidity() && passwordValidation() == false && selectValidation() == true)
    {
        sign.style.display = "none"
        register.style.display = "none"
        success.style.display = "block"
        console.log("enviou");
    }
})
function passwordValidation()
{
    const password = document.querySelector("#usuarioPassword")
    const passwordConfirm = document.querySelector("#usuarioConfirmPassword")
    if(password.value != passwordConfirm.value)
    {
        return true
    }
    else
    {
        return false
    }
}
function validation(element, inputContainer)
{
    element.preventDefault()
    const formItens = [...document.querySelectorAll(`.${inputContainer} .formItem`)]
    formItens.forEach(function(e)
    {
        const errorSpan = e.parentElement.querySelector(".error")
        if(!e.checkValidity())
        {

            if(e.id == "usuarioPassword" && !e.value == "")
            {
                errorSpan.innerHTML = e.setCustomValidity("A senha deve conter apenas letras, números e no minimo 6 caracteres.")
            }
            errorSpan.innerHTML = e.validationMessage
        }
        else
        {
            errorSpan.innerHTML = ""
        }
        if(e.id == "usuarioConfirmPassword"  && passwordValidation() === true) 
        {
            errorSpan.innerHTML = "As senhas são diferentes"
        }
    })
}
const selectContainer = document.querySelector(".selectContainer")
const selectedButton = document.querySelector(".selected")
const optionsContainer = document.querySelector(".optionsContainer")
const optionsList = document.querySelectorAll(".option")
selectedButton.addEventListener("click", ()=>
{
    optionsContainer.classList.toggle("active")
})
optionsList.forEach((element) =>
{
    element.addEventListener("click", () =>
    {
        selectedButton.innerHTML = element.querySelector("label").innerHTML
        optionsContainer.classList.remove("active")
    })
})
function selectValidation()
{
    if(selectedButton.innerHTML == "Selecione seu sexo")
    {
        selectContainer.parentElement.querySelector(".error").innerHTML = "Selecione seu sexo"
    }
    else
    {
        selectContainer.parentElement.querySelector(".error").innerHTML = ""
        return true
    }
}