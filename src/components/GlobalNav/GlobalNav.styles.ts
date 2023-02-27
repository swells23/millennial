const styles: any = {
  desktopOnlySx: {
    display: {
      xs: "none",
      sm: "flex",
    },
  },
  mobileOnlySx: {
    display: {
      sm: "none",
    },
  },
  mobileNavIcon: {
    marginRight: ".5rem",
  },
  logo: {
    alignItems: "center",
    color: "inherit",
    display: "flex",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
    "& > div": {
      marginRight: ".5rem",
      position: "relative",
    },
    "& :not(img)": {
      lineHeight: "1.25",
    },
  },
  logoSx: {
    height: {
      xs: "2.5rem",
      sm: "3rem",
    },
    width: {
      xs: "2.5rem",
      sm: "3rem",
    },
  },
  desktopNavItems: {
    marginLeft: "auto",
  },
  navItem: {
    color: "inherit",
    textDecoration: "inherit",
    "& > button": {
      "&:hover": {
        backgroundColor: "#154d44",
      },
    },
  },
  drawer: {
    "& .MuiDrawer-paper": {
      width: "15rem",
    },
  },
};

export default styles;
