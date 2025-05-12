import { useUsers } from '../../hooks';
import { CircularProgress, Typography } from '@mui/material';
import { UserCard } from '../userCard/UserCard';
import { UsersPageContainer, UserCardContainer } from './UsersPage.styled';

export const UsersPage = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <CircularProgress sx={{ margin: 'auto' }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <UsersPageContainer>
      <Typography variant="h4">Filter</Typography>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>

      <UserCardContainer>
        {users.map((user, index) => (
          <UserCard key={user.id} user={user} index={index} />
        ))}
      </UserCardContainer>
    </UsersPageContainer>
  );
};
