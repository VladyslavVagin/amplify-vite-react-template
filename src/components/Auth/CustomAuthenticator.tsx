import { FC, ReactNode } from 'react';
import { Authenticator, useAuthenticator, useTheme, View, Heading, Text, Button } from '@aws-amplify/ui-react';

import logoImage from "/logo-metal.png";
import { formFields } from '../../data/auth/formFields';

interface CustomAuthenticatorProps {
  children: ReactNode;
  initialState?: "signIn" | "signUp";
}

const CustomAuthenticator: FC<CustomAuthenticatorProps> = ({ children, initialState = "signIn" }) => {
  const { tokens } = useTheme();

  // Custom components for the Authenticator
  const components = {
    Header() {
      return (
        <View textAlign="center" padding={tokens.space.large}>
          <div className="flex flex-col items-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              <img src={logoImage} alt="Metal Plate Configurator Logo" className="w-16 h-16" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Vladyslav V.</h1>
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
            © {new Date().getFullYear()} Vladyslav V. All Rights Reserved
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
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-25 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Authenticator 
          formFields={formFields} 
          components={components}
          className="custom-authenticator"
          initialState={initialState}
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