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