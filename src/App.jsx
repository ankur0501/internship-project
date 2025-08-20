import "../src/App.css";
import { CreateAccount } from "./components/createAccount/CreateAccount";
import { Profile } from "./components/profile/Profile";
import { SignIn } from "./components/signIn/SignIn";
import { SignUp } from "./components/signUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
