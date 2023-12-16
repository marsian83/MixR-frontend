import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Modal from "../common/Modal";

export default function Default() {
  return (
    <main className="relative">
      <Modal />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
