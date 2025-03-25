const textareaElement = document.querySelector('textarea');
const countBtn = document.querySelector('#count-btn');
const wordsElement = document.querySelector('.words');
const sentencesElement = document.querySelector('.sentences');
const charactersElement = document.querySelector('.characters');
const copyBtn = document.querySelector('#copy-btn');


function counterHandler() {
    let value = textareaElement.value;


    const words = value.trim().split(/\s+/).filter(Boolean).length;
    wordsElement.textContent = words;


    const chars = value.replace(/\s/g, '').length;
    charactersElement.textContent = chars;
    

    const sentences = value.trim().split(/[.!?]+/).filter(Boolean).length;
    sentencesElement.textContent = sentences;

}


function copyHandler() {
    let value = textareaElement.value;

    navigator.clipboard.writeText(value)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch(err => {
      console.error("Error copying text: ", err);
    });
}




textareaElement.addEventListener('keyup', counterHandler);
copyBtn.addEventListener('click', copyHandler);
