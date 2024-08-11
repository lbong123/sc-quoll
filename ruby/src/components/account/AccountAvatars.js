import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

const accounts = [
    { name: 'Account 1', avatarUrl: 'https://example.com/avatar1.jpg' },
    { name: 'Account 2', avatarUrl: 'https://example.com/avatar2.jpg' },
    { name: 'Account 3', avatarUrl: 'https://example.com/avatar3.jpg' },
    // Add more accounts as needed
  ];
  
const AccountAvatars = () => {
return (
    <AvatarGroup max={4}>
    {accounts.map((account, index) => (
        <Avatar key={index} alt={account.name} src={account.avatarUrl} />
    ))}
    </AvatarGroup>
);
};

export default AccountAvatars;