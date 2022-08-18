const select = document.querySelector('select');
const home = document.querySelector('.home');
const media = document.querySelector('.media');
const mediaH = document.querySelector('.mediaH');
const about = document.querySelector('.about');
const aboutH = document.querySelector('.aboutH');
const aboutB = document.querySelector('.aboutB');

select.addEventListener('change', changeLanguage);
 
function changeLanguage() {
    if(select.value == 'ua') {
        home.innerHTML = arrLang['ua']['home'];
        media.innerHTML = arrLang['ua']['media'];
        mediaH.innerHTML = arrLang['ua']['mediaH'];
        about.innerHTML = arrLang['ua']['about'];
        aboutH.innerHTML = arrLang['ua']['aboutH'];
        aboutB.innerHTML = arrLang['ua']['aboutB'];
    }
    if(select.value == 'en') {
        home.innerHTML = arrLang['en']['home'];
        media.innerHTML = arrLang['en']['media'];
        mediaH.innerHTML = arrLang['en']['mediaH'];
        about.innerHTML = arrLang['en']['about'];
        aboutH.innerHTML = arrLang['en']['aboutH'];
        aboutB.innerHTML = arrLang['en']['aboutB'];
        
    }
    if(select.value == 'ru') {
        home.innerHTML = arrLang['ru']['home'];
        media.innerHTML = arrLang['ru']['media'];
        mediaH.innerHTML = arrLang['ru']['mediaH'];
        about.innerHTML = arrLang['ru']['about'];
        aboutH.innerHTML = arrLang['ru']['aboutH'];
        aboutB.innerHTML = arrLang['ru']['aboutB'];
    }
} 