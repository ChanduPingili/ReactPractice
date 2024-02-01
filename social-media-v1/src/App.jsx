import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import PostListProvider from "./store/PostList";
function App() {

  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="components">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        <div className="content" >
          <Header/>
          {selectedTab === "Home" ? 
          <PostList/> : <CreatePost/>}
          <Footer/>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App;
