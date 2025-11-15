import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/homepage";
import { ChatPage } from "./Pages/chatpage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
     <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/chatpage" element={<ChatPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
