import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Exchanges from "./pages/Exchanges";
import SingleCoinPage from "./pages/SingleCoinPage";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTopButton";
import { BodyContainer } from "./components/Containers";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <BodyContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/coins/:coinId' element={<SingleCoinPage />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BodyContainer>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
