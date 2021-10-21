fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((jokesData) => {
    const jokesText = jokesData.attachments[0].text;
    const JokesElement = document.getElementById("JokesElement");
    JokesElement.innerHTML = jokesText;
  });
