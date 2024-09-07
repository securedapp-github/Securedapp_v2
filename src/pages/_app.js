import "../styles/globals.css";
import { Provider } from "react-redux";
import { mainStore } from "../redux/store";
import { solidityShieldScanStore } from "../SolidityShield/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={solidityShieldScanStore}>
      {" "}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
