interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  heading: {
    marginBottom: "2rem",
  },
  carousel: {
    borderRadius: ".25rem",
    margin: "auto",
    "& .swiper-pagination-bullet-active": {
      backgroundColor: "#fff",
    },
    "& .swiper-button-prev, .swiper-button-next": {
      top: "50%",
      transform: "translate(0%, -50%)",
      "&::after": {
        color: "#fff",
        textShadow: "0 0 .25rem #000",
      },
    },
  },
  image: {
    objectFit: "contain",
    position: "unset !important",
  },
  tableRow: {
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
  tableControlsWrapper: {
    flexShrink: 0,
  },
  swiperWrapper: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    "& .swiper": {
      height: "100%",
    },
  },
  swiperWrapperSx: {
    height: {
      xs: "440px",
      md: "540px",
      xl: "780px",
    },
    maxWidth: {
      xs: "480px",
      md: "640px",
      xl: "1280px",
    },
    "& .swiper-wrapper": {
      height: {
        xs: "360px",
        md: "480px",
        xl: "720px",
      },
    },
  },
  closeIcon: {
    color: "#fff",
    cursor: "pointer",
    position: "absolute",
    zIndex: 5,
  },
  closeIconSx: {
    top: {
      xs: "-3rem",
      md: 0,
    },
    right: {
      xs: 0,
      sm: "-3rem",
      md: "-5rem",
      xl: 0,
    },
  },
};

export default styles;
