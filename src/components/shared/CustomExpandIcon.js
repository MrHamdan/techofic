import { Box } from '@mui/material';
import React from 'react'
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function CustomExpandIcon() {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">
        <RemoveIcon sx={{ color: "white" }} />
      </div>
      <div className="collapsIconWrapper">
        <AddIcon sx={{ color: "white" }} />
      </div>
    </Box>
  );
}

export default CustomExpandIcon;
