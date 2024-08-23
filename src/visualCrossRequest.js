import state from "./state";
import getAPIKey from "./getAPIKey";

export default async function () {
  console.log("lancée !");
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
      state.value
    }?unitGroup=metric&elements=conditions&include=current&key=${getAPIKey(
      "visualCross"
    )}&contentType=json`
  );
  const data = await response.json();
  state.conditions = data.days[1].conditions;
}
