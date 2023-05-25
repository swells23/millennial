interface StylesObj {
    [key: string]: any;
}

const styles: StylesObj = {
    modalSx: {
        '& .swiper': {
            height: {
                xs: "440px",
                md: "540px",
                xl: "780px"
            },
            maxWidth: {
                xs: "480px",
                md: "640px",
                xl: "1280px"
            },
            '& .swiper-wrapper': {
                height: {
                    xs: "360px",
                    md: "480px",
                    xl: "720px"
                }
            }
        }
    },
    carousel: {
        borderRadius: ".25rem",
        margin: "auto",
        width: "90%",
        '& .swiper-pagination-bullet-active': {
            backgroundColor: '#fff'
        },
        '& .swiper-button-prev, .swiper-button-next': {
            top: "50%",
            transform: "translate(0%, -50%)",
            '&::after': {
                color: '#fff',
                textShadow: '0 0 .25rem #000',
            }
        }
    },
    image: {
        objectFit: "contain",
        position: "unset !important",
    },
}

export default styles;
