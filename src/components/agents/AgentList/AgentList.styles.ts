interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  card: {
    backgroundColor: "#eee",
  },
  cardImageWrapperSx: {
    maxWidth: {
      xs: "7rem",
      sm: "12.5rem",
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
  cardNameSx: {
    flexBasis: {
      xs: "calc(100% - 7rem)",
      sm: "initial",
    },
    maxWidth: {
      xs: "calc(100% - 7rem)",
      sm: "initial",
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
  nameSkeleton: {
    fontSize: "1.5rem",
    maxWidth: "15rem",
  },
  titleSkeleton: {
    fontSize: "0.875rem",
    maxWidth: "12rem",
  },
  contactSkeleton: {
    fontSize: "1rem",
    maxWidth: "15rem",
    width: "100%",
  },
  linksSkeleton: {
    fontSize: "0.875rem",
    maxWidth: "15rem",
    width: "100%",
  },
};

export default styles;
