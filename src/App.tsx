// src/App.jsx

import "./App.css";
import Container from "./components/Container";
import FooterBottom from "./components/FooterBottom";
import FooterInfo from "./components/FooterInfo";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Container>
      <Header />
      <MainContent />
      <FooterInfo />
      <FooterBottom />
    </Container>
  );
}

export default App;
