import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';

export const UserCardStyled = styled(motion.create(Box))`
  width: 360px;
  max-width: 360px;
  border-radius: 20px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 90px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

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
