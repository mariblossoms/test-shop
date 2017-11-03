const productForm = document.querySelector('.js-info');
let selectedTd;
let selectedColor;
const imgX = 'img/tshirt_white.jpg';
const imgY = 'img/tshirt_yellow.jpg';
const imgZ = 'img/tshirt_green.jpg';

productForm.addEventListener('click', function (event) {
    const el = event.target;
    const classes = el.classList;
    if (classes.contains('js-sizeProduct')) {
        highlightSize(el);
    }   else if (classes.contains('js-color')) {
        highlightColor(el);

        const img = document.getElementById('productImg');
        if (classes.contains('color_white')) {
            img.src = imgX;
        } else if (classes.contains('color_yellow')) {
            img.src = imgY;
        } else if (classes.contains('color_green')) {
            img.src = imgZ;
        }
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

