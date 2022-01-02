import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Main from "./pages/main/mainPage";
import EditProfile from "./pages/edit/EditProfile";
import LoginPage from "./pages/login/loginPage";
import AddProfile from "./pages/addProfile/AddProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/main" exact element={<Main />} />
          <Route path="/edit" exact element={<EditProfile />} />
          <Route path="/add" exact element={<AddProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
