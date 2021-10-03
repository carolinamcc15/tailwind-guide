const eventListeners = () => {
    const done = document.getElementById('done');
    const back = document.getElementById('arrow-back');
    done.setAttribute('href', 'https://hencor2019.github.io/nvm-guide/#1');
    back.setAttribute('href', 'https://hencor2019.github.io/nvm-guide/#1');
};

const app = () => {
    eventListeners();
}

window.onload = app;


