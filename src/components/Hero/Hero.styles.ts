import {
  fadeIn,
  mobileTranslateLeft,
  translateLeft,
  translateUp,
} from "../../styles/animations.styles";

const styles: any = {
  root: {
    height: "100%",
    position: "relative",
  },
  heroImg: {
    height: "100%",
    width: "100%",
    "& > img": {
      filter: "brightness(50%)",
      height: "inherit",
      objectFit: "inherit",
      objectPosition: "inherit",
      width: "inherit",
    },
  },
  heroImgSx: {
    objectFit: { xs: "cover", sm: "unset" },
    objectPosition: { xs: "25%", sm: "unset" },
  },
  heroBand: {
    left: 0,
    position: "absolute",
    right: 0,
    textAlign: "center",
    top: "50%",
  },
  heroHeading: {
    animationDuration: "1s",
    animationName: `${fadeIn}, ${translateUp}`,
    backgroundColor: "#ffffff90",
    // border: '1px solid #3B6962',
    borderRadius: "5rem",
    // boxShadow: '0 0 .5rem #2c4e49',
    color: "#154d44",
    display: "flex",
    flexDirection: "column",
    height: "5rem",
    justifyContent: "center",
  },
  ctaButton: {
    animationDelay: ".2s",
    animationDuration: "1s",
    animationFillMode: "forwards",
    animationName: `${fadeIn}, ${translateUp}`,
    marginTop: "5rem",
    textDecoration: "none",
    visibility: "hidden",
    "&:hover": {
      backgroundColor: "#154d44",
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
    animationDelay: ".4s",
    animationDuration: ".7s",
    animationFillMode: "forwards",
    position: "absolute",
    visibility: "hidden",
    "& > svg:hover": {
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
    "& > svg:not(:last-child)": {
      marginBottom: { xs: "0.5rem", sm: "unset" },
      marginRight: { sm: "1rem" },
    },
  },
};

export default styles;
