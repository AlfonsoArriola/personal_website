const modeBtn = document
.querySelector('#light-dark-mode-container')
.addEventListener('click', function(){
    const everything = document.querySelectorAll('*');
    everything.forEach((item) => {
        item.classList.toggle('dark-mode');
    });
});