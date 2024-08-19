//CRIAÇÃO DOS CARDS

let cards = document.querySelector('.cards');

fetch('info.json')
    .then(resposta => resposta.json())
    .then(dados => dados.forEach((player, index) => {
        let card = document.createElement('div');
        card.classList.add('card');
        cards.appendChild(card);
        card.innerHTML = `
      <div class="portrait">
        <img src="imgs/cards-front/${player.PhotoCard}.png"/>
      </div>
      <div class="number-home">${player.Number}</div>
      <div class="first-name-home">${player.FirstName}</div>
      <div class="name-home">${player.Name}</div>
      <div class="flag-home">
        <img src="imgs/flags/${player.Flag}.png">
        <p>${player.NationalTeam}</p>
      </div>
    `;

        // EVENTO CLICK DO MODAL
        card.addEventListener('click', () => {
            openModal(player);
        });
    }));


//CRIAÇÃO DO MODAL COM AS INFORMAÇÕES DOS JOGADORES
let modalContainer = document.createElement('div');
modalContainer.id = 'modal-container';
modalContainer.style.display = 'none';
document.body.appendChild(modalContainer);

function openModal(player) {
    modalContainer.innerHTML = `
        <div class="card-player-info">
                <div class="card-photo">
                    <img src="imgs/cards-info/${player.PhotoModal}"/>
                </div>
                  <div class="card-mobile">
                    <button>X</button>
                    <img src="imgs/cards-mobile/${player.PhotoMobile}.jpg"/>
                    </div>
                <div class="card-profile">
                    <p class="box-title">Player Profile</p>
                <div class="first-name">${player.FirstName}</div>
                <div class="name">${player.Name}</div>
                <div class="number">#${player.Number}</div>
                    <div class="infos">
                        <div class="position">Position: <p>  ${player.Position}</p></div> 
                        <div class="foot">Foot: <p> ${player.Foot}</p> </div>
                        <div class="born">Born: <p> ${player.Born}</p> </div>
                        <div class="nt">National Team: <p> ${player.NationalTeam}</p> </div>
                        <div class="ex-clubs">Previous Clubs: <p> ${player.PreviousClubs}</p> </div>
                        <div class="media">Social Media: <p><a href="${player.SocialMedia}"> ${player.SocialMedia}</a></p></div>
                        </div>
                    </div>
        </div>
  `;
    modalContainer.style.display = 'flex';

    //PARA FECHAR QUANDO O MODAL ESTIVER ATIVO
    const closeMobile = modalContainer.querySelector('button');
    addCloseEvent(closeMobile, closeModal);
}

function closeModal() {
    modalContainer.style.display = 'none';
}

//EVENTOS PARA FECHAR MODAL DESKTOP E MOBILE
function addCloseEvent(element, callback) {
    element.addEventListener('click', callback);
    element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        callback(e);
    });
}

addCloseEvent(modalContainer, (e) => {
    if (e.target === modalContainer) {
        closeModal();
    }
});