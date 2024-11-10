import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return <main className="layout">
    <Header />
    <main className="body"><Outlet /></main>
    <Footer />
  </main>
};

export default Layout;