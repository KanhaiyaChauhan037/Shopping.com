import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Icon,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useToast,
  Center,
  Collapse,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { RiHandHeartLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { ImSearch } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/auth.action";
import { site } from "./backend";
import axios from "axios";
import SearchBox from "./SearchBox";

const Sec = [
  {
    id: 1,
    txt: "Grocery",
    links: "/grocery",
    icon: GiWashingMachine,
  },
  {
    id: 2,
    txt: "Mobile",
    links: "/mobile",
    icon: FaMobileAlt,
  },
  {
    id: 3,
    txt: "Fashion",
    links: "/fashion",
    icon: GiClothes,
  },
  {
    id: 4,
    txt: "Electronics & Appliances",
    links: "/electronic",
    icon: FiMonitor,
  },
  {
    id: 5,
    txt: "Home",
    links: "/home",
    icon: RiHandHeartLine,
  },
];

const getData = async (text) => {
  const res = await axios.get(`${site}/products/title?search=${text}`);
  const data = res.data;
  return data;
};

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1080px)");
  const { isAuth, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  const handleTheLogout = () => {
    dispatch(logout());
    console.log("logout");
  };

  const GoToCart = () => {
    if (isAuth) {
      return navigate("/cart");
    } else {
       return toast({
        title: "Required Login",
        position: "top",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    }
    console.log("cart");
  };

  const handleTheAdmin = () => {
    console.log("welcome admin");
  };

  const handleTheEmpty = () => {
    setData([]);
  };

  const handleTheSearch = (e) => {
    setText(e.target.value);
    getData(text)
      .then((res) => setData(res))
      .catch((e) => console.log(e));
  };

  const handleTheKeyPress = (e) => {
    if (e.key == "Enter") {
      console.log("enter pressed");
    }
  };
  console.log(data);

  const handleClick = () => {};
  return (
    <Box>
      {isLargerThan1280 ? (
        //   Laptop
        <Box
          zIndex={3}
          bgColor={"purple.600"}
          position={"fixed"}
          width={"100%"}
          background={`url(https://i.postimg.cc/HxVWNcHZ/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain.jpg)center/cover no-repeat`}
        >
          <Flex p={1} justifyContent={"space-between"} mr={10} ml={10}>
            {/* Box 1 */}
            <Flex gap={100}>
              <Box pl={"20px"}>
                <Link to={"/"}>
                  <Image
                    width={{ base: "50px", md: "80px", lg: "80px" }}
                    src="https://i.postimg.cc/90Zh1SDT/Axen.png"
                  />
                </Link>
              </Box>

              <Box ml={5}>
                <InputGroup
                  mt={1}
                  size="xs"
                  bgColor={"white"}
                  borderRadius={"10px"}
                >
                  <Input
                    value={text}
                    w={"420px"}
                    placeholder="Search Product"
                    onChange={handleTheSearch}
                    onKeyPress={(e) => handleTheKeyPress(e)}
                  />
                  <InputRightElement>
                    <Button
                      bg={"none"}
                      size="sm"
                      _hover={{}}
                      onClick={handleClick}
                    >
                      {data.length == 0 && <Icon as={FcSearch} w={4} h={4} />}
                      {data.length !== 0 && (
                        <Icon
                          onClick={handleTheEmpty}
                          as={RxCross2}
                          w={4}
                          h={4}
                        />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {/* Search Box  */}
                {data == "No Products found" && (
                  <Box
                    border={"1px solid"}
                    borderColor={"gray.300"}
                    overflowX={"hidden"}
                    maxH={"390px"}
                    position={"absolute"}
                    bgColor={"white"}
                    w={"420px"}
                    borderBottomRadius={10}
                  >
                    <Flex flexDirection={"column"} alignItems={"center"}>
                      <Image
                        w={250}
                        src="https://i.postimg.cc/P55nPzSH/no-result.gif"
                      />
                      <Text fontWeight={500} fontSize={"18px"} mb={5}>
                        No products found
                      </Text>
                    </Flex>
                  </Box>
                )}
                {data !== "No Products found" && (
                  <Box
                    borderBottomRadius={10}
                    overflow={"scroll"}
                    overflowX={"hidden"}
                    border={"1px solid"}
                    borderColor={"gray.300"}
                    maxH={"390px"}
                    position={"absolute"}
                    bgColor={"white"}
                    w={"420px"}
                  >
                    {data.map((post, i) => (
                      <SearchBox data={post} i={i} key={i} />
                    ))}
                  </Box>
                )}
              </Box>
            </Flex>
            {/* Box 3  */}
            <Box>
              <Flex gap={"10px"} pr={"20px"}>
                <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                  <Link to={"/login"}>
                    {!isAuth && <Text fontSize={"13px"}>Login</Text>}
                  </Link>
                  {isAuth && (
                    <Text onClick={handleTheLogout} fontSize={"13px"}>
                      Logout
                    </Text>
                  )}
                </Button>
                <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                  <Link to={"/admin"}>
                    {role == "Admin" && (
                      <Text onClick={handleTheAdmin} fontSize={"13px"}>
                        Admin
                      </Text>
                    )}
                  </Link>
                  {role == "User" && <Text fontSize={"13px"}>User</Text>}
                  <Link to={"/signin"}>
                    {!role && <Text fontSize={"13px"}>Sign-In</Text>}
                  </Link>
                </Button>
                <Button
                  onClick={GoToCart}
                  size={"sm"}
                  bg={"none"}
                  _hover={{}}
                  color={"white"}
                >
                  <Icon as={HiShoppingCart} />
                  <Text fontSize={"13px"}>Cart </Text>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        //   Mobile
        <Box
        background={`url(https://i.postimg.cc/HxVWNcHZ/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain.jpg)center/cover no-repeat`}
          zIndex={3}
          position={"fixed"}
          width={"100%"}
          bgColor={"purple.600"}
        >
          <Flex justifyContent={"space-between"}>
            {/* box 1  */}
            <Flex>
              <Box mt={"7px"} ml={"7px"} mr={"3px"}>
                <Icon
                  onClick={onOpen}
                  as={BsList}
                  color={"white"}
                  w={6}
                  h={6}
                />
              </Box>
              <Link to={"/"}>
                <Box>
                  <Image
                    mt={1}
                    width={"80px"}
                    src="https://i.postimg.cc/90Zh1SDT/Axen.png"
                  />
                </Box>
              </Link>
            </Flex>
            {/* Box 2 */}
            <Flex>
              <Button _hover={{}} bg={"none"}>
                <Icon
                  onClick={() => setShow(!show)}
                  as={ImSearch}
                  color={"white"}
                />
              </Button>
              <Link to={"/login"}>
                <Button size={"md"} bg={"none"} _hover={{}} color={"white"}>
                  <Link to={"/login"}>
                    {!isAuth && <Text fontSize={"13px"}>Login</Text>}
                  </Link>
                  {isAuth && (
                    <Text onClick={handleTheLogout} fontSize={"13px"}>
                      Logout
                    </Text>
                  )}
                </Button>
              </Link>
              {/* Admin  */}
              <Button
                mt={1}
                size={"sm"}
                bg={"none"}
                _hover={{}}
                color={"white"}
              >
                <Link to={"/admin"}>
                  {role == "Admin" && (
                    <Text onClick={handleTheAdmin} fontSize={"13px"}>
                      Admin
                    </Text>
                  )}
                </Link>
                {role == "User" && <Text fontSize={"13px"}>User</Text>}
                <Link to={"/signin"}>
                  {!role && <Text fontSize={"13px"}>Sign-In</Text>}
                </Link>
              </Button>
              {/* Drawer  */}
                <Button
                  size={"md"}
                  onClick={GoToCart}
                  bg={"none"}
                  mt={"2px"}
                  _hover={{}}
                  color={"white"}
                >
                  <Icon as={HiShoppingCart} w={6} h={6} />
                </Button>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  {/* <DrawerCloseButton border={"none"} /> */}
                  <DrawerHeader>
                    <Flex
                      gap={2}
                      borderBottom={"1px"}
                      borderColor={"gray.400"}
                      pb={2}
                    >
                      <Box>
                        <Image
                          borderRadius={100}
                          width={"70px"}
                          src="https://i.pinimg.com/564x/ae/b2/04/aeb20479fd71ec4cc1e7a43f889128ed.jpg"
                        />
                      </Box>
                      {/* User details  */}
                      <Flex m={1}>
                        <Box>
                          <Box>Hey</Box>
                          <Box>
                            <Text>{name ? name : ""}</Text>
                          </Box>
                        </Box>
                        <Box>
                          <Image
                            mt={"-15px"}
                            width={"100px"}
                            src="https://i.postimg.cc/FsBp8Ffv/garfield-hello.gif"
                          />
                        </Box>
                      </Flex>
                    </Flex>
                  </DrawerHeader>

                  <DrawerBody>
                    {/* Body  */}
                    <Flex
                      flexDirection={"column"}
                      gap={8}
                      borderBottom={"2px"}
                      pb={10}
                      borderColor={"gray.300"}
                    >
                      {Sec.map((post) => (
                        <Link to={post.links} key={post.id}>
                          <Flex flexDirection={"row"} gap={6}>
                            <Icon as={post.icon} w={6} h={6} />
                            <Text fontSize={"18px"}>{post.txt}</Text>
                          </Flex>
                        </Link>
                      ))}
                    </Flex>
                    <Flex mt={5} alignItems={"end"}>
                      <Link to={"/signin"}>
                        <Button
                          m={1}
                          size="md"
                          _hover={{}}
                          bgColor={"purple.600"}
                        >
                          <Text color={"white"} fontSize={"13px"}>
                            Sign-In
                          </Text>
                        </Button>
                      </Link>
                      <Link to="/login">
                        <Button
                          m={1}
                          size="md"
                          _hover={{}}
                          bgColor={"purple.600"}
                        >
                          <Link to={"/login"}>
                            {!isAuth && (
                              <Text color={"white"} fontSize={"13px"}>
                                Login
                              </Text>
                            )}
                          </Link>
                          {isAuth && (
                            <Text
                              color={"white"}
                              onClick={handleTheLogout}
                              fontSize={"13px"}
                            >
                              Logout
                            </Text>
                          )}
                        </Button>
                      </Link>

                        <Button
                          onClick={GoToCart}
                          m={1}
                          size="md"
                          _hover={{}}
                          bgColor={"purple.600"}
                        >
                          <Text color={"white"} fontSize={"13px"}>
                            Cart
                          </Text>
                        </Button>
                      <Button
                        m={1}
                        size="md"
                        _hover={{}}
                        bgColor={"purple.600"}
                        onClick={onClose}
                      >
                        <Icon color={"white"} as={ImCross} />
                      </Button>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          </Flex>
        </Box>
      )}
      <Collapse  in={show} animateOpacity>
        <Box
        ml={1}
        zIndex={4}
        position={"absolute"}
        mt={10}
          color="white"
          rounded="md"
          shadow="md"
        >
          <Box>
            <InputGroup
              mt={1}
              size="md"
              bgColor={"white"}
              borderRadius={"10px"}
            >
              <Input
                value={text}
                w={"400px"}
                color={"black"}
                placeholder="Search Product"
                onChange={handleTheSearch}
                onKeyPress={(e) => handleTheKeyPress(e)}
              />
              <InputRightElement>
                <Button bg={"none"} size="sm" _hover={{}} onClick={handleClick}>
                  {data.length == 0 && <Icon as={FcSearch} w={4} h={4} />}
                  {data.length !== 0 && (
                    <Icon onClick={handleTheEmpty} color={"black"} as={RxCross2} w={4} h={4} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
            {/* Search Box  */}
            {data == "No Products found" && (
              <Box
                border={"3px solid"}
                borderColor={"gray.300"}
                overflowX={"hidden"}
                maxH={"390px"}
                position={"absolute"}
                bgColor={"white"}
                w={"400px"}
                borderBottomRadius={10}
              >
                <Flex flexDirection={"column"} alignItems={"center"}>
                  <Image
                    w={250}
                    src="https://i.postimg.cc/P55nPzSH/no-result.gif"
                  />
                  <Text fontWeight={500} fontSize={"18px"} mb={5}>
                    No products found
                  </Text>
                </Flex>
              </Box>
            )}
            {data !== "No Products found" && (
              <Box
                borderBottomRadius={10}
                overflow={"scroll"}
                overflowX={"hidden"}
                border={"1px solid"}
                borderColor={"gray.300"}
                maxH={"390px"}
                position={"absolute"}
                bgColor={"white"}
                w={"400px"}
              >
                {data.map((post, i) => (
                  <SearchBox data={post} i={i} key={i} />
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
