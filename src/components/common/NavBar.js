"use client";
import { useMemo, useState } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import BasicTabs from "@/components/common/BasicTabs";
import { ModalContext } from "@/context/ModalContext";
import { useContext } from "react";
import Link from "next/link";

const NavBar = () => {
  // const [open, setOpen] = useState(false);
  const { open, setOpen, notifications } = useContext(ModalContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const id = useMemo(() => (open ? "simple-popover" : undefined), [open]);

  const unreadMessageCount = notifications?.filter((msg) => !msg.isRead).length;

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      container
      direction="row"
      sx={{
        backgroundColor: "#CEDBE5",
        height: "100px",
        flexWrap: "nowrap",
        justifyContent: "space-between",
        pl: "2rem",
        pr: "2rem",
        alignItems: "center",
        height: "5rem",
      }}
    >
      <Grid item id="home-icon">
        <Link href="/">
          <Avatar
            sx={{
              bgcolor: "inherit",
              objectFit: "cover",
              width: "7rem",
              height: "fit-content",
            }}
            variant="square"
            src="/assets/img/tma-logo.png"
          />
        </Link>
      </Grid>
      <Grid
        container
        item
        id="alert-avatar"
        sx={{
          justifyContent: "space-between",
          width: "150px",
          justifyContent: "center",
          alignItems: "center",
          mr: { xs: "-2rem", md: 0 },
        }}
      >
        <Grid item id="bell-icon">
          <IconButton
            onClick={handleOpen}
            anchorEl={anchorEl}
            sx={{ pl: 0, pb: 0 }}
          >
            <Badge color="error" badgeContent={unreadMessageCount}>
              <Avatar alt="Remy Sharp" src="/assets/img/bell64x64.png" />
            </Badge>
          </IconButton>

          <BasicTabs
            id={id}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            notifications={notifications}
          />
        </Grid>
        <Grid item id="avatar">
          {/* chip component override .MuiChip-label.MuiChip-labelMedium padding-left: 0*/}
          <Avatar alt="Avatar" src="/assets/img/avatar.jpg" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
