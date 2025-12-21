// Theme switcher (light/dark) example
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Save theme in localStorage
    if(localStorage.getItem('theme') === 'dark'){
        body.style.backgroundColor = '#222';
        body.style.color = '#eee';
    }

    // Toggle theme on click anywhere
    body.addEventListener('dblclick', () => {
        if(body.style.backgroundColor === 'rgb(34, 34, 34)'){
            body.style.backgroundColor = '#f4f4f4';
            body.style.color = '#333';
            localStorage.setItem('theme', 'light');
        } else {
            body.style.backgroundColor = '#222';
            body.style.color = '#eee';
            localStorage.setItem('theme', 'dark');
        }
    });
});
