import { Suspense, useContext } from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Container } from "./App.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme/ThemeConfig";
import ctx from "./context/themeContext";
import OtherPage from "./pages/OtherPage/OtherPage";

function App() {
  const { themes } = useContext(ctx);
  return (
    <Suspense>
      <ThemeProvider theme={themes === "light" ? lightTheme : darkTheme}>
        <Navbar />
        <Container>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="*" element={<OtherPage />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
