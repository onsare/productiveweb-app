import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NoPage from "./pages/404";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import AnotherPage from "./pages/AnotherPage";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const ProtectedRoute: React.FC = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='profile' element={<Profile />} />
              <Route path='another-page' element={<AnotherPage />} />

              <Route path='*' element={<NoPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
