import React from "react";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        px: '20px'
      }}
    >
      <Link to="top" smooth={true} duration={500}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" alignItems="flex-end" gap="40px" fontSize="24px">
        <Link
          to="home"
          smooth={true}
          duration={500}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: " 3px solid #FF2625",
            cursor:"pointer"
          }}
        >
          Home
        </Link>
        <Link
          to="exercises"
          smooth={true}
          duration={500}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: " 3px solid #FF2625",
            cursor:'pointer'
          }}
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
