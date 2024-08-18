import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const OverviewScreen = () => {
  return (
    <div className="sss-product">
      <Sidebar />
      <div className="sss-product-with-header">
        <Header />
        <div className="sss-overview-screen-container">
          <div className="sss-overview-screen">
            <div className="sss-overview-header">
              <div className="">Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewScreen;
