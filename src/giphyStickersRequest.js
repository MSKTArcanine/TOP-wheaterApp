import state from "./state";
import getAPIKey from "./getAPIKey";
const img = document.querySelector("img");
export default async function () {
  console.log("lancée !", state.conditions);
  const response = await fetch(
    `https://api.giphy.com/v1/stickers/translate?api_key=${getAPIKey(
      "giphy"
    )}&s=${state.conditions}&weirdness=0}`,
    { mode: "cors" }
  );
  const data = await response.json();
  img.src = data.data.images.fixed_height.url;
  img.style.objectFit = "cover";
}
