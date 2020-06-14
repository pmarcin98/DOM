const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    p1.classList.add('bg-red');
    p2.classList.add('bg-yellow');
};

let btnsetBackground = document.getElementById('set-background');
btnsetBackground.addEventListener('click', setBackground);