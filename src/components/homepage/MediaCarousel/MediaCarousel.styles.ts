const styles: any = {
  root: {
    backgroundColor: "#000",
    color: "#fff",
    paddingTop: "2rem",
    paddingBottom: "5rem",
    "& .carousel-root": {
      "& > .carousel-slider": {
        overflow: "unset",
        "& > .control-dots": {
          transform: "translateY(3.5rem)",
        },
      },
    },
  },
  headline: {
    alignItems: "center",
    display: "flex",
  },
  carousel: {
    "& .slider-wrapper": {
      borderRadius: ".25rem",
    },
  },
  video: {
    aspectRatio: "16/9",
    height: "100%",
    objectFit: "fill",
    width: "100%",
  },
};

export default styles;
