import "./style.css";
import state from "./state";
import onSubmit from "./onSubmit";
import loading from "./loading.gif";
const widgetInput = document.querySelector("input");
const widgetButton = document.querySelector("button");
const img = document.querySelector("img");

img.src = loading;
widgetButton.addEventListener("click", () => {
  state.value = widgetInput.value;
  onSubmit();
});
