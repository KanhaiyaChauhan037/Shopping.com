import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import {useSelector,useDispatch} from "react-redux"
import { register } from "../../redux/auth/auth.action";
import {useNavigate} from "react-router-dom"

const initState = {
  username: "",
  email: "",
  password: "",
};

const SignIn = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [formstate, setFormstate] = useState(initState);
  const {isAuth,token} = useSelector((store)=>store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()
  // console.log(isAuth)

  const handleTheChange = (e) => {
    setFormstate({...formstate,[e.target.name] : e.target.value})
  };
  const handleTheSubmit = () => {
    // console.log("hi")
    // console.log(formstate)
    if(formstate.email && formstate.password && formstate.username)
    {
      dispatch(register(formstate))
      navigate("/login")
    }
    else{
      toast({
        title: 'Please Fill The Required Fields',
        position : "top" ,
        status: 'warning',
        duration: 2000,
        isClosable: true,
      })
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Register</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input onChange={handleTheChange} name="username" type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleTheChange} type="email" name="email" />
            </FormControl>
            {/* Password  */}
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  name="password"
                  onChange={handleTheChange}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <Button
                    _hover={{}}
                    bg={"none"}
                    size="sm"
                    onClick={handleClick}
                  >
                    {show ? (
                      <Icon color={"rgb(107,70,193)"} as={BsFillEyeSlashFill} />
                    ) : (
                      <Icon color={"rgb(107,70,193)"} as={BsFillEyeFill} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"rgb(107,70,193)"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"rgb(107,70,193)"}
                color={"white"}
                _hover={{
                  bg: "rgb(107,70,193)",
                }}
                onClick={handleTheSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
