import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './component/UserList';
import UserCard from './component/UserCard';
import UserForm from './component/UserForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserCard />} />  
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserForm />} />    
     </Routes>
    </Router>
  );
};

export default App;
