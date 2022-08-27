import { createTheme } from "@mui/material";

const defaultTheme = createTheme();

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  styleOverrides: {
    root: {
      paddingLeft: 12,
      paddingRight: 12,
      margin: "auto",
      [defaultTheme.breakpoints.up("sm")]: {
        paddingLeft: 16,
        paddingRight: 16,
      },
      [defaultTheme.breakpoints.up("md")]: {
        paddingLeft: 30,
        paddingRight: 30,
      },
    },
  },
};
