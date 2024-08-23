import "./style.css";
import state from "./state";
import visualCrossRequest from "./visualCrossRequest";
import getAPIKey from "./getAPIKey";
const widgetInput = document.querySelector("input");
const widgetButton = document.querySelector("button");

widgetButton.addEventListener("click", () => {
  state.value = widgetInput.value;
  visualCrossRequest();
});
