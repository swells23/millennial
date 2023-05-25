/** @jsxImportSource @emotion/react */
import FirstPageIcon from '@mui/icons-material/FirstPage';
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import Image from "next/image";
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

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

export default function Listings({
    listingData,
}: {
    listingData: ListingData;
}) {
    const columns = ["Address", "Photos"];
    const [imageList, setImageList] = useState({});
    const [open, setOpen] = useState(false);
    
    const handleClose = () => setOpen(false);
    const handleOpen = async (folderId: string | undefined) => {
        if (folderId) {
            const images = await GetCarouselImages(folderId);
            if (images) {
                setOpen(true);
                setImageList(images);
            }
        }
    };

    const rows: Array<Listing | undefined> = listingData
        ? listingData.files.map((item: ListingDataItem) => {
            return { address: item.name, folderId: item.id };
        })
        : [];

    const renderColumns = () => {
        return columns.map(item => {
            return <TableCell key={`table-column-${item}`}>
                <Typography variant="h6" component="p">{item}</Typography>
            </TableCell>;
        })
    };

    const renderRows = () => {
        return (rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
        ).map(row => (
            <TableRow
                key={row?.address}
                css={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    <Typography>{row?.address}</Typography>
                </TableCell>
                <TableCell>
                    <Button onClick={() => handleOpen(row?.folderId)}>
                        <Typography>View</Typography>
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
        ))
    };

    const imgLoader = ({ src }: { src: string }) => {
        return `${GOOGLE_DRIVE_EXPORT}&id=${src}`;
    };

    const renderImgList = () => {
        // console.log("IMAGELIST: ", imageList?.carouselImageList?.files)
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

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const TablePaginationActions = (props: TablePaginationActionsProps) => {
        const { count, page, rowsPerPage, onPageChange } = props;

        const handleFirstPageButtonClick = (
            event: React.MouseEvent<HTMLButtonElement>,
        ) => {
            onPageChange(event, 0);
        };

        const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            onPageChange(event, page - 1);
        };

        const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            onPageChange(event, page + 1);
        };

        const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };

        return (
            <div css={styles.tableControlsWrapper}>
                <IconButton
                    onClick={handleFirstPageButtonClick}
                    disabled={page === 0}
                    aria-label="first page"
                >
                    <FirstPageIcon />
                </IconButton>
                <IconButton
                    onClick={handleBackButtonClick}
                    disabled={page === 0}
                    aria-label="previous page"
                >
                    <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                    onClick={handleNextButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="next page"
                >
                    <KeyboardArrowRight />
                </IconButton>
                <IconButton
                    onClick={handleLastPageButtonClick}
                    disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                    aria-label="last page"
                >
                    <LastPageIcon />
                </IconButton>
            </div>
        );
    };

    return (
        <div css={styles.root}>
            <div css={styles.heading}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Featured Listings
                </Typography>
                <Typography variant="h6" component="p" color="secondary">
                    Browse through pictures of recently listed properties.
                </Typography>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 320 }} aria-label="listings table">
                    <TableHead>
                        <TableRow>
                            {renderColumns()}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderRows()}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                page={page}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                count={rows.length}
                SelectProps={{
                    inputProps: {
                        'aria-label': 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
        </div>
    );
}
