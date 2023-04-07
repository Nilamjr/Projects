const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
    console.log('Enter left mouse enter');
});

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
    console.log('leave left mouse enter');
});

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
    console.log('enter right mouse enter');
});

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
    console.log('leave right mouse enter');
});
