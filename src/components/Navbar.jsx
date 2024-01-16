import styled from "@emotion/styled";
import { Pets, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  CssBaseline,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useState } from "react";

export const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",

    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  //   const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);
  return (
    <CssBaseline>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            TechZen
          </Typography>
          <Pets
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          ></Pets>
          <Search>
            <InputBase placeholder="Search"></InputBase>
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
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
          </Icons>
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
            <Typography variant="span">John Doe</Typography>
          </UserBox>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </CssBaseline>
  );
};
