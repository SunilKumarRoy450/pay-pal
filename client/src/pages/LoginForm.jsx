import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [signupFormValue, setSignupFormValue] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
  const [loginFormValue, setLoginFormValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Signup/Register
  const handleRegisterOnChangeValue = (e) => {
    const { value, name } = e.target;
    setSignupFormValue({ ...signupFormValue, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: signupFormValue.username,
      email: signupFormValue.email,
      password: signupFormValue.password,
      image: signupFormValue.image,
    };
    await axios.post(
      "https://muddy-cyan-sneakers.cyclic.app/users/register",
      payload
    );
    setSignupFormValue({ username: "", email: "", password: "", image: "" });
    navigate("/home");
  };

  //Login
  const handleLoginFormOnChangeValue = (e) => {
    const { value, name } = e.target;
    setLoginFormValue({ ...loginFormValue, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: loginFormValue.email,
      password: loginFormValue.password,
    };
    await axios.post(
      "https://muddy-cyan-sneakers.cyclic.app/users/login",
      payload
    );
    setLoginFormValue({
      email: "",
      password: "",
    });
    onClose();
    navigate("/home");
  };

  return (
    <Box w={"100%"}>
      <Box margin={"auto"} w={"40%"}>
        <FormControl margin={"2rem"} isRequired>
          <Heading>Register</Heading>
          <FormLabel>Username</FormLabel>
          <Input
            onChange={handleRegisterOnChangeValue}
            value={signupFormValue.username}
            name="username"
            placeholder="username.."
          />
          <FormLabel>Email</FormLabel>
          <Input
            onChange={handleRegisterOnChangeValue}
            value={signupFormValue.email}
            name="email"
            placeholder="email..."
          />
          <FormLabel>Password</FormLabel>
          <Input
            onChange={handleRegisterOnChangeValue}
            value={signupFormValue.password}
            name="password"
            placeholder="password..."
          />
          <FormLabel>Image Url</FormLabel>
          <Input
            onChange={handleRegisterOnChangeValue}
            value={signupFormValue.image}
            name="image"
            placeholder="image..."
          />

          <ButtonGroup>
            <Button onClick={handleRegisterSubmit} mt={4}>
              Signup
            </Button>
            <Button mt={4} onClick={onOpen}>
              Login
            </Button>
          </ButtonGroup>
        </FormControl>
        <Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <FormLabel>Email</FormLabel>
                <Input
                  onChange={handleLoginFormOnChangeValue}
                  value={loginFormValue.email}
                  name="email"
                  placeholder="email..."
                />
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleLoginFormOnChangeValue}
                  value={loginFormValue.password}
                  name="password"
                  placeholder="password..."
                />
              </ModalBody>

              <ModalFooter>
                <Button onClick={handleLoginSubmit} variant="outline">
                  Login
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
