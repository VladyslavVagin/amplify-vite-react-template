import { Authenticator, useAuthenticator, useTheme, View, Heading, Text, Button } from '@aws-amplify/ui-react';
import { FC, ReactNode } from 'react';
import logoImage from "/logo-metal.png";

interface CustomAuthenticatorProps {
  children: ReactNode;
}

const CustomAuthenticator: FC<CustomAuthenticatorProps> = ({ children }) => {
  const { tokens } = useTheme();

  // Custom components for the Authenticator
  const components = {
    Header() {
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              <img src={logoImage} alt="Zuschnittprofi Logo" className="w-16 h-16" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Zuschnittprofi</h1>
              <p className="text-sm text-base-content/70">Metal Plate Configurator</p>
            </div>
          </div>
        </View>
      );
    },

    Footer() {
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <Text color={tokens.colors.neutral[80]} className="text-sm">
            © 2024 Zuschnittprofi. All Rights Reserved
          </Text>
        </View>
      );
    },

    SignIn: {
      Header() {
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
            className="text-primary font-bold"
          >
            Welcome Back
          </Heading>
        );
      },
      Footer() {
        const { toForgotPassword } = useAuthenticator();

        return (
          <View textAlign="center" className="mt-4">
            <Button
              fontWeight="normal"
              onClick={toForgotPassword}
              size="small"
              variation="link"
              className="text-secondary hover:text-secondary-focus"
            >
              Forgot your password?
            </Button>
          </View>
        );
      },
    },

    SignUp: {
      Header() {
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
            className="text-primary font-bold"
          >
            Create Your Account
          </Heading>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();

        return (
          <View textAlign="center" className="mt-4">
            <Text className="text-base-content/70 mb-2">Already have an account?</Text>
            <Button
              fontWeight="normal"
              onClick={toSignIn}
              size="small"
              variation="link"
              className="text-secondary hover:text-secondary-focus"
            >
              Sign in here
            </Button>
          </View>
        );
      },
    },

    ConfirmSignUp: {
      Header() {
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
            className="text-primary font-bold"
          >
            Verify Your Email
          </Heading>
        );
      },
      Footer() {
        return (
          <View textAlign="center" className="mt-4">
            <Text className="text-sm text-base-content/70">
              Check your email for the verification code
            </Text>
          </View>
        );
      },
    },

    ForgotPassword: {
      Header() {
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
            className="text-primary font-bold"
          >
            Reset Your Password
          </Heading>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();

        return (
          <View textAlign="center" className="mt-4">
            <Button
              fontWeight="normal"
              onClick={toSignIn}
              size="small"
              variation="link"
              className="text-secondary hover:text-secondary-focus"
            >
              Back to Sign In
            </Button>
          </View>
        );
      },
    },

    ConfirmResetPassword: {
      Header() {
        return (
          <Heading
            padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
            level={3}
            className="text-primary font-bold"
          >
            Enter New Password
          </Heading>
        );
      },
      Footer() {
        return (
          <View textAlign="center" className="mt-4">
            <Text className="text-sm text-base-content/70">
              Enter the code from your email and your new password
            </Text>
          </View>
        );
      },
    },
  };

  // Custom form fields configuration
  const formFields = {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-25 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Authenticator 
          formFields={formFields} 
          components={components}
          className="custom-authenticator"
          initialState="signIn"
        >
          {() => (
            <div className="min-h-screen flex flex-col">
              {children}
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  );
};

export default CustomAuthenticator; 