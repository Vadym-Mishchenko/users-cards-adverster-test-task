import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Box, Card } from '@mui/material';

export const UserCardStyled = styled(motion(Card))`
  width: 360px;
  max-width: 360px;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  box-shadow: 0 4px 90px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover {
    transform: scale(105%);
  }

  @media (max-width: 420px) {
    width: 100%;
    max-width: 280px;
  }
`;

export const Row = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 0;
`;

export const CellContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
