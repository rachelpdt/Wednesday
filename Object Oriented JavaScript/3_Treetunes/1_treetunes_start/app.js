var playlist = new Playlist();

var lithium = new Song("Lithium", "Nirvana", "3:23");
var miserable = new Song ("Miserable","Lit","4:35");

playlist.add(lithium);
playlist.add(miserable);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);
};
var nexButton = document.getElementById("next");
nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
