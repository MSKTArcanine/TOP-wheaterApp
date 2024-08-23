export default function checkApiKeyFromLocalStorage(type) {
  switch (type) {
    case "giphy":
      return localStorage.getItem("giphyAPIKey") ?? new Error("No giphy Key.");
      break;
    case "visualCross":
      return (
        localStorage.getItem("visualCrossAPIKey") ??
        new Error("No Visual Cross Key")
      );
      break;
  }
}
