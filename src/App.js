// import { Button } from "./components/common/index";
import {
  createGlobalStyle,
  ThemeContext,
  ThemeProvider,
} from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import LightTheme from "./themes/Light";
import DarkTheme from "./themes/Dark";
import { useContext, useState } from "react";

const GlobalStyles = createGlobalStyle`
body{
  background:${(p) => p.theme.bodyBackgroundColor};
  min-height:100vh;
  margin:0;
  color:${(p) => p.theme.bodyFontColor};
}
p{
  font-size:8px
}`;
function App() {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <p>App</p>
      <Button>Primary Button</Button>
      <Button secondary>Secondary Button</Button>
      <Button disabled>Disabled Button</Button>
      <Button large>Large Button</Button> */}
    </ThemeProvider>
  );
}

export default App;
