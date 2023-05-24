interface StylesObj {
    [key: string]: any;
}

const styles: StylesObj = {
    carousel: {
        maxWidth: "600px",
        "& .slider-wrapper": {
            borderRadius: ".25rem",
        },
    },
    image: {
        aspectRatio: "16/9",
        position: "unset !important",
    },
}

export default styles;
