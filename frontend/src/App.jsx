import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import GetInTouchPage from "./pages/GetInTouchPage";
import HomePage from "./pages/HomePage";
import MasterPage from "./pages/MasterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OurServicesPage from "./pages/OurServicesPage";
import ScrollToTop from "./utils/ScrollToTop";
import Clients_Page from "./pages/Clients_Page";
import OurSoftwares from "./pages/OurSoftwares";
import MeetOurTeam from "./pages/MeetOurTeam";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route
          path="/contact"
          element={<MasterPage RouteName={<ContactUsPage />} />}
        />

        <Route
          path="/service"
          element={<MasterPage RouteName={<OurServicesPage />} />}
        />
        <Route
          path="/client"
          element={<MasterPage RouteName={<Clients_Page />} />}
        />
        <Route
          path="/software"
          element={<MasterPage RouteName={<OurSoftwares />} />}
        />
         <Route
          path="/team"
          element={<MasterPage RouteName={<MeetOurTeam />} />}
        />
        
      </Routes>
    </BrowserRouter>
  );
}
