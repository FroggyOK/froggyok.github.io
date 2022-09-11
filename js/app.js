const select = document.querySelector('select');
const home = document.querySelector('.home');
const media = document.querySelector('.media');
const mediaH = document.querySelector('.mediaH');
const about = document.querySelector('.about');
const last_update = document.querySelector('#last_update');

select.addEventListener('change', changeLanguage);
 
function changeLanguage() {
    if(select.value == 'ua') {
        home.innerHTML = arrLang['ua']['home'];
        media.innerHTML = arrLang['ua']['media'];
        mediaH.innerHTML = arrLang['ua']['mediaH'];
        about.innerHTML = arrLang['ua']['about'];
        last_update.innerHTML = arrLang['ua']['last_update'];
    }
    if(select.value == 'en') {
        home.innerHTML = arrLang['en']['home'];
        media.innerHTML = arrLang['en']['media'];
        mediaH.innerHTML = arrLang['en']['mediaH'];
        about.innerHTML = arrLang['en']['about'];
        last_update.innerHTML = arrLang['en']['last_update'];
        
    }
    if(select.value == 'ru') {
        home.innerHTML = arrLang['ru']['home'];
        media.innerHTML = arrLang['ru']['media'];
        mediaH.innerHTML = arrLang['ru']['mediaH'];
        about.innerHTML = arrLang['ru']['about'];
        last_update.innerHTML = arrLang['ru']['last_update'];
    }
} 