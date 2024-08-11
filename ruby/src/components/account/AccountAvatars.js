import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import FirebaseUserHookService from '../../hooks/FirebaseUserHookService';

const accounts = [
    { name: 'Account 1', avatarUrl: 'https://example.com/avatar1.jpg' },
    { name: 'Account 2', avatarUrl: 'https://example.com/avatar2.jpg' },
    { name: 'Account 3', avatarUrl: 'https://example.com/avatar3.jpg' },
    // Add more accounts as needed
  ];
  
const AccountAvatars = () => {
    const { getUserData } = FirebaseUserHookService();

    return (
        <AvatarGroup max={4}>
        {accounts.map((account, index) => (
            <Avatar key={index} alt={account.name} src={account.avatarUrl} onClick={getUserData}/>
        ))}
        </AvatarGroup>
    );
};

export default AccountAvatars;