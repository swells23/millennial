interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
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
  },
  desktopNavItemActiveSx: {
    color: "primary.light",
  },
  mobileNavItemActiveSx: {
    color: "primary.main",
  },
  desktopNavItemButtonSx: {
    "&:hover": {
      backgroundColor: "secondary.light",
    },
  },
  drawer: {
    "& > div": {
      textAlign: "center",
    },
    "& .MuiDrawer-paper": {
      width: "15rem",
    },
  },
  mobileNavItemButton: {
    textAlign: "center",
  },
};

export default styles;
