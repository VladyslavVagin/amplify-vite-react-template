import { FC } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

const UserInfo: FC = () => {
    const { user } = useAuthenticator();
  return (
    <div className="text-center md:text-left">
      <h1 className='text-lg md:text-2xl font-bold break-words'>
        {user?.signInDetails?.loginId}
      </h1>
    </div>
  )
}

export default UserInfo