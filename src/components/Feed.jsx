import {
  ExpandMore,
  Favorite,
  FavoriteBorder,
  MoreVert,
  Share,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import React from "react";
import { Post } from "./Post";

export const Feed = () => {
  return (
    <Box
      flex={4}
      p={2}
      sx={{
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </Box>
  );
};
