var enterBtn = document.getElementById('enter-btn');

enterBtn.addEventListener('click', grabInputValues);

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