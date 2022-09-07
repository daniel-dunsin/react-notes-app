import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle';
import { AppProvider } from "./components/context";
import Home from "./components/Home";
import Favourites from "./components/Favourites";



function App() {

  return <AppProvider>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
}

export default App;
