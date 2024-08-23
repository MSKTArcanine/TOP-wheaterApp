export default function checkApiKeyFromLocalStorage(type) {
  switch (type) {
    case "giphy":
      return (
        localStorage.getItem("giphyAPIKey") ??
        alert(new Error("No giphy Key in localstorage.giphyAPIKey"))
      );
      break;
    case "visualCross":
      return (
        localStorage.getItem("visualCrossAPIKey") ??
        new Error("No Visual Cross Key in localstorage.visualCrossAPIKey")
      );
      break;
  }
}
