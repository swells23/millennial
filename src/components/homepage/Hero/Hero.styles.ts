import {
  fadeIn,
  mobileTranslateLeft,
  translateLeft,
  translateUp,
} from "../../../styles/animations.styles";

interface StylesObj {
  [key: string]: any;
}

const styles: StylesObj = {
  root: {
    height: "calc(100vh - 3.5rem)",
    position: "relative",
  },
  heroImg: {
    height: "100%",
    position: "relative",
    width: "100%",
    "& > img": {
      filter: "brightness(60%)",
    },
  },
  heroImgSx: {
    "& > #hero-img": {
      display: {
        xs: "none",
        md: "unset",
      },
    },
    "& > #mobile-hero-img": {
      display: {
        md: "none",
      },
    },
  },
  heroBand: {
    left: 0,
    position: "absolute",
    right: 0,
    textAlign: "center",
    top: "45%",
  },
  heroHeading: {
    animationDelay: ".2s",
    animationDuration: "1s",
    animationFillMode: "forwards",
    animationName: `${fadeIn}, ${translateUp}`,
    backgroundColor: "#ffffff90",
    borderRadius: "5rem",
    display: "flex",
    flexDirection: "column",
    height: "5rem",
    justifyContent: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    visibility: "hidden",
  },
  ctaButton: {
    textDecoration: "none",
    "& > button": {
      animationDelay: ".4s",
      animationDuration: "1s",
      animationFillMode: "forwards",
      animationName: `${fadeIn}, ${translateUp}`,
      marginTop: "5rem",
      visibility: "hidden",
    },
  },
  socialsWrapper: {
    left: 0,
    position: "absolute",
    right: 0,
  },
  socialsWrapperSx: {
    top: { xs: "5rem", sm: "unset" },
    bottom: { sm: "5rem" },
  },
  socials: {
    animationDelay: ".6s",
    animationDuration: ".7s",
    animationFillMode: "forwards",
    position: "absolute",
    visibility: "hidden",
    "& svg:hover": {
      cursor: "pointer",
      transform: "scale(1.3)",
    },
  },
  socialsSx: {
    animationName: {
      xs: `${fadeIn}, ${mobileTranslateLeft}`,
      sm: `${fadeIn}, ${translateLeft}`,
    },
    display: { xs: "flex", sm: "unset" },
    flexDirection: { xs: "column", sm: "unset" },
    right: { xs: "0.5rem", sm: "5rem" },
    "& > :not(:last-child)": {
      marginBottom: { xs: "0.5rem", sm: "unset" },
      marginRight: { sm: "1rem" },
    },
  },
  socialIconSx: {
    color: "primary.light",
  },
};

export default styles;
