interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    alignItems: "center",
    display: "flex",
    marginTop: "auto",
  },
  rootSx: {
    backgroundColor: "secondary.main",
    color: "secondary.contrastText",
    minHeight: {
      xs: "3.5rem",
      sm: "4rem",
    },
  },
};

export default styles;
