console.log('script sourced');

function getArtists() {
    // Axios GET request
    axios.get('/artist').then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let quotesFromServer = response.data;
        let contentDiv = document.querySelector('#artistTableBody');
        contentDiv.innerHTML = '';
        for(let artist of quotesFromServer) {
            contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
// TODO Add ajax request for /songs and display on DOM
getArtists();

function getSongs() {
    axios.get('/songs').then((response) => {
        console.log(response);
        let songsFromServer = response.data;
        for (let songs of songsFromServer) {
            songTableBody.innerHTML += `
            <tr>
                <td>${songs.title}</td>
                <td>${songs.artist}</td>
            </tr>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('something went wrong');
    });
}

getSongs();

function addNewArtist(event) {
    event.preventDefault();

    let newArtist = {
        name: newArtistName.value,
        born: newArtistBorn.value,
        died: newArtistDied.value,
    }

    axios.post('/newArtist', newArtist).then((response) => {
        console.log(response);
        getArtists();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong');
    });
}

newArtistName.value = 'Ani Difranco';
newArtistBorn.value = 1973;
newArtistDied.value = 'Never';