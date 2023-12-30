import {switchThemeAndInf} from './switch.js'
export function generateHeaderDOM() {

    //! Получение рут блока
    let root = document.getElementById("root")

    //? Создание Header
    let headerDOM = document.createElement("div")
    headerDOM.setAttribute("class", "header")

    //! Создание контейнера для Header
    let headerContainer = document.createElement("div")
    headerContainer.setAttribute("class", "headerContainer")


    //todo Секция1  

    //!!!! ФУНКЦИЯ ПО ВСТАВКИ ОБЪЕКТОВ
    //todo Секция2 логотипа
    let sectionLogo = document.createElement("section")
    sectionLogo.setAttribute("class", "section__Logo")

    // Изображение логотипа
    let imageLogo = new Image();
    imageLogo.src = './img/logo.svg';
    imageLogo.setAttribute("class", "logo")
    imageLogo.setAttribute("alt", "Изображение логотипа")


    //todo Секция3 названия
    let sectionName = document.createElement("section")
    sectionName.setAttribute("class", "section__Name")

    let nameProject = document.createElement("h2")
    nameProject.setAttribute("class", "textHtwo")
    nameProject.textContent = "TheSanekPlay"


    // Аппенд всей конструкции
    root.append(headerDOM);
    headerDOM.append(headerContainer);
    switchThemeAndInf()
    headerContainer.append( sectionLogo,sectionName);

    // Секция 2
    sectionLogo.append(imageLogo)

    // Секция 3
    sectionName.append(nameProject) 
    
}
