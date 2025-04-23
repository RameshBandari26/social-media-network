import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userInfo1")) {
      nav('/s');
    }
  }, [nav]);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-light">
      <div className="row w-100">
        {/* Left side */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start pl-5">
          <h1 className="display-3 mt-3 mb-3">ChatMEET</h1>
          <a className="btn btn-light btn-lg mr-2 mb-2" href="/register" role="button">Register</a>
          <a className="btn btn-dark btn-lg mb-2" href="/login" role="button">Login</a>
        </div>

        {/* Right side */}
        <div className="col-md-6 d-flex flex-column justify-content-center pr-5">
          <div className="mt-5">
            <p className="lead">
              ChatMEET is a web application that allows users to connect with each other through chat rooms. Users can
              create their own chat rooms, invite others to join, and communicate in real-time.
            </p>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
