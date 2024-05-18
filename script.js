document.getElementById('leadform').addEventListener('submit', function(event){
event.preventDefault(); 
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const socialmidia = document.getElementById('socialmidia').value;

//aqui você pode adicionar a lógica para enviar ao banco de dados

alert(`Nome: ${name}\nEmail:${email}\nRede Social: ${socialmidia}`);


});