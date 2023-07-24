import styled from "@emotion/styled";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
} from "@mui/material";
import React from "react";

const StyledInput = styled(FormControl)(({ theme }) => ({
  "& .MuiFormLabel-root": {
    fontSize: 14,
  },
}));

const Input = ({ id, size, label, variant, helperText, ...props }) => {
  return (
    <StyledInput>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <TextField id="outlined-basic" size={size} variant={variant} {...props} />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </StyledInput>
  );
};

export default Input;
