
import Navbar from "../components/Navbar";
import CustomFooter from "../components/CustomFooter";


const MasterPage = ({RouteName}) => {
 
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
       {RouteName}
      <CustomFooter />
    </main>
  );
};

export default MasterPage;
