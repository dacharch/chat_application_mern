import { VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Container, Box, InputGroup } from "@chakra-ui/react";
import { InputRightElement, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = () => {};
  const showPassword = () => {
    setShow(!show);
  };
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
        <h1>Login</h1>
        <VStack spacing="5px">
          <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
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

          <div className="signup_link">
            <div>Does not have any account ?</div>
            <div>
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </div>
          </div>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
