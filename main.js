var enterBtn = document.getElementById('enter-btn');
var cardSection = document.querySelector('.right-section');

enterBtn.addEventListener('click', grabInputValues);
cardSection.addEventListener('click', deleteCard);

function grabInputValues(event) {
    event.preventDefault();
    var titleValue = document.getElementById('title-input').value;
    var urlValue = document.getElementById('url-input').value;
    appendCard(titleValue, urlValue);
}

function appendCard(title, url) {
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

function deleteCard(event) {
    var sectionTag = document.querySelector('.right-section')
    var card = event.target.parentNode.parentNode;
    if (event.target.id === 'delete-btn') {
        sectionTag.removeChild(card);
    }
}