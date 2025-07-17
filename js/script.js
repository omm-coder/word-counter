let textarea = document.querySelector("#t-area");
let span = document.querySelector('span');


textarea.addEventListener('input', () => {
    let count = textarea.value.length;
    span.textContent = count;
}) 