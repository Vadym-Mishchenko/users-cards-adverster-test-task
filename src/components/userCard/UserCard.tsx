import {
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  Link,
  Divider,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Language as LanguageIcon,
  Business as BusinessIcon,
  Room as RoomIcon,
} from '@mui/icons-material';
import type { User } from '../../types';
import { CellContainer, Row, UserCardStyled } from './UserCard.styled';
import { UserMap } from '../map';

interface UserCardProps {
  user: User;
  index: number;
}

export const UserCard = ({ user, index }: UserCardProps) => {
  const { name, email, phone, website, company, address, username } = user;

  const getInitials = (fullName: string) => {
    const titles = ['mr', 'mrs', 'ms', 'dr', 'miss', 'prof', 'sir'];

    const words = fullName
      .trim()
      .split(/\s+/)
      .filter((word) => {
        const cleaned = word.toLowerCase().replace(/\./g, '');
        return !titles.includes(cleaned);
      });

    return words
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('');
  };

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="small" color="action" />,
      value: email,
      isLink: false,
    },
    {
      icon: <PhoneIcon fontSize="small" color="action" />,
      value: phone,
      isLink: false,
    },
    {
      icon: <LanguageIcon fontSize="small" color="action" />,
      value: website,
      isLink: true,
    },
  ];

  return (
    <UserCardStyled
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ width: 56, height: 56 }}>{getInitials(name)}</Avatar>
        }
        title={<Typography variant="h6">{name}</Typography>}
        subheader={`@${username}`}
      />
      <Divider />
      <CardContent sx={{ minHeight: '304px', overflowY: 'auto' }}>
        {contactInfo.map(({ icon, value, isLink }, index) => (
          <Row key={index}>
            {icon}
            <Typography variant="body2">
              {isLink ? (
                value ? (
                  <Link
                    href={`https://${value}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                  >
                    {value}
                  </Link>
                ) : (
                  'No website available'
                )
              ) : (
                value
              )}
            </Typography>
          </Row>
        ))}
        <Divider />
        <Row>
          <BusinessIcon fontSize="small" color="action" />
          <CellContainer>
            <Typography textAlign="start" variant="body2">
              company name: {company.name}
            </Typography>
            <Typography textAlign="start" variant="body2" fontStyle="italic">
              catch phrase: “{company.catchPhrase}”
            </Typography>
            <Typography textAlign="start" variant="body2">
              bs: {company.bs}
            </Typography>
          </CellContainer>
        </Row>
        <Divider />
        <Row>
          <RoomIcon fontSize="small" color="action" />
          <CellContainer>
            <Typography textAlign="start" variant="body2">
              address: {address.city}
            </Typography>
            <Typography textAlign="start" variant="body2">
              street: {address.street}
            </Typography>
            <Typography textAlign="start" variant="body2">
              suite: {address.suite}
            </Typography>
            <Typography textAlign="start" variant="body2">
              zipcode: {address.zipcode}
            </Typography>
          </CellContainer>
        </Row>
      </CardContent>

      <UserMap
        lat={parseFloat(address.geo.lat)}
        lng={parseFloat(address.geo.lng)}
      />
    </UserCardStyled>
  );
};
