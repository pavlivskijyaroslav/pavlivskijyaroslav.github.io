document.querySelector('form').addEventListener('submit', (e)=>{
  e.preventDefault();
  let number = document.getElementById('usernumber');
  let email = document.getElementById('useremail');

  let emailVal = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(email.value);
  let phoneVal = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(number.value);

  if(!phoneVal){
    alert("Введіть коректний номер телефону")
}

  if(!emailVal){
      alert("Введіть коректну пошту")
  }
  if(emailVal && phoneVal){
    alert('asfa')
  }
}
)

