function copyDiscord() {
    // Set "guglioisstupid" to the clipboard
    navigator.clipboard.writeText("guglioisstupid");
    // change text to "Copied!" , then back to "Discord"
    document.getElementById("discord").innerHTML = "<div class=\"discordInfo\"><h3>Copied!</h3><p>guglioisstupid</p><button onclick=\"copyDiscord()\">Copy</button></div>";
    setTimeout(function() {
        document.getElementById("discord").innerHTML = "<div class=\"discordInfo\"><h3>Discord</h3><p>guglioisstupid</p><button onclick=\"copyDiscord()\">Copy</button></div>";

    }, 1000);
}

function GoToTwitter() {
    // open twitter in new tab
    window.open("https://twitter.com/GuglioIs2Stupid");
}

function GoToGithub() {
    // open github in new tab
    window.open("https://github.com/GuglioIsStupid");
}

function GoToIndex() {
    // go to index.html
    window.location.href = "../index.html";
}