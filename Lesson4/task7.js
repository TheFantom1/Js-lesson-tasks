function create(text, count) {
    let ulEle = "<ul>";
    for (let i = 0; i < count; i++) {
        ulEle += "<li>" + text + "</li>";
    }
    ulEle += "</ul>";
    return ulEle;
}


let ulLis = create("Списковий Текст", 25);
document.write(ulLis);
