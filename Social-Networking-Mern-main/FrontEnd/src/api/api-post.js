const API_BASE = 'http://localhost:4000';

const create = async (params, credentials, post) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify(post)
    };
    let response = await fetch(`${API_BASE}/api/post/${params.userId}`, requestOptions);
    return await response.json();
  } catch (err) {
    console.error("Create post failed:", err);
    throw err;
  }
}

const getFeed = async (params, credentials, signal) => {
  try {
    const requestOptions = {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    };
    let response = await fetch(`${API_BASE}/api/post/feed/${params.userId}`, requestOptions);
    return await response.json();
  } catch (err) {
    console.error("Get feed failed:", err);
    throw err;
  }
}

const getFeedUser = async (params, credentials, signal) => {
  try {
    const requestOptions = {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    };
    let response = await fetch(`${API_BASE}/api/post/feedUser/${params.userId}`, requestOptions);
    return await response.json();
  } catch (err) {
    console.error("Get feed user failed:", err);
    throw err;
  }
}

const findPeoplee = async (params, credentials, signal) => {
  try {
    let response = await fetch(`${API_BASE}/api/users/findpeople/${params.userId}`, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    });
    return await response.json();
  } catch (err) {
    console.error("Find people failed:", err);
    throw err;
  }
}

const remove = async (params, credentials) => {
  try {
    let response = await fetch(`${API_BASE}/api/post/${params.postId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    });
    return await response.json();
  } catch (err) {
    console.error("Remove post failed:", err);
    throw err;
  }
}

const follow = async (params, credentials, followId) => {
  try {
    let response = await fetch(`${API_BASE}/api/users/follow/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify({ userId: params.userId, followId })
    });
    return await response.json();
  } catch (err) {
    console.error("Follow user failed:", err);
    throw err;
  }
}

const unfollow = async (params, credentials, unfollowId) => {
  try {
    let response = await fetch(`${API_BASE}/api/users/unfollow/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify({ userId: params.userId, unfollowId })
    });
    return await response.json();
  } catch (err) {
    console.error("Unfollow user failed:", err);
    throw err;
  }
}

const Like = async (params, credentials, postId) => {
  try {
    let response = await fetch(`${API_BASE}/api/post/like`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify({ userId: params.userId, postId })
    });
    return await response.json();
  } catch (err) {
    console.error("Like post failed:", err);
    throw err;
  }
}

const unlike = async (params, credentials, postId) => {
  try {
    let response = await fetch(`${API_BASE}/api/post/unlike`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify({ userId: params.userId, postId })
    });
    return await response.json();
  } catch (err) {
    console.error("Unlike post failed:", err);
    throw err;
  }
}

const comment = async (params, credentials, postId, comment) => {
  try {
    let response = await fetch(`${API_BASE}/api/post/comment/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify({ userId: params.userId, postId, comment })
    });
    return await response.json();
  } catch (err) {
    console.error("Comment failed:", err);
    throw err;
  }
}

const read = async (params, credentials, signal) => {
  try {
    let response = await fetch(`${API_BASE}/api/users/${params.userId}`, {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    });
    return await response.json();
  } catch (err) {
    console.error("Read user failed:", err);
    throw err;
  }
}

const checkFollow = (user, jwt) => {
  return user.followers.some(follower => follower._id === jwt);
}

const update = async (params, credentials, Values) => {
  try {
    let response = await fetch(`${API_BASE}/api/users/update/${params.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify(Values)
    });
    return await response.json();
  } catch (err) {
    console.error("Update user failed:", err);
    throw err;
  }
}

const uncomment = async (params, credentials, postId, comment) => {
  try {
    let response = await fetch(`${API_BASE}/api/post/uncomment/`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify({ userId: params.userId, postId, comment })
    });
    return await response.json();
  } catch (err) {
    console.error("Uncomment failed:", err);
    throw err;
  }
}

const searchuser = async (params, credentials, se) => {
  try {
    let response = await fetch(`${API_BASE}/api/users/?search=${se.search}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    });
    return await response.json();
  } catch (err) {
    console.error("Search user failed:", err);
    throw err;
  }
}

const getChat = async (params, credentials, se) => {
  try {
    let response = await fetch(`${API_BASE}/api/chat/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify({ userId: params.userId, id: se })
    });
    return await response.json();
  } catch (err) {
    console.error("Get chat failed:", err);
    throw err;
  }
}

const getMessage = async (params, credentials, se) => {
  try {
    let response = await fetch(`${API_BASE}/api/message/${se}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    });
    return await response.json();
  } catch (err) {
    console.error("Get message failed:", err);
    throw err;
  }
}

const setMessage = async (params, credentials) => {
  try {
    let response = await fetch(`${API_BASE}/api/message/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      },
      body: JSON.stringify(params)
    });
    return await response.json();
  } catch (err) {
    console.error("Set message failed:", err);
    throw err;
  }
}

const fetchChats = async (params, credentials) => {
  try {
    let response = await fetch(`${API_BASE}/api/chat/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    });
    return await response.json();
  } catch (err) {
    console.error("Fetch chats failed:", err);
    throw err;
  }
}


const getAllPosts = async (credentials, signal) => {
  try {
    const requestOptions = {
      method: 'GET',
      signal: signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': credentials.t
      }
    };
    let response = await fetch(`${API_BASE}/api/post/all`, requestOptions);
    return await response.json();
  } catch (err) {
    console.error("Get all posts failed:", err);
    throw err;
  }
}

export {
  searchuser,
  fetchChats,
  setMessage,
  getChat,
  getMessage,
  create,
  update,
  remove,
  getFeed,
  findPeoplee,
  follow,
  unfollow,
  Like,
  unlike,
  comment,
  uncomment,
  read,
  checkFollow,
  getFeedUser,
  getAllPosts
};
