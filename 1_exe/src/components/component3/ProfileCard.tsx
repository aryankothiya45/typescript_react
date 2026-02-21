import Avatar from './Avatar';
import UserInfo from './UserInfo';
import Stats from './Stats';
import { User } from './type';
import { JSX } from 'react/jsx-runtime';


type ProfileCardProps = {
  user: User;
};

const ProfileCard = ({ user }: ProfileCardProps): JSX.Element => {
  return(
    <>
      <div>
        <Avatar IMAGEURL={user.IMAGEURL} ALT="User Avatar" WIDTH={150} />
        <UserInfo NAME={user.NAME} EMAIL={user.EMAIL} />
        <Stats FOLLOWERS={user.FOLLOWERS} FOLLOWING={user.FOLLOWING} POSTS={user.POSTS} />
      </div>
    </>
  );
}

export default ProfileCard;