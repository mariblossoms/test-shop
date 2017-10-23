less = {
    env: "development",
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    rootpath: ":/a.com/"
};

var color_red = 'rgb(204, 0, 0)',
    color_gray = 'rgb(217, 217, 212)';
// Функция замены цвета товара
function changeImg(lin){
    var img = document.getElementById("img__id");
    img.src=lin;
};
function ChangeBorder() {
    var c = document.getElementsByName('check');
    console.log(c);
    if(!c[1].checked) c[1].checked=true;// поставить cheked на второй input если он не установлен
}


// Color variable
function onclick1() {
    document.getElementById("color1").style.borderColor = color_red;
    document.getElementById("color2").style.borderColor = color_gray;
    document.getElementById("color3").style.borderColor = color_gray;
}

function onclick2() {
    document.getElementById("color1").style.borderColor =color_gray;
    document.getElementById("color2").style.borderColor =color_red;
    document.getElementById("color3").style.borderColor =color_gray;
}
function onclick3() {
    document.getElementById("color1").style.borderColor =color_gray;
    document.getElementById("color2").style.borderColor =color_gray;
    document.getElementById("color3").style.borderColor =color_red;
}

 document.getElementById("color1").addEventListener("click", onclick1);
 document.getElementById("color2").addEventListener("click", onclick2);
 document.getElementById("color3").addEventListener("click", onclick3);


// Size variable
function size_onclick1() {
    document.getElementById("size_S").style.borderColor = color_red;
    document.getElementById("size_M").style.borderColor = color_gray;
    document.getElementById("size_L").style.borderColor = color_gray;
}

function size_onclick2() {
    document.getElementById("size_S").style.borderColor =color_gray;
    document.getElementById("size_M").style.borderColor =color_red;
    document.getElementById("size_L").style.borderColor =color_gray;
}
function size_onclick3() {
    document.getElementById("size_S").style.borderColor =color_gray;
    document.getElementById("size_M").style.borderColor =color_gray;
    document.getElementById("size_L").style.borderColor =color_red;
}

document.getElementById("size_S").addEventListener("click", size_onclick1);
document.getElementById("size_M").addEventListener("click", size_onclick2);
document.getElementById("size_L").addEventListener("click", size_onclick3);
