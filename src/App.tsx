// src/App.jsx

import "./App.css";
import Container from "./components/Container";
import FooterInfo from "./components/FooterInfo";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Container>
      <Header />
      <MainContent />
      <FooterInfo />
    </Container>
  );
}

export default App;
