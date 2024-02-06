document.getElementById('dice').addEventListener('click', rollDice);

function rollDice() {
    //Arvotaan satunnaisluku välillä 1-6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    //Muodostetaan polku uudelle nopan kuvalla riippuen arvotusta numerosta.
    var imagePath = './images/' + randomNumber + '.svg';

    //Asetetaan uusi kuva img-elementille
    document.querySelector('#dice img').setAttribute('src', imagePath);
}