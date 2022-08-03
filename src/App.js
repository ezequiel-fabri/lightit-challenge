import "./index.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainLayout from "./components/MainLayout";
import MainProvider from "./context/MainContext";
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
