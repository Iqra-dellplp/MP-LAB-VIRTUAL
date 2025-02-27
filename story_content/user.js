function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Vau6m660YB":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.scr="1.mp3"
audio.load();
audio.play();
audio.volume = 0.3;
}

