/** @jsxImportSource @emotion/react */
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import { navItems } from "../../../data/templateMeta";
import logo from "../../../images/logo.png";
import styles from "./GlobalNav.styles";

export default function GlobalNav() {
  const [mobileOpen, setMobileOpen] = useState(false),
    handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    },
    getMenuItems = () => {
      const desktopComponents: Array<ReactElement> = [],
        mobileComponents: Array<ReactElement> = [];

      navItems.forEach((item) => {
        desktopComponents.push(
          <Link
            key={`navItem-${item.id}`}
            css={styles.navItem}
            href={item.route}
          >
            <Button color="inherit">{item.title}</Button>
          </Link>
        );
        mobileComponents.push(
          <Link
            key={`mobile-navItem-${item.id}`}
            css={styles.navItem}
            href={item.route}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      });

      return { desktop: desktopComponents, mobile: mobileComponents };
    },
    menuItems = getMenuItems();

  return (
    <>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              css={styles.mobileNavIcon}
              sx={styles.mobileOnlySx}
              aria-label="open mobile navigation"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Link css={styles.logo} href="/">
              <Grid sx={styles.logoSx}>
                <Image src={logo} alt="logo" fill priority />
              </Grid>
              <Typography variant="h6" component="div">
                Millennial
                <Typography variant="subtitle2">
                  Realty & Investments
                </Typography>
              </Typography>
            </Link>
            <Grid css={styles.desktopNavItems} sx={styles.desktopOnlySx}>
              {menuItems.desktop}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Grid component="nav">
        <Drawer
          css={styles.drawer}
          sx={styles.mobileOnlySx}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Millennial
            </Typography>
            <Divider />
            <List>{menuItems.mobile}</List>
          </Box>
        </Drawer>
      </Grid>
    </>
  );
}

// Reminder: proptypes & defaultprops
