//CRIAÇÃO DOS CARDS

let cards = document.querySelector('main');

fetch('info.json')
    .then(resposta => resposta.json())
    .then(dados => dados.forEach((player, index) => {
        let card = document.createElement('article');
        cards.appendChild(card);
        card.innerHTML = `
      <figure>
        <img src="imgs/cards-front/${player.PhotoCard}.png" alt="Foto de ${player.FirstName} ${player.Name}"/>
      </figure>
      <span class="number-home">${player.Number}</span>
      <h2 class="first-name-home">${player.FirstName}</h2>
      <h3 class="name-home">${player.Name}</h3>
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
let modalContainer = document.createElement('section');
modalContainer.id = 'modal-container';
modalContainer.style.display = 'none';
document.body.appendChild(modalContainer);

function openModal(player) {
    modalContainer.innerHTML = `
        <div class="card-player-info">
                <div class="card-photo">
                    <img src="imgs/cards-info/${player.PhotoModal}" alt="Foto de ${player.FirstName} ${player.Name}"/>
                </div>
                  <div class="card-mobile">
                    <button>X</button>
                    <img src="imgs/cards-mobile/${player.PhotoMobile}.jpg"/>
                    </div>
                <div class="card-profile">
                    <h2 class="box-title">Player Profile</h2>
                <h3 class="first-name">${player.FirstName}</h3>
                <h4 class="name">${player.Name}</h4>
                <span class="number">#${player.Number}</span>
                    <div class="infos">
                        <div class="position"><strong>Position:</strong> <p>  ${player.Position}</p></div> 
                        <div class="foot"><strong>Foot:</strong> <p> ${player.Foot}</p> </div>
                        <div class="born"><strong>Born:</strong> <p> ${player.Born}</p> </div>
                        <div class="nt"><strong>National Team:</strong> <p> ${player.NationalTeam}</p> </div>
                        <div class="ex-clubs"><strong>Previous Clubs:</strong> <p> ${player.PreviousClubs}</p> </div>
                        <div class="media"><strong>Social Media:</strong> <p><a href="${player.SocialMedia}" target="_blank"> ${player.SocialMedia}</a></p></div>
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