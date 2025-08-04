import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./assets/components/header";
import Footer from "./assets/components/Footer";
import Sidebar from "./assets/components/Sidebar";
import CreatePost from "./assets/components/createPost";
import PostsList from "./assets/components/PostsList";
import { useState } from "react";
import PostListProvider from "./assets/store/Post-List-Store";
import { Outlet } from "react-router-dom";
function App() {  
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
         <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
