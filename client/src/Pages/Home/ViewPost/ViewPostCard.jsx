import React, { useEffect, useState } from "react";
import { Card, Typography, Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { CardContent } from "@mui/material";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const ViewPostCard = ({ post, handleDelete }) => {
  const {
    _id,
    postName,
    companyName,
    numberOfVacancy,
    currentDate,
    lastApplyDate,
    jobDescription,
    jobRequirements,
    jobBenefits,
    howToApply,
  } = post;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <Card sx={{ display: "flex" }} className="singlePost">
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" align="center" variant="h5">
              <b>{postName}</b>
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
            >
              Company Name: {companyName} - Number of Vacancy: {numberOfVacancy}
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
            >
              Job Posted Date: {currentDate}, Last Apply Date: {lastApplyDate}
            </Typography>
            <br />
            <div className="description">
              <Typography variant="subtitle1" paragraph>
                <b>Job Description:</b>{" "}
                {jobDescription.split("-").map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <b>Job Requirements:</b>{" "}
                {jobRequirements.split("-").map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
                <b>Job Benefits:</b>{" "}
                {jobBenefits.split("-").map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </Typography>
            </div>
            <Typography variant="subtitle1" align="center" color="primary">
              <b>How Can Apply:</b> {howToApply}
            </Typography>
            <Stack spacing={2} direction="row" className="viewBtn">
              <Link to={`/update-post/${_id}`}>
                <Button variant="contained" startIcon={<EditIcon />}>
                  Edit
                </Button>
              </Link>
              <Button
                onClick={() => handleDelete(post)}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default ViewPostCard;