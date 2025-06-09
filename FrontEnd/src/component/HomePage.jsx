import React, { useState, useEffect } from 'react';
import Post from './Post';
import Posts from './Posts';
import auth from './../auth/auth-help';
import jwt1 from 'jwt-decode';
import { getFeed } from "../api/api-post";
import FindPeople from "./FindPeople";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import BounceLoader from 'react-spinners/BounceLoader';
import MoonLoader from 'react-spinners/MoonLoader';
import NavBar from './NavBar';

const HomePage = () => {
  const [posts, SetPosts] = useState([]);
  const [isNew, setIsNew] = useState(false);

  const nav = useNavigate();

  // Adding new post to the list
  function addOne(data1) {
    setIsNew(true);
    const updatedPosts = [...posts];
    updatedPosts.splice(0, 0, data1);
    setTimeout(() => {
      SetPosts(updatedPosts);
    }, 500);

    setTimeout(() => {
      toast.success('Post Upload', { position: toast.POSITION.TOP_LEFT, autoClose: 1500 });
      SetPosts(updatedPosts);
      nav('/');
    }, 700);
  }

  const jwt = auth.isAuthenticated();
  const user1 = jwt1(jwt.token);

  // Fetch feed data (posts)
  useEffect(() => {
    getFeed({ userId: user1.id }, { t: jwt.token }).then((data) => SetPosts(data));
  }, []);

  // Deleting a post
  const updatePosts = (post) => {
    let updated = [...posts];
    updated = updated.filter((item) => item._id !== post._id);
    setTimeout(() => {
      toast.success('Post Deleted', { position: toast.POSITION.TOP_LEFT, autoClose: 1500 });
      SetPosts(updated);
      nav('/');
    }, 100);
  };

  return (
    <div style={{ backgroundColor: "#fafafa " }}>
      {/* Navbar */}
      <NavBar />

      <section className="p-lg-0 p-md-3 p-3 mb-3 mt-5 container">
        <div className="d-flex overflow-hidden justify-content-evenly m-auto align-items-start px-5">
          <div className="left col-lg-7 col-sm-12 h-100 border_radius mt-5">
            {/* Add New Post */}
            <Post onAdd1={addOne} />

            {/* Loader for new post */}
            {isNew ? (
              <MoonLoader
                color="#077ce8"
                cssOverride={{}}
                loading
                size={60}
              />
            ) : null}

            {/* Display Posts */}
            {posts.map((post, idx) => (
              <Posts updatePosts={updatePosts} key={idx} post={post} />
            ))}
          </div>

          {/* Find People Sidebar */}
          <FindPeople />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
