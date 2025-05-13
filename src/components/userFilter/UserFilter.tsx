import { InputLabel, MenuItem, Select } from '@mui/material';
import {
  FormControlStyled,
  TextFieldStyled,
  UserFilterContainer,
} from './UserFilter.styled';
import type { UserFilterableFields } from '../../types';

interface IProps {
  filterValue: string;
  filterBy: UserFilterableFields;
  onFilterChange: (value: string) => void;
  onFilterTypeChange: (type: UserFilterableFields) => void;
}

export const UserFilter = ({
  filterValue,
  filterBy,
  onFilterChange,
  onFilterTypeChange,
}: IProps) => {
  return (
    <UserFilterContainer>
      <FormControlStyled variant="outlined">
        <InputLabel>Filter By</InputLabel>
        <Select
          value={filterBy}
          onChange={(e) => onFilterTypeChange(e.target.value)}
          label="Filter By"
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="username">Username</MenuItem>
          <MenuItem value="email">Email</MenuItem>
          <MenuItem value="address.suite">Suite</MenuItem>
          <MenuItem value="address.city">City</MenuItem>
          <MenuItem value="address.zipcode">Zip code</MenuItem>
          <MenuItem value="phone">Phone</MenuItem>
          <MenuItem value="website">Website</MenuItem>
          <MenuItem value="company.name">Company name</MenuItem>
          <MenuItem value="company.catchPhrase">Catch phrase</MenuItem>
          <MenuItem value="company.bs">bs</MenuItem>
        </Select>
      </FormControlStyled>
      <TextFieldStyled
        label={`Filter by ${filterBy}`}
        variant="outlined"
        value={filterValue}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </UserFilterContainer>
  );
};
