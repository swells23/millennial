/** @jsxImportSource @emotion/react */
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Listings.styles";
import { GOOGLE_DRIVE_EXPORT } from "../../../data/templateMeta";
import GetCarouselImages from "../../../pages/api/GetCarouselImages";

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
        handleClose = () => {
            setOpen(false);
        },
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
                    <Image
                        css={styles.image}
                        key={`listing-${idx + 1}`}
                        loader={imgLoader}
                        src={item.id}
                        alt={`listing ${idx + 1}`}
                        fill
                    />
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
                                    <Backdrop
                                        // sx={{ color: '#fff', zIndex: (theme) => 10000 }}
                                        open={open}
                                        onClick={handleClose}
                                    >
                                        <Carousel
                                            css={styles.carousel}
                                            showStatus={false}
                                            showThumbs={false}
                                        >
                                            {renderImgList()}
                                        </Carousel>
                                    </Backdrop>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
