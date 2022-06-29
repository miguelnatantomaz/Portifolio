import { Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import theme from "./styles/theme";

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
