import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  WagmiConfig,
  configureChains,
  createConfig,
  useAccount,
  useChainId,
  Chain,
} from "wagmi";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalContextProvider } from "./contexts/globalContext";
import router from "./pages/router";
import { Web3Provider } from "./contexts/web3context";
import wagmiConfig from "./config/wagmi";

export default function App() {
  return (
    <GlobalContextProvider>
      <Web3Provider>
        <RouterProvider router={router} />
      </Web3Provider>
    </GlobalContextProvider>
    // </WagmiConfig>
  );
}
