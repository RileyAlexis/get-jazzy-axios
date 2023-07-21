const express = require('express');

const app = express();
const PORT = 5001;

const artistListArray = require('./artists.js');
const songListArray = require('./songs.js');


app.use(express.static('server/public'));
app.use(express.json());

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});

// TODO - Add GET for songs

app.get('/songs', (req, res) => {
    console.log('Song request made');
    res.send(songListArray);
});

app.post('/newArtist', (req, res) => {
    console.log('Add new Artist post made');
    let newArtist = req.body;
    artistListArray.push(newArtist);
    res.sendStatus(201);
})

app.post('/newSong', (req, res) => {
    console.log('New Song Post made');
    let newSong = req.body;
    songListArray.push(newSong);
    res.sendStatus(201);
})


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});
