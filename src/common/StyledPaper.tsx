import { Paper, styled } from "@mui/material";

export const StyledBoxPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  border: `1px solid ${theme.palette.primary.main}`,
}));
