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
import OurProjects from "./pages/OurProjects";
import Mep from "./pages/OurServices/Mep";
import TechnicalDueDiligence from "./pages/OurServices/technicalDueDiligence";
import BIM from "./pages/OurServices/BIM";
import Validating_Value_Engineering from "./pages/OurServices/Validating_Value_Engineering";
import Third from "./pages/OurServices/Thrid";

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
        <Route path="/mep" element={<MasterPage RouteName={<Mep />} />} />
        <Route path="/BIM" element={<MasterPage RouteName={<BIM />} />} />
        <Route path="/Third" element={<MasterPage RouteName={<Third />} />} />
        <Route
          path="/TechnicalDueDiligence"
          element={<MasterPage RouteName={<TechnicalDueDiligence />} />}
        />
        <Route
          path="/Validating_Value_Engineering"
          element={<MasterPage RouteName={<Validating_Value_Engineering />} />}
        />
        <Route
          path="/client"
          element={<MasterPage RouteName={<Clients_Page />} />}
        />
        <Route
          path="/projects"
          element={<MasterPage RouteName={<OurProjects />} />}
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
