import * as React from "react";
import "./MenuBar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Home", "About", "Hours", "Guides", "Contact"];

const MenuBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} sx={{ color: "#f2e6c5", background: "#293D5B" }}>
      <Toolbar
        disableGutters
        sx={{
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <Link
                to={`/${page.toLowerCase()}`}
                style={{
                  textDecoration: "none",
                  color: "#f2e6c5",
                }}
              >
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{ textDecoration: "none" }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            mr: "30px",
          }}
        >
          {pages.map((page) => (
            <Button
              sx={{
                fontFamily: "Inter",
                fontSize: "1.7rem",
                textTransform: "none",
                ml: "30px",
                color: "#F2E6C5",
                "&:hover": {
                  textUnderlineOffset: "4px",
                  textDecoration: "underline",
                },
              }}
              disableRipple
              href={`${page.toLowerCase()}`}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default MenuBar;
