function create(text) {
    let ulEle = "<ul>";
    for (let i = 0; i < 3; i++) {
        ulEle += "<li>" + text + "</li>";
    }
    ulEle += "</ul>";
    return ulEle;
}

let ulLis = create("Списковий Текст");
document.write(ulLis)