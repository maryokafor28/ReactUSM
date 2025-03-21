import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./component/UserList";
import UserCard from "./component/UserCard";
import UserForm from "./component/UserForm";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserCard />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserForm />} />
        <Route path="/*" element={<h2>page not found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;