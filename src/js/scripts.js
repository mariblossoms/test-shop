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
