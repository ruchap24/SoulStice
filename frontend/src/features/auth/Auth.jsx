import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from './authSlice';

export default function Auth() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div>
      {user ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(loginSuccess({ name: 'TestUser' }))}>
          Login
        </button>
      )}
    </div>
  );
}