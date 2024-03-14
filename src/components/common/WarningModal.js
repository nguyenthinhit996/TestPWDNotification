import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const WarningModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Warning</DialogTitle>
      <DialogContent>
        <p>
          This web demo requires iOS 16.5 or later for pushing notifications.
          Please run a software update or continue wihout notification.
        </p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: "#fff",
            backgroundColor: "#F4721E",
            "&:hover": {
              backgroundColor: "#BF5816",
              cursor: "pointer",
            },
          }}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WarningModal;
