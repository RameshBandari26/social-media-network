import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userInfo1')) {
      nav('/s');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!data.email || !data.password) {
      toast.warning('Please fill in all fields', { position: toast.POSITION.TOP_LEFT });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        localStorage.setItem('userInfo1', JSON.stringify(result));
        toast.success('Login Successful!', { position: toast.POSITION.TOP_LEFT, autoClose: 1000 });
        nav('/s');
      } else {
        throw result;
      }
    } catch (err) {
      toast.warning(err.errors || 'Invalid credentials', {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg bg-white rounded-4 overflow-hidden w-100" style={{ maxWidth: '800px' }}>
        {/* Left Graphic Section */}
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center bg-primary text-white p-5">
          <h2 className="fw-bold mb-2">Welcome Back</h2>
          <p className="text-center opacity-75">Login and connect with your friends and the world.</p>
          <img
            src="/images/login.png"
            alt="Login"
            className="img-fluid mt-3 rounded-4 shadow"
          />
        </div>

        {/* Right Login Form */}
        <div className="col-md-6 p-5">
          <h3 className="mb-4 text-center fw-semibold">Sign In</h3>

          <div className="d-flex justify-content-center mb-3">
            <PulseLoader color="#0d6efd" loading={loading} size={10} />
          </div>

          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control form-control-lg"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-primary btn-lg w-100 mb-3"
              onClick={handleClick}
              disabled={loading}
            >
              Log In
            </button>
            <p className="text-center">
              Don’t have an account?{' '}
              <Link to="/register" className="text-decoration-none text-primary fw-semibold">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
