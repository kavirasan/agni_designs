import Navbar from "../components/Navbar/Navbar";
import CustomFooter from "../components/CustomFooter";
import SEO from "../SEO/SEO";
import { Helmet } from "react-helmet";

const MasterPage = ({ RouteName }) => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <SEO />
      <Helmet>
        <meta
          property="og:title"
          content="Agni Design Consultants | MEP Technical Services"
        />
        <meta
          property="og:description"
          content="Agni Design Consultants provide MEP technical due diligence and innovative engineering solutions."
        />
        <meta
          property="og:image"
          content="https://agnidesign.netlify.app/logo-D-FpNNva.png"
        />
        <meta property="og:url" content="https://agnidesign.netlify.app/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      {RouteName}
      <CustomFooter />
    </main>
  );
};

export default MasterPage;
