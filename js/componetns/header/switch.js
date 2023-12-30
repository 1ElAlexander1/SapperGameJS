export function switchThemeAndInf() {
    //todo Секция1 темы
    
    let containerHeader = document.querySelector(".headerContainer")

    let sectionTheme = document.createElement("section")
    sectionTheme.setAttribute("class", "section__theme")

    containerHeader.append(sectionTheme)
    //! Секция 1
    
    // Черное изображение информации
    let imageinformation__black = new Image();  
    imageinformation__black.src = './img/blackinf.svg';
    imageinformation__black.setAttribute("class", "themeHeader")
    imageinformation__black.setAttribute("alt", "Изображение кнопки информации")

    // Черное изображение темы луны
    let imageTheme__black = new Image();  
    imageTheme__black.src = './img/blackmoon.svg';
    imageTheme__black.setAttribute("class", "moon")
    imageTheme__black.setAttribute("alt", "Изображение темы")

    sectionTheme.append(imageinformation__black, imageTheme__black)

    // Функция для переключения изображения информации
    function switchInformationImage() {
            let informationButton = document.querySelector(".themeHeader")
            let imageInfo = document.querySelector(".moon");
            let background = document.querySelector(".headerContainer")
            let textNameCreatorApp = document.querySelector(".textHtwo")
            let logoImg = document.querySelector(".logo")
            
                // Меняем изображения луны
                if (imageInfo.src.includes('blackmoon')) {

                    informationButton.style.opacity = "0"; // Уменьшаем прозрачность перед изменением изображения
                    imageInfo.style.opacity = "0"; // Уменьшаем прозрачность перед изменением изображения
                    setTimeout(function(){

                    informationButton.src = './img/whiteinf.svg';
                    informationButton.style.opacity = "1"; // Увеличиваем прозрачность после изменения изображения 
                    informationButton.style.backgroundColor = "rgb(170, 191, 208)";

                    imageInfo.src = './img/whitemoon.svg';
                    imageInfo.style.opacity = "1"; // Увеличиваем прозрачность после изменения изображения 
                    imageInfo.style.background = "rgb(47, 48, 52)"

                    background.style.backgroundColor = "rgb(47, 48, 52)"; // темный
                    textNameCreatorApp.style.color = "rgb(170, 191, 208)"; // Меняем цвет текста на светлый
                    logoImg.style.backgroundColor = "rgb(249, 255, 255)" ;  
                    },300) // Длительность, должна соответствовать времени анимации в CSS
                    
                } else { 
                    informationButton.style.opacity = "0.1"; // Уменьшаем прозрачность перед изменением изображения
                    imageInfo.style.opacity = "0"; // Уменьшаем прозрачность перед изменением изображения
                    setTimeout(function() {

                        informationButton.src = './img/blackinf.svg';
                        informationButton.style.opacity = "1"; // Увеличиваем прозрачность после изменения изображения 
                        informationButton.style.backgroundColor = "rgb(170, 191, 208)";

                        imageInfo.src = './img/blackmoon.svg';
                        imageInfo.style.opacity = "1"; // Увеличиваем прозрачность после изменения изображения
                        imageInfo.style.background = "rgb(170, 191, 208)"

                        background.style.backgroundColor = "rgb(170, 191, 208)" // серый
                        textNameCreatorApp.style.color = "rgb(47, 48, 52)"; // Меняем цвет текста на темный
                        logoImg.style.backgroundColor = "rgb(170, 191, 208)" ;
                    }, 100); // Длительность, должна соответствовать времени анимации в CSS
                    
                    
                }
}

// Теперь добавим обработчик события 'click' для изображения информации
imageTheme__black.addEventListener("click", switchInformationImage);
}