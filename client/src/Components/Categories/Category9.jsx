import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Category9 = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={3}></Paper>
      </Box>
    </div>
  );
};

export default Category9;
