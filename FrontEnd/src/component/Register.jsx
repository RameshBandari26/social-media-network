import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('userInfo1')) {
      nav('/s');
    }
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);

    if (!data.name || !data.email || !data.password || !data.password2) {
      toast.warning('Please fill all the fields', { position: toast.POSITION.TOP_LEFT });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!result.error) {
        toast.success('Registration Successful!', { position: toast.POSITION.TOP_LEFT, autoClose: 1000 });
        nav('/login');
      } else {
        toast.warning(result.error, { position: toast.POSITION.TOP_LEFT, autoClose: 1000 });
      }
    } catch {
      toast.error('Something went wrong', { position: toast.POSITION.TOP_LEFT });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg bg-white rounded-4 overflow-hidden w-100" style={{ maxWidth: '900px' }}>
        {/* Left Side Image / Branding */}
        <div className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center bg-primary text-white p-5">
          <h2 className="fw-bold mb-3">Join the Vibe</h2>
          <p className="text-center">Connect with friends and explore the world.</p>
          <img
            src="/images/register.jpg"
            alt="Social media"
            className="img-fluid w-1/3 h-auto mt-3 rounded-4 shadow"
          />
        </div>

        {/* Right Side Form */}
        <div className="col-md-6 p-5">
          <h3 className="mb-4 text-center fw-semibold">Create Your Account</h3>

          <div className="d-flex justify-content-center mb-3">
            <PulseLoader color="#0d6efd" loading={loading} size={10} />
          </div>

          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control form-control-lg"
                name="password2"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            </div>
            <button
              className="btn btn-primary btn-lg w-100 mb-3"
              onClick={handleClick}
              disabled={loading}
            >
              Register
            </button>
            <p className="text-center">
              Already have an account?{' '}
              <Link to="/login" className="text-decoration-none text-primary fw-semibold">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
