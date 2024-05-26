import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Post from "./page/Post";
import NotFound from "./page/NotFound";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path= "*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;