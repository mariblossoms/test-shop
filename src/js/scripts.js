import PropertySelector from './property-selector.js';

const productForm = document.querySelector('.js-info');
const img = document.getElementById('productImg');
const Dispatcher = document.getElementById('doc');

new PropertySelector(document.getElementById('jsColor'));
new PropertySelector(document.getElementById('jsSize'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;
    if (data.type === 'color') {
        localStorage.setItem(data.type, data.value);
        changePicture(data.value);
    }
    if (data.type === 'size') {
        localStorage.setItem(data.type, data.value);
        changeSize(data.value);
    }
});

function changePicture(color) {
    img.src = 'img/tshirt_' + color + '.jpg';

    const colorList = productForm.querySelectorAll('[data-value]');
    for (let i = 0; i < colorList.length; i++) {
        const selectedColor = colorList[i];
        if (selectedColor.getAttribute('data-value') === color) {
            selectedColor.classList.add('js-color_active');
        } else {
            selectedColor.classList.remove('js-color_active');
        }
    }
}

function changeSize(size) {
    const sizeList = productForm.querySelectorAll('[data-value]');
    for (let i = 0; i < sizeList.length; i++) {
        const selectedSize = sizeList[i];

        if (selectedSize.getAttribute('data-value') === size) {
            selectedSize.classList.add('js-sizeProduct_active');
        } else {
            selectedSize.classList.remove('js-sizeProduct_active');
        }
    }
}

const lastColor = localStorage.getItem('color');
const lastSize = localStorage.getItem('size');
if (lastColor) {
    changePicture(lastColor);
    alert('Последний раз Вы выбрали - ' + lastColor + ' цвет');
}
if (lastSize) {
    changeSize(lastSize);
    alert('Последний раз Вы выбрали - ' + lastSize + ' размер');
}


