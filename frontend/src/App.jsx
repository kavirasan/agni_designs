import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import HomePage from "./pages/HomePage";
import MasterPage from "./pages/MasterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterPage RouteName={<HomePage />} />} />
        <Route
          path="/about"
          element={<MasterPage RouteName={<AboutPage />} />}
        />
        <Route
          path="/getintouch"
          element={<MasterPage RouteName={<GetInTouchPage />} />}
        />
        <Route path="/contact" 
          element={<MasterPage RouteName={<ContactUsPage/>}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
