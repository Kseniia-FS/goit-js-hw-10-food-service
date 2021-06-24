
const body = document.querySelector('body') 
const themeCheckBox = document.querySelector('#theme-switch-toggle'); 
const currentTheme = localStorage.getItem('curtheme');

themeCheckBox.addEventListener("change", changeTheme)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function changeTheme(e){
    
    if (e.target.checked){
        assignTheme("DARK")
    } else {
        assignTheme("LIGHT")
    }
    
}

function assignTheme(themeName) {
    
    localStorage.setItem('curtheme', themeName);
    document.body.className = Theme[themeName];
}
