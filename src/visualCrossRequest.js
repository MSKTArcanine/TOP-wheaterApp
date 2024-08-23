import state from "./state";
import getAPIKey from "./getAPIKey";
import giphyStickersRequest from "./giphyStickersRequest";

export default async function () {
  console.log("lancée !");
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
      state.value
    }?unitGroup=metric&elements=temp%2Cconditions&include=current&key=${getAPIKey(
      "visualCross"
    )}&contentType=json`,
    { mode: "cors" }
  );
  const data = await response.json();
  state.conditions = data.days[1].conditions + " weather";
  state.temps = data.days[1].temp;
  document.querySelector("span").textContent = state.temps;
  giphyStickersRequest();
}
