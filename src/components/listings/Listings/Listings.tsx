/** @jsxImportSource @emotion/react */
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GOOGLE_DRIVE_EXPORT } from "../../../data/templateMeta";
import GetCarouselImages from "../../../pages/api/GetCarouselImages";
import styles from "./Listings.styles";

interface ListingDataItem {
    id: string;
    name: string;
    [key: string]: unknown;
}

interface ListingData {
    files: Array<ListingDataItem>;
    [key: string]: unknown;
}

interface Listing {
    address: string;
    folderId: string;
}

interface ImageListItem {
    id: string;
    [key: string]: unknown;
}

interface ImageList {
    files: Array<ImageListItem>;
    [key: string]: unknown;
}

export default function Listings({
    listingData,
}: {
    listingData: ListingData;
}) {
    const [imageList, setImageList] = useState({});
    const [open, setOpen] = useState(false),
        handleClose = () => setOpen(false),
        handleOpen = async (folderId: string | undefined) => {
            if (folderId) {
                const images = await GetCarouselImages(folderId);
                if (images) {
                    setOpen(true);
                    setImageList(images);
                }
            }
        },
        rows: Array<Listing | undefined> = listingData
            ? listingData.files.map((item: ListingDataItem) => {
                return { address: item.name, folderId: item.id };
            })
            : [],
        imgLoader = ({ src }: { src: string }) => {
            return `${GOOGLE_DRIVE_EXPORT}&id=${src}`;
        },
        renderImgList = () => {
            console.log("IMAGELIST: ", imageList?.carouselImageList?.files)
            return imageList?.carouselImageList?.files?.map((item: ImageListItem, idx: number) => {
                return (
                    <SwiperSlide key={`listing-${idx + 1}`}>
                        <Image
                            css={styles.image}
                            loader={imgLoader}
                            src={item.id}
                            alt={`listing ${idx + 1}`}
                            priority={idx === 0}
                            fill
                        />
                    </SwiperSlide>
                );
            });
        };

    return (
        <div>
            <Typography variant="h3" component="h1">
                Featured Listings
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 320 }} aria-label="listings table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Address</TableCell>
                            <TableCell>Photos</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow
                                key={row?.address}
                                css={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.address}
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => handleOpen(row?.folderId)}>
                                        View
                                    </Button>
                                    <Modal sx={styles.modalSx} open={open} onClose={handleClose}>
                                        <Swiper
                                            css={styles.carousel}
                                            navigation={true}
                                            modules={[Navigation, Pagination]}
                                            spaceBetween={30}
                                            centeredSlides={true}
                                            lazyPreloadPrevNext={2}
                                            pagination={{
                                                clickable: true
                                            }}
                                        >
                                            {renderImgList()}
                                        </Swiper>
                                    </Modal>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
