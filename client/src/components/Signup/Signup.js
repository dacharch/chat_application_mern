import { VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Container, Box, InputGroup } from "@chakra-ui/react";
import { InputRightElement, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function () {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const showPassword = () => {
    setShow(!show);
  };
  const postDetails = () => {};
  const submitHandler = () => {};

  return (
    <Container className="xl" centerContent>
      <Box
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <h1>Signup</h1>
        <VStack spacing="5px">
          <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="4.5rem" onClick={showPassword}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
              type="file"
              p={1.5}
              accept="image/*"
              onChange={(e) => postDetails(e.target.files[0])}
            />
          </FormControl>

          <div className="signup_link">
            <div>Already have an account ?</div>
            <div>
              <Link className="link" to="/">
                Login
              </Link>
            </div>
          </div>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
