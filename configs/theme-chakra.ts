import { createBreakpoints } from "@chakra-ui/theme-tools";

export const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const breakpoints = createBreakpoints({
  // xs: "425px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  // xxl: "1400px",
});
