import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/userSlice';
import { AppDispatch, RootState } from '../store/store';
import UserCard from './UserCard';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const usersState = useSelector((state: RootState) => state.users);

  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (usersState.loading) return <p>Loading...</p>;
  if (usersState.error) return <p>{usersState.error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <button onClick={() => setIsAdding(true)}>Add User</button>
      {isAdding && <UserForm onCancel={() => setIsAdding(false)} />}
      {usersState.users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            <UserCard user={user} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default UserList;
