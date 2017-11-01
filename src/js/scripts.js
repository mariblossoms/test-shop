const productForm = document.querySelector('.product__info');
let selectedTd;
let selectedColor;

productForm.addEventListener('click', function (event) {
    const el = event.target;
    const classes = el.classList;
    if (classes.contains('size__b-size')) {
        highlightSize(el);
    }   else if (classes.contains('color__size')) {
        highlightColor(el);
        const img = document.getElementById('img__id');
        if (classes.contains('color__1')) {
            img.src = 'img/tshirt_white.jpg';
        } else if (classes.contains('color__2')) {
            img.src = 'img/tshirt_yellow.jpg';
        } else if (classes.contains('color__3')) {
            img.src = 'img/tshirt_green.jpg';
        }
    }

});

function highlightSize(node) {
    if(selectedTd) {
        selectedTd.classList.remove('size__b-size_active');
    }
    selectedTd = node;
    selectedTd.classList.add('size__b-size_active');
}
function highlightColor(node) {
    if(selectedColor) {
        selectedColor.classList.remove('color__size_active');
    }
    selectedColor = node;
    selectedColor.classList.add('color__size_active');
}
