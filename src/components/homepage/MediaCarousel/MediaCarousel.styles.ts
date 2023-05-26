interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    backgroundColor: "#000",
    color: "#fff",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  headline: {
    alignItems: "center",
    display: "flex",
  },
  carousel: {
    backgroundColor: "lightgrey",
    borderRadius: ".25rem",
    height: "100%",
    width: "100%",
  },
  image: {
    aspectRatio: "16/9",
    position: "unset !important",
  },
};

export default styles;
