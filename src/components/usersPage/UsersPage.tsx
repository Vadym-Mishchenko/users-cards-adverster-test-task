import { useMemo, useState } from 'react';
import { useUsers } from '../../hooks';
import { CircularProgress, Typography } from '@mui/material';
import { UserCard } from '../userCard/UserCard';
import { UserFilter } from '../userFilter';
import type { UserFilterableFields } from '../../types';
import { UsersPageContainer, UserCardContainer } from './UsersPage.styled';

export const UsersPage = () => {
  const { users, loading, error } = useUsers();

  const [filterValue, setFilterValue] = useState('');
  const [filterBy, setFilterBy] = useState<UserFilterableFields>('name');

  const handleFilterChange = (value: string) => setFilterValue(value);

  const handleFilterTypeChange = (type: UserFilterableFields) =>
    setFilterBy(type);

  const getNestedValue = (obj: Record<string, any>, path: string): string => {
    return (
      path
        .split('.')
        .reduce((acc, key) => acc && acc[key], obj)
        ?.toString()
        .toLowerCase() || ''
    );
  };

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      getNestedValue(user, filterBy).includes(filterValue.toLowerCase()),
    );
  }, [users, filterBy, filterValue]);

  if (loading) return <CircularProgress sx={{ margin: 'auto' }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <UsersPageContainer>
      <UserFilter
        filterValue={filterValue}
        filterBy={filterBy}
        onFilterChange={handleFilterChange}
        onFilterTypeChange={handleFilterTypeChange}
      />

      <Typography variant="body1" mb="20px">
        {` Showing ${filteredUsers.length} ${filteredUsers.length > 1 ? 'users' : 'user'} out of ${users.length}`}
      </Typography>

      <UserCardContainer>
        {filteredUsers.map((user, index) => (
          <UserCard key={user.id} user={user} index={index} />
        ))}
      </UserCardContainer>
    </UsersPageContainer>
  );
};
