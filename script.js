// script.js
document.getElementById('htmlForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const htmlCode = document.getElementById('htmlCode').value;
    const htmlPreview = document.getElementById('htmlPreview');
    htmlPreview.innerHTML = htmlCode;
});
