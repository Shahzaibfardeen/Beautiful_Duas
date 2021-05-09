var message = document.getElementById("message-js");
var messageBtn = document.getElementById("message-btn");

var messages = [
    'Day 1 - Ya Hayyu Ya Qayyum ! Bi Rahmatkia Astagheeth',
    'Day 2 - Rabbana Atina Fid Duniya Hasana Wa Fil-Akhirati Hasana Wa Qina Azaban Nar',
    'Day 3 - Allahumma Inni As Alakul Huda Wat- Tuka, Wal Afafa, Wal Ghina',
    'Day 4 - Allah Humma Inni As Alukal Affuwa Wal Aafiyah Fid Duniya Wal Aakhirah'
];

messageBtn.onclick = function randomMessage() {
    var rand = messages[Math.floor(Math.random() * messages.length)];
    message.innerHTML = rand;
};

function copyToClipboard(id) {
    var from = document.getElementById(id);
    var range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(from);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert(" Do Remember Me In Your Precious Dua's✨✨ ");
}
