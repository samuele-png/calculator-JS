import styles from "./style.css";
function clearScreen() {
    document.getElementById("result").value = "";
  }
  function pushLive(value) {
      document.getElementById("result").value += (value)
  }