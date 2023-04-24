interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    paddingTop: "5rem",
    paddingBottom: "5rem",
  },
  containerSx: {
    padding: {
      md: "0 5rem",
    },
  },
  textIcon: {
    display: "flex",
    "& > svg": {
      marginRight: "1rem",
    },
  },
};

const propStyles: StylesObj = {
  spacing: {
    xs: 3,
    sm: 6,
    md: 12,
  },
};

export default styles;
export { propStyles };
