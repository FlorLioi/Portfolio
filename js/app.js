/* NAV */

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () =>{
    mainMenuElement.classList.toggle('main-menu--show');
});

/* LANGUAGE */

const flagsElement = document.getElementById('flags');//Primero localizas el elemento

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});//Para acceder a ese parametro (e.target.parentElement.dataset.language) 

const textsToChange = document.querySelectorAll('[data-section]'); //Localizas los textos

const changeLanguage = async language =>{ //Funcion que lee el json
    const requestJson = await fetch(`./languages/${language}.json`) //Pasamos la ruta
    const texts = await requestJson.json(); //Lo convertimos en objeto y poder utilizarlo

    for(const textToChange of textsToChange){ //Recorremos los textos
        const section = textToChange.dataset.section; //Tomamos la section
        const value = textToChange.dataset.value;// Tomamos el value
        textToChange.innerHTML = texts[section][value];
    }

}

/* FILTRO */

const liItem = document.querySelectorAll('li');
const card = document.querySelectorAll('.card');

for (i = 0; i < liItem.length; i++){
    liItem[i].addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;
        card.forEach((proyect) => {
            if(filter == 'todo'){
                proyect.style.display='block';
            }else{
                if(proyect.classList.contains(filter)){
                    proyect.style.display='block';
                }else{
                    proyect.style.display='none';
                }
            }
        })
    })
}
//FORM ejemplo.
//https://alertifyjs.com/ Alertas.

// let form = document.querySelector('form');

// form.addEventListener('submit', (e) =>{
//     e.preventDefault();

//     let name = document.querySelector('#name').value;
//     let email = document.querySelector('#email').value;
//     let message = document.querySelector('#message').value;

//     let expRegEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email); //REVISAR

//     if(name === null || name.length === 0){
//         alertify.error('El campo nombre es invalido');
           //document.querySelector('#name').style.boxShadow('0 0 5px red');  

        
//     }else if(expRegEmail){
//         alertify.error('El campo email es invalido');
           //document.querySelector('#email').style.boxShadow('0 0 5px red'); //REVISAR 
       
//     }else if(message === null || message.length === 0){
//         alertify.error('El campo mensaje es invalido');
           //document.querySelector('#message').style.boxShadow('0 0 5px red');
        
        
//     }else{
//         alertify.success('Mensaje enviado!');
//         // document.querySelector('#name').value = "";
//         // document.querySelector('#email').value = "";
//         // document.querySelector('#message').value = "";
//     }
// })
