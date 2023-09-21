import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";
import { SyncLoader } from "react-spinners";

const MainLayout = () => {
     const use = useNavigation(); 
     return (
          <div className="">
               <Navbar></Navbar>
               <div>
               {
                    use.state === 'loading' ? <SyncLoader
                    color="#36d7b7"
                    className="text-center mt-80"
                    cssOverride={{}}
                    loading
                    margin={10}
                    size={20}
                    speedMultiplier={1}
                  /> : <Outlet></Outlet>
               }
               </div>
               <Footer></Footer>
          </div>
     );
};

export default MainLayout;