const pianoNotes = [
  { key: "z", note: "C3", src: "asset/28.mp3" },
  { key: "s", note: "C#3", src: "asset/29.mp3" },
  { key: "x", note: "D3", src: "asset/30.mp3" },
  { key: "d", note: "D#3", src: "asset/31.mp3" },
  { key: "c", note: "E3", src: "asset/32.mp3" },
  { key: "q", note: "F3", src: "asset/33.mp3" },
  { key: "2", note: "F#3", src: "asset/34.mp3" },
  { key: "w", note: "G3", src: "asset/35.mp3" },
  { key: "3", note: "G#3", src: "asset/36.mp3" },
  { key: "e", note: "A3", src: "asset/37.mp3" },
  { key: "4", note: "A#3", src: "asset/38.mp3" },
  { key: "r", note: "B3", src: "asset/39.mp3" },
  { key: "t", note: "C4", src: "asset/40.mp3" },
  { key: "6", note: "C#4", src: "asset/41.mp3" },
  { key: "y", note: "D4", src: "asset/42.mp3" },
  { key: "7", note: "D#4", src: "asset/43.mp3" },
  { key: "u", note: "E4", src: "asset/44.mp3" },
  { key: "i", note: "F4", src: "asset/45.mp3" },
  { key: "9", note: "F#4", src: "asset/46.mp3" },
  { key: "o", note: "G4", src: "asset/47.mp3" },
  { key: "0", note: "G#4", src: "asset/48.mp3" },
  { key: "p", note: "A4", src: "asset/49.mp3" },
  { key: "-", note: "A#4", src: "asset/50.mp3" },
  { key: "[", note: "B4", src: "asset/51.mp3" },
  { key: "]", note: "C5", src: "asset/52.mp3" },
  { key: "v", note: "C#5", src: "asset/53.mp3" },
  { key: "f", note: "D5", src: "asset/54.mp3" },
  { key: "b", note: "D#5", src: "asset/55.mp3" },
  { key: "g", note: "E5", src: "asset/56.mp3" },
  { key: "n", note: "F5", src: "asset/57.mp3" },
  { key: "m", note: "F#5", src: "asset/58.mp3" },
  { key: "j", note: "G5", src: "asset/59.mp3" },
  { key: ",", note: "G#5", src: "asset/60.mp3" },
  { key: "k", note: "A5", src: "asset/61.mp3" },
  { key: ".", note: "A#5", src: "asset/62.mp3" },
  { key: "l", note: "B5", src: "asset/63.mp3" },
];

let pianoKeys = document.querySelectorAll(".key");

pianoKeys.forEach(function (node) {
    node.addEventListener("click", function () {
        let key = node.getAttribute("data-key");
        playPiano(key);
    });
});

function playPiano(key) {

    const pianoKey = document.querySelector(`[data-key="${key}"]`);
    const note = pianoNotes.find(item => item.key === key);

    if (!pianoKey || !note) return;

    const audio = new Audio(note.src);
    audio.play();

    pianoKey.classList.add("active");

    setTimeout(function () {
        pianoKey.classList.remove("active");
    }, 100);
}

document.addEventListener("keydown", function (event) {
    playPiano(event.key);
});