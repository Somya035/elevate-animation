function restartAnimation() {
    const base = document.querySelector('.base');
    const star = document.querySelector('.star');
    const container = document.querySelector('.container');
    const text = document.querySelector('.text');
    
    base.classList.remove('play');
    base.classList.add('restart');
    star.classList.remove('play');
    star.classList.add('restart');
    container.classList.remove('play');
    container.classList.add('restart');
    text.classList.remove('play');
    text.classList.add('restart');
    
    setTimeout(() => {
        base.classList.remove('restart');
        base.classList.add('play');
        star.classList.remove('restart');
        star.classList.add('play');
        container.classList.remove('restart');
        container.classList.add('play');
        text.classList.remove('restart');
        text.classList.add('play');
    }, 10);
}



const btn = document.querySelector('.btn');
btn.addEventListener('click', restartAnimation);
