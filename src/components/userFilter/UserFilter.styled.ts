import styled from '@emotion/styled';
import { Box, FormControl, TextField } from '@mui/material';

export const UserFilterContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  padding: 20px 0 40px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormControlStyled = styled(FormControl)`
  min-width: 300px;
  max-width: 400px;

  @media (max-width: 400px) {
    min-width: 300px;
    max-width: 312px;
  }
`;

export const TextFieldStyled = styled(TextField)`
  min-width: 300px;
  max-width: 400px;

  @media (max-width: 400px) {
    min-width: 300px;
    max-width: 312px;
  }
`;
