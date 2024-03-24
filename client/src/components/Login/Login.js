import { VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Container, Box, InputGroup } from "@chakra-ui/react";
import { InputRightElement, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const toast = useToast();

  const submitHandler = async () => {
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

      navigate("/chats");
    } catch (error) {
      toast({
        title: "Error Occurred",
        description: error,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

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
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Name"
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
