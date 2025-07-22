import { useAuthenticator } from '@aws-amplify/ui-react';
import { FC } from 'react'

const UserInfo: FC = () => {
    const { user } = useAuthenticator();
  return (
    <h1 className='text-2xl font-bold'>Email: {user?.signInDetails?.loginId}</h1>
  )
}

export default UserInfo