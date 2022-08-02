import "./index.css";
import { useContext } from "react";
import { MainContext } from "./context/MainContext";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainLayout from "./components/MainLayout";
import Drawer from "./components/Drawer";
import MainProvider from "./context/MainContext";
function App() {
  console.log("render");
  return (
    <MainProvider>
      <Header />
      <SideNav />
      <MainLayout />
    </MainProvider>
  );
}

export default App;
