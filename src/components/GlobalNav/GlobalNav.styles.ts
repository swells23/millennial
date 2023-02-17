const styles: any = {
  desktopOnlySx: {
    display: {
      xs: "none",
      sm: "block",
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
    flexGrow: 1,
    lineHeight: "1.25",
  },
  subtitle: {
    lineHeight: "inherit",
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
