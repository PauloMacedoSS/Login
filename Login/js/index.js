function showPass() {
    const eye = document.getElementById('eye');
    const eyeLow = document.getElementById('eye-low');
    const fieldPass = document.getElementById('field-password');

    if(eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeLow.style.display = 'none';
        fieldPass.type = 'text'
    } else {
        eye.style.display = 'none';
        eyeLow.style.display = 'block';
        fieldPass.type = 'password'
    }
};

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();//previne o comportamento padrão da pagina.
})