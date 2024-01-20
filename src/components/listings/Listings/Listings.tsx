/** @jsxImportSource @emotion/react */
import Close from "@mui/icons-material/Close";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
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
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GOOGLE_DRIVE_EXPORT } from "../../../data/templateMeta";
import styles from "./Listings.styles";

interface ListingData {
  drive: Array<DriveFile>;
  addressList: Array<Address>;
  images?: Array<ListingImages>;
}

interface DriveFile {
  id: string;
  name: string;
  [key: string]: unknown;
}

interface Address {
  query: string;
  response: {
    input: any;
    results: any;
  };
}

interface ListingImages {
  files: Array<DriveFile>;
  address: string;
  [key: string]: unknown;
}

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

interface ImageProps {
  id: string;
  [key: string]: unknown;
}

export default function Listings({
  listingData,
}: {
  listingData: ListingData | undefined;
}) {
  const columns = ["Address", "Photos"];
  const [imageData, setImageData] = React.useState([{ id: "" }]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = (images: Array<DriveFile> | undefined) => {
    if (images) {
      setOpen(true);
      setImageData(images);
    }
  };

  const renderColumns = () => {
    return columns.map((item) => {
      return (
        <TableCell key={`table-column-${item}`}>
          <Typography variant="h6" component="p">
            {item}
          </Typography>
        </TableCell>
      );
    });
  };

  const renderRows = () => {
    if (!listingData) {
      return;
    }

    return (
      rowsPerPage > 0
        ? listingData.addressList.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )
        : listingData.addressList
    ).map((item, idx) => {
      const address = item.response.results[0]?.formatted_address || item.query;

      return (
        <TableRow key={address} css={styles.tableRow} hover>
          <TableCell component="th" scope="row">
            <Typography>{address}</Typography>
          </TableCell>
          <TableCell>
            <Button
              aria-label="view images"
              onClick={() => handleOpen(listingData.images?.[idx].files)}
            >
              <Typography>View</Typography>
            </Button>
            <Modal open={open} onClose={handleClose}>
              <Box css={styles.swiperWrapper} sx={styles.swiperWrapperSx}>
                <IconButton
                  css={styles.closeIcon}
                  sx={styles.closeIconSx}
                  aria-label="close images"
                  onClick={handleClose}
                >
                  <Close />
                </IconButton>
                <Swiper
                  css={styles.carousel}
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  centeredSlides={true}
                  lazyPreloadPrevNext={2}
                  pagination={{
                    clickable: true,
                  }}
                >
                  {renderImgList()}
                </Swiper>
              </Box>
            </Modal>
          </TableCell>
        </TableRow>
      );
    });
  };

  const imgLoader = ({ src }: { src: string }) => {
    return `${GOOGLE_DRIVE_EXPORT}${src}`;
  };

  const renderImgList = () => {
    return imageData.map((item: ImageProps, idx: number) => {
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
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TablePaginationActions = (props: TablePaginationActionsProps) => {
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
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
    <Container css={styles.root} maxWidth="xl">
      <div css={styles.heading}>
        <Typography variant="h3" component="h1" gutterBottom>
          Featured Listings
        </Typography>
        <Typography variant="h6" component="p" color="secondary">
          Browse through pictures of recently listed properties.
        </Typography>
      </div>
      {listingData && (
        <>
          <TableContainer component={Paper}>
            <Table css={{ minWidth: 320 }} aria-label="listings table">
              <TableHead>
                <TableRow>{renderColumns()}</TableRow>
              </TableHead>
              <TableBody>{renderRows()}</TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            count={listingData.addressList.length}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </>
      )}
    </Container>
  );
}
