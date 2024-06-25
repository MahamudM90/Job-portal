import React, { useState } from "react";
import "./CreatePost.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CreatePost = () => {
  const [createdPost, setCreatedPost] = useState({});

  const navigate = useNavigate();

  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const handleSubmit = (e) => {
    e.preventDefault();

    const postName = e.target.postName.value;
    const companyName = e.target.companyName.value;
    const numberOfVacancy = e.target.numberOfVacancy.value;
    const currentDate = e.target.currentDate.value;
    const lastApplyDate = e.target.lastApplyDate.value;
    const jobDescription = e.target.jobDescription.value;
    const jobRequirements = e.target.jobRequirements.value;
    const jobBenefits = e.target.jobBenefits.value;
    const howToApply = e.target.howToApply.value;

    const createdPost = {
      postName,
      companyName,
      numberOfVacancy,
      currentDate,
      lastApplyDate,
      jobDescription,
      jobRequirements,
      jobBenefits,
      howToApply,
    };
    setCreatedPost(createdPost);
    console.log(createdPost);

    fetch("http://localhost:5000/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createdPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Post Created Successfully!");
        }
        navigate("/view-post", { replace: true });
      });

    e.target.reset();
  };

  return (
    <React.Fragment>
      <div className="MakePost">
        <Card className="MakePostCard">
          <Typography mb={5} variant="h3" align="center" gutterBottom>
            Create Job Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="postName"
                  name="postName"
                  label="Post name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="companyName"
                  name="companyName"
                  label="Company name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="numberOfVacancy"
                  name="numberOfVacancy"
                  label="Number of vacancy"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="currentDate"
                  name="currentDate"
                  label="Post Created Date"
                  fullWidth
                  autoComplete="given-name"
                  value={date}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="lastApplyDate"
                  name="lastApplyDate"
                  label="Last Apply Date"
                  fullWidth
                  autoComplete="given-name"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  name="jobDescription"
                  label="Job Description"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Job Requirements"
                  name="jobRequirements"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="Job Benefits"
                  name="jobBenefits"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="standard-multiline-static"
                  label="How to Apply"
                  name="howToApply"
                  multiline
                  rows={4}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12} align="center">
                <Button
                  type="submit"
                  variant="contained"
                  align="center"
                  color="primary"
                >
                  Create Post
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default CreatePost;