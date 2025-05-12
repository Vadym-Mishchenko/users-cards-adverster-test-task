import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const UsersPageContainer = styled(Box)``;

export const UserCardContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  justify-content: center;
  place-items: center;
  gap: 40px;
  width: 100%;
`;
