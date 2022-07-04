import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Provider from "./Providers";
import "./styles/fonts.css";

import theme from "./styles/theme";

function App() {
  return (
    <>
      <Provider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
