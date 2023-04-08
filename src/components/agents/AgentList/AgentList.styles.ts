const styles: any = {
  root: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  cardImageWrapperSx: {
    maxWidth: {
      xs: "7rem !important",
      sm: "12.5rem !important",
    },
  },
  cardImage: {
    backgroundSize: "100% 100%",
    borderRadius: ".25rem",
  },
  cardImageSx: {
    height: {
      xs: "7rem",
      sm: "15rem",
    },
  },
  cardNameDesktopSx: {
    display: {
      xs: "none",
      sm: "initial",
    },
  },
  cardNameMobileSx: {
    display: {
      xs: "initial",
      sm: "none",
    },
  },
  contactInfo: {
    whiteSpace: "pre",
  },
  contactInfoSx: {
    marginTop: { sm: "2rem" },
  },
  textIcon: {
    display: "flex",
    marginBottom: ".5rem",
    "& > svg": {
      marginRight: "1rem",
    },
  },
};

export default styles;
