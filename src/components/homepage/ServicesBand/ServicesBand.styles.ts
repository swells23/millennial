interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  rootSx: {
    background: {
      xs: "linear-gradient(90deg, rgba(44,198,93,0.30023347229516806) 0%, rgba(44,198,93,0.10135392047443981) 100%)",
      md: "linear-gradient(90deg, rgba(76,140,114,0.49631190366771705) 0%, rgba(44,198,93,0.5047152650122548) 25%, rgba(76,140,114,0.20219425660889356) 80%)",
    },
  },
  heading: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  video: {
    borderRadius: ".25rem",
    width: "100%",
    "&:hover": {
      cursor: "pointer",
    },
  },
  textIcon: {
    alignItems: "center",
    display: "flex",
    "& > svg": {
      marginRight: "1rem",
    },
  },
};

export default styles;
