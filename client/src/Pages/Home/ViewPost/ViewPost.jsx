import React, { useContext } from "react";
import { Typography, Grid } from "@mui/material";

import { useState, useEffect } from "react";
import ViewPostCard from "./ViewPostCard";
import { AuthContext } from "./../../../contexts/AuthProvider";
import toast from "react-hot-toast";

const ViewPost = () => {
  const [posts, setPosts] = useState();
  const { user, logOutUser } = useContext(AuthContext);

  const handleDelete = (post) => {
    console.log("13");
    console.log(post._id);
    const deletePost = window.confirm(
      `Are you sure you want to delete this post? ${post.postName}`
    );
    if (deletePost) {
      fetch(`https://job-portal-vh83.onrender.com/deletePost/${post._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            toast("Post deleted successfully");

            // display remaining post
            const remainingPost = posts.filter(
              (remain) => remain._id !== post._id
            );
            setPosts(remainingPost);
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://job-portal-vh83.onrender.com/posts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("job-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOutUser();
        }
        return res.json();
      })
      .then((data) => setPosts(data));
  }, [user?.email, logOutUser, posts]);

  return (
    <div className="viewPost">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography
            style={{ padding: "20px 0" }}
            variant="h3"
            align="center"
            gutterBottom
          >
            Explore {posts?.length} Job Openings Ready for You
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <ViewPostCard
              post={post}
              key={post._id}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <Grid item xs={12} sm={12}>
            <Typography
              className="viewPostCard"
              variant="h4"
              align="center"
              gutterBottom
            >
              No Job Vacancy available at this moment
            </Typography>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default ViewPost;