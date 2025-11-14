import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/homepage";
import { ChatPage } from "./Pages/chatpage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/chatpage" element={<ChatPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
