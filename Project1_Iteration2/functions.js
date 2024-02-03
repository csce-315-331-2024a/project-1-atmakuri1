function toggleStyleSheet() 
{
    temp = document.getElementById('themeStyle');
    current = temp.getAttribute('href');
    if (current == 'background.css') 
    {
        tmp = 'style2.css';
    }
    else
    {
        tmp = 'background.css';
    }
    temp.setAttribute('href', tmp);

    localStorage.setItem('current', tmp);
}

window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    savedStyleSheet = localStorage.getItem('current');
    // 2 (b) get html style element by ID
    styleElement = document.getElementById('themeStyle');
    // 2 (c) replace href attribute of html element.
    if (savedStyleSheet) 
    {
        styleElement.setAttribute('href', savedStyleSheet);
    }
}