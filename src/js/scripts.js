import PropertySelector from './property-selector.js';

const productForm = document.querySelector('.js-info');
let selectedTd;
let selectedColor;
const img = document.getElementById('productImg');
const Dispatcher = document.getElementById('doc');

new PropertySelector(document.getElementById('colorList'));


Dispatcher.addEventListener('property-selected',ev => {
    const data = ev.detail;
    if (data.type === 'color') {
        changePicture(data.value);
    }
});

function changePicture(color) {
    img.src = 'img/tshirt_' + color + '.jpg';
}

productForm.addEventListener('click', function (event) {
    const el = event.target;
    const classes = el.classList;
    if (classes.contains('js-sizeProduct')) {
        highlightSize(el);
    } else if (classes.contains('js-color')) {
        highlightColor(el);
    }

});

function highlightSize(node) {
    if(selectedTd) {
        selectedTd.classList.remove('js-sizeProduct_active');
    }
    selectedTd = node;
    selectedTd.classList.add('js-sizeProduct_active');
}
function highlightColor(node) {
    if(selectedColor) {
        selectedColor.classList.remove('js-color_active');
    }
    selectedColor = node;
    selectedColor.classList.add('js-color_active');
}

