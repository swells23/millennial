/** @jsxImportSource @emotion/react */
import {
  AppBar,
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
import { useRouter } from "next/router";
import React, { ReactElement, useState } from "react";
import { navItems } from "../../../data/templateMeta";
import logo from "../../../assets/logo.png";
import styles from "./GlobalNav.styles";

interface MenuItems {
  desktop: Array<ReactElement>;
  mobile: Array<ReactElement>;
}

export default function GlobalNav() {
  const [mobileOpen, setMobileOpen] = useState(false),
    handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    },
    getMenuItems = (): MenuItems => {
      const pathname = useRouter().asPath,
        desktopComponents: Array<ReactElement> = [],
        mobileComponents: Array<ReactElement> = [];

      navItems.forEach((item) => {
        const isActive = item.route === pathname;

        desktopComponents.push(
          <Link
            key={`navItem-${item.id}`}
            css={styles.navItem}
            href={item.route}
          >
            <Button
              sx={[
                styles.desktopNavItemButtonSx,
                isActive && styles.desktopNavItemActiveSx,
              ]}
              color="inherit"
            >
              {item.title}
            </Button>
          </Link>
        );
        mobileComponents.push(
          <Link
            key={`mobile-navItem-${item.id}`}
            css={styles.navItem}
            href={item.route}
          >
            <ListItem disablePadding>
              <ListItemButton css={styles.mobileNavItemButton}>
                <ListItemText
                  sx={isActive ? styles.mobileNavItemActiveSx : undefined}
                  primary={item.title}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        );
      });

      return { desktop: desktopComponents, mobile: mobileComponents };
    },
    menuItems: MenuItems = getMenuItems();

  return (
    <>
      <AppBar component="nav" color="secondary" position="sticky">
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
          <div onClick={handleDrawerToggle}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Millennial
            </Typography>
            <Divider />
            <List>{menuItems.mobile}</List>
          </div>
        </Drawer>
      </Grid>
    </>
  );
}
