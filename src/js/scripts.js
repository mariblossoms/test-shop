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
