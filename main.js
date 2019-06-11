var enterBtn = document.getElementById('enter-btn');
var cardSection = document.querySelector('.right-section');

enterBtn.addEventListener('click', grabInputValues);
cardSection.addEventListener('click', cardActions);

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