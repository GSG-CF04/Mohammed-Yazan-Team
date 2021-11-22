const myWebsite = document.getElementById("main");

const container = document.createElement("div");
container.classList.add("container");

myWebsite.appendChild(container);

fetch("https://api.jikan.moe/v3/manga/1/characters")
  .then((response) => {
    if (response.status !== 200) {
      console.log(
        `Looks like there was a problem. Status Code: ${response.status}`
      );
    } else {
      // Examine the text in the response
      return response.json();
    }
  })
  .then((data) => {
    data.characters.forEach((character) => {
      // Create a div to contain character info with a box class
      const characterCard = document.createElement("div");
      characterCard.classList.add("box");

      // Create an h1 and set the text content to the character name
      const h1 = document.createElement("h1");
      h1.textContent = character.name;

      // Create an img and set the source to the character image
      const characterImg = document.createElement("img");
      characterImg.src = `${character.image_url}`;

      // Each box will contain an h1 and a img
      characterCard.appendChild(h1);
      characterCard.appendChild(characterImg);

      // Append the boxes to the container element
      container.appendChild(characterCard);
    });
  });
