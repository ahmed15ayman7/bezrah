"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { navItems } from "@/constants";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  navItems: NavItem[];
}

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* AppBar for Header */}
      <AppBar
        position="fixed"
        sx={{
          background: "linear-gradient(to right, #013820, #4ebc78)",
          color: "white",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Box display="flex" alignItems="center" flexGrow={1}>
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Image
                src="/images/WHITE_LOGO_PNG.png"
                alt="Green Roof Solutions Logo"
                className="p-1"
                width={40}
                height={44}
                style={{ objectFit: "contain" }}
              />
              {/* <Image
                src="/images/remin.png"
                alt="Green Roof Solutions Logo"
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              /> */}
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <Box
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    "&:hover": { color: "#ddd" },
                    transition: "color 0.3s",
                  }}
                >
                  {item.label}
                </Box>
              </Link>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Navigation */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            background: "linear-gradient(to right, #4ebc78, #4ebc78)",
            color: "white",
            height: "100%",
          }}
        >
          {/* Drawer Header */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
          >
            {/* <Link href="/" style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/logg.png"
                alt="Green Roof Solutions Logo"
                width={44}
                height={44}
                style={{ objectFit: "contain" }}
              />
            </Link> */}
            <IconButton color="inherit" onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Drawer Navigation Links */}
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item.href}
                component="li"
                onClick={toggleDrawer}
                sx={{
                  color: "white",
                  "&:hover": { color: "#ddd" },
                  textDecoration: "none",
                }}
              >
                <Link href={item.href} passHref>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: { color: "white", "&:hover": { color: "#ddd" } },
                    }}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
