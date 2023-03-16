// let check = document.querySelector('.check');
// check.addEventListener('click', idioma);

// function idioma(){
//     let id = check.checked;
//     if(id==true){
//         location.href='en/index.html';
//     }else{
//         location.href='../index.html';
//     }
// }

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () =>{
    mainMenuElement.classList.toggle('main-menu--show');
});