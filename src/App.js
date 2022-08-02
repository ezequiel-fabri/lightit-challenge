import "./index.css";
import { useContext } from "react";
import { MainContext } from "./context/mainContext";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainLayout from "./components/MainLayout";
import Drawer from "./components/Drawer";
import MainProvider from "./context/mainContext";
function App() {
  return (
    <MainProvider>
      <Header />
      <SideNav />
      <MainLayout />
    </MainProvider>
  );
}

export default App;
