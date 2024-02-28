function createParagraph(text) {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}

createParagraph("Це текст для параграфу.");
