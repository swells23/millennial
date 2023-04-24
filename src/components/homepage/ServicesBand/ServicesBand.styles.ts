interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  rootSx: {
    backgroundColor: "#87B785",
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
};

export default styles;
