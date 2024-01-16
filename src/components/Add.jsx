import {
  DateRange,
  Delete,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";

export const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  return (
    <>
      <Tooltip
        onClick={(e) => {
          setOpen(true);
        }}
        title="Add"
      >
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: "20px",
            left: {
              xs: "calc(50% - 25px)",
              sm: 120,
            },
          }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Button>Open modal</Button>
      <StyledModal
        open={open}
        onClose={(e) => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={350}
          bgcolor={"background.default"}
          color="text.default"
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              onClick={(e) => setOpen(true)}
              sx={{
                width: 25,
                height: 25,
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              alt="RD"
              src="https://images.pexels.com/photos/4618583/pexels-photo-4618583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <Typography variant="span" fontWeight={700}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="filled"
            sx={{
              width: "100%",
              borderRadius: "5px",
              //   backgroundColor: "white",
            }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"></EmojiEmotions>
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ height: "30px" }}
          >
            <Button>POST</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange></DateRange>
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};
