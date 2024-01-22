import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store";
import { login } from "../store/slices/authSlice";

import Logo from "../assets/logo.png";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    //Here is where you want to call an api to submit the data
    console.log(user);

    dispatch(login());
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='flex items-center justify-center h-[90vh]'>
      <div className='max-w-md w-full p-8 bg-white rounded shadow-lg'>
        <div className='flex items-center justify-center mb-6'>
          <img src={Logo} alt='Logo' className='h-10' />
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-600 text-sm font-semibold mb-2'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-[50px] focus:outline-none focus:border-purple-500 '
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-600 text-sm font-semibold mb-2'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-[50px] focus:outline-none focus:border-purple-500'
            />
          </div>

          <div className='mb-6'>
            <button
              type='submit'
              className='w-full bg-purple-500 text-white p-2 rounded-[50px] hover:bg-purple-600 focus:outline-none'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
