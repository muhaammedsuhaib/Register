document.getElementById('myForm').addEventListener('submit',function (event){
    event.preventDefault();

    var inputName=document.getElementById('name');
    var inputEmail=document.getElementById('email');
    var inputNumber=document.getElementById('number')
    var inputDate=document.getElementById('date')
    var inputPassword=document.getElementById('password')
    var isValid = true;

    alert(`
    Name : ${inputName.value}
    Email:${inputEmail.value}
    Number:${inputNumber.value}
    ${inputDate.value}
    Password:${inputPassword.value}   
    `)
    
})