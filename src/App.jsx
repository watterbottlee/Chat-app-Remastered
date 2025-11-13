import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/homepage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/* <Route path={`/chatroom/${roomid}`} element={<JoinRoom/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
