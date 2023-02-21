import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../screen/home";
import Login from "../screen/login";
import Signup from "../screen/signup";
import TodoList from '../screen/todoapp';
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="hpme" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Signup />} />
                <Route path="todoapp" element={<TodoList />} />
            </Routes>
        </Router>

    );
}
export default AppRouter;