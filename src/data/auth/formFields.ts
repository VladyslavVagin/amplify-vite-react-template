export const formFields = {
    signIn: {
      username: {
        placeholder: 'Enter your email address',
        label: 'Email Address',
        isRequired: true,
      },
      password: {
        placeholder: 'Enter your password',
        label: 'Password',
        isRequired: true,
      },
    },
    signUp: {
      email: {
        placeholder: 'Enter your email address',
        label: 'Email Address',
        isRequired: true,
        order: 1,
      },
      password: {
        placeholder: 'Create a strong password',
        label: 'Password',
        isRequired: true,
        order: 2,
      },
      confirm_password: {
        placeholder: 'Confirm your password',
        label: 'Confirm Password',
        isRequired: true,
        order: 3,
      },
    },
    forgotPassword: {
      username: {
        placeholder: 'Enter your email address',
        label: 'Email Address',
        isRequired: true,
      },
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: 'Enter verification code',
        label: 'Verification Code',
        isRequired: true,
      },
      password: {
        placeholder: 'Enter new password',
        label: 'New Password',
        isRequired: true,
      },
      confirm_password: {
        placeholder: 'Confirm new password',
        label: 'Confirm New Password',
        isRequired: true,
      },
    },
  };