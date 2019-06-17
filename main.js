var enterBtn = document.getElementById('enter-btn');
var cardSection = document.querySelector('.right-section');
var titleField = document.getElementById('title-input');
var urlField = document.getElementById('url-input');

enterBtn.addEventListener('click', grabInputValues);
cardSection.addEventListener('click', cardActions);
titleField.addEventListener('input', enableButton);
urlField.addEventListener('input', enableButton);

function grabInputValues(event) {
    event.preventDefault();
    var titleValue = document.getElementById('title-input').value;
    var urlValue = document.getElementById('url-input').value;
    appendCard(titleValue, urlValue);
}

function appendCard(title, url) {
    if (title === '' || url === '') {
        alert('Please input a valid title and url!')
    } else {
    var sectionTag = document.querySelector('.right-section')
    var cardHTML = `
    <article class="card">
        <h2>${title}</h2>
        <p class="url">${url}</p>
        <div class="card-bottom">
            <p class="read" id="read-btn">Read</p>
            <p class="delete" id="delete-btn">Delete</p>
        </div>
    </article>
  `;
    sectionTag.insertAdjacentHTML('afterbegin', cardHTML);
    }
}

function deleteCard(event) {
    var card = event.target.parentNode.parentNode;
    cardSection.removeChild(card);
}

function toggleReadBtn(event) {
    if (!event.target.classList.contains('read-color')) {
        event.target.classList.add('read-color')
    } else {
        event.target.classList.remove('read-color')
    }
}

function cardActions(event) {
    if (event.target.id === 'delete-btn') { 
        deleteCard(event);
    }
    if (event.target.id === 'read-btn') {
        toggleReadBtn(event);
    }
}

function enableButton() {
    var titleValue = document.getElementById('title-input').value;
    var urlValue = document.getElementById('url-input').value;
    if(titleValue == "" || urlValue == "") {
        document.getElementById('enter-btn').disabled = true;
    } else {
        document.getElementById('enter-btn').disabled = false;
    }
}

// check if input fields have any values entered
// if there are values in both input fields, enable button
// create function that query selects each input
// check with every field change













// var titleValue = document.getElementById('title-input');
// var urlValue = document.getElementById('url-input');
// titleValue.addEventListener('keyup', disableBtn);
// urlValue.addEventListener('keyup', disableBtn);
// function disableBtn() {
//     if(titleValue.length > 1 || urlValue.length > 1) {
//        enterBtn.disabled = true; 
//     }
// }

// window.addEventListener('load', handleSubmitButton)

// function handleSubmitButton(e){
//     e.preventDefault()
//      if(titleValue.value.length < 1 && urlValue.value.length < 1){
//         enterBtn.disabled = true;
//         enterBtn.classList.add('disabled')
//      } else {
//        enterBtn.disabled = false;
//        enterBtn.classList.remove('disabled')
//      }
//    };