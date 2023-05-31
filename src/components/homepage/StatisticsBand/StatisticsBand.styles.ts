interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    overflow: "hidden",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    position: "relative",
  },
  backgroundImg: {
    minWidth: "1920px",
    transform: "scaleX(-1)",
    zIndex: -1,
  },
  image: {
    borderRadius: ".25rem",
    height: "100%",
    width: "100%",
  },
  infoBlock: {
    marginBottom: "2rem",
    "& > p": {
      marginBottom: "1rem",
    },
  },
  statNum: {
    fontWeight: 600,
  },
};

export default styles;
