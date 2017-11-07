const productForm = document.querySelector('.js-info');
let selectedTd;
let selectedColor;
const img = document.getElementById('productImg');
const color = [
    {colorName: 'white'},
    {colorName: 'yellow'},
    {colorName: 'green'},
];
const className = 'color_';

productForm.addEventListener('click', function (event) {
    const el = event.target;
    const classes = el.classList;
    if (classes.contains('js-sizeProduct')) {
        highlightSize(el);
    } else if (classes.contains('js-color')) {
        highlightColor(el);
        color.forEach(el => {
            if (classes.contains(className + el.colorName)) {
                img.src = 'img/tshirt_' + el.colorName + '.jpg';
            }
        });
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

