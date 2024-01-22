import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='flex flex-col items-center justify-center h-[80vh]'>
      <h1 className='mb-6'>This is the profile page</h1>

      <div className='mb-6'>
        <button
          onClick={handleLogout}
          className='w-full min-w-48 bg-purple-500 text-white p-2 font-bold rounded-[50px] hover:bg-purple-600 focus:outline-none'
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
