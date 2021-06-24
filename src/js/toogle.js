
const body = document.querySelector('body') 
const themeCheckBox = document.querySelector('#theme-switch-toggle'); 
const curTheme = localStorage.getItem('curtheme');

themeCheckBox.addEventListener("change", changeTheme)

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const {LIGHT, DARK} = Theme;

function changeTheme(e){
    
    if (e.target.checked){
        assignTheme(DARK)
    } else {
        assignTheme(LIGHT)
    }
    
}

function assignTheme(themeName) {
    
    localStorage.setItem('curtheme', themeName);
    document.body.className = themeName;
}

function currentTheme (){
    
    if(curTheme === DARK) {
        themeCheckBox.checked = true;
        document.body.className = DARK;
    }
}
currentTheme ();