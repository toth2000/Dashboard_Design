import { signIn } from "next-auth/react";
import SocialSignInButton from "../components/SocialSignInButton";
import {
  Container,
  Heading,
  InputContainer,
  LoginContainer,
  RegisterTextContainer,
  SocialLoginContainer,
  Text,
  Title,
  WrapperLeft,
  WrapperRight,
} from "../styles/signin";

import google_icon from "../public/google-icon.svg";
import apple_icon from "../public/apple-icon.svg";
import Input from "../components/Input";
import Button from "../components/Button";

const SignIn = () => {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: `${window.location.origin}/dashboard` });
  };

  return (
    <Container>
      <WrapperLeft>
        <Heading>Board.</Heading>
      </WrapperLeft>
      <WrapperRight>
        <LoginContainer>
          <Title>Sign In</Title>
          <Text colour="#000">Sign in to your account</Text>
          <SocialLoginContainer>
            <SocialSignInButton
              handleClick={handleSignIn}
              image={google_icon}
              text={"Sign in with Google"}
            />
            <SocialSignInButton
              image={apple_icon}
              text={"Sign in with Apple"}
            />
          </SocialLoginContainer>
          <InputContainer>
            <Input
              title={"Email"}
              placeholder={"Enter your email..."}
              type={"email"}
            />
            <Input
              title={"Password"}
              placeholder={"Enter your password..."}
              type={"password"}
            />
            <Text colour="#346BD4" cursor="pointer">
              Forgot Password?
            </Text>
            <Button text={"Sign In"} />
          </InputContainer>
          <RegisterTextContainer>
            <Text colour="#858585">{"Don’t have an account?"}</Text>
            <Text colour="#346BD4" cursor="pointer">
              {"Register Here"}
            </Text>
          </RegisterTextContainer>
        </LoginContainer>
      </WrapperRight>
    </Container>
  );
};

export default SignIn;
