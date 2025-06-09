import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';

const Home = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userInfo1")) {
      nav('/s');
    }
  }, [nav]);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-blue-500 animate-fadeIn">
      <div className="row w-100">
        {/* Left side */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center pl-5">
          <h1 className="display-3 mt-3 mb-3 animate-slideDown">ChatMEET</h1>
          <div className="btn-group-vertical animate-fadeIn delay-1s flex flex-row">
            <a className="btn btn-light btn-lg btn-rounded m-2 btn-hover" href="/register" role="button">Register</a>
            <a className="btn btn-dark btn-lg btn-rounded m-2 btn-hover" href="/login" role="button">Login</a>
          </div>
        </div>

        {/* Right side */}
        <div className="col-md-6 d-flex flex-column justify-content-center pr-5 animate-slideInRight delay-1s">
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