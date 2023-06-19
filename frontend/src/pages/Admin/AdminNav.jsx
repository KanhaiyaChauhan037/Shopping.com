import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { FaUserLock } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import axios from "axios";
import { site } from "../../components/backend";
import PieChart from "../../components/PieChart";

const adminComp = [
  {
    icon: GiCardboardBoxClosed,
    txt: "All Products",
    link: "/admin/allproducts",
  },
  {
    icon: MdOutlineAddShoppingCart,
    txt: "Add Products",
    link: "/admin/addproducts",
  },
  {
    icon: CiDeliveryTruck,
    txt: "Orders",
    link: "/admin/orders",
  },
  {
    icon: BiUser,
    txt: "Users",
    link: "/admin/users",
  },
];

const AdminNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const Name = localStorage.getItem("name");

  return (
    <Flex
      justifyContent={"space-between"}
      pl={"20px"}
      pr={"20px"}
      boxShadow={"md"}
      pb={2}
      pt={2}
      mt={"10px"}
      mb={"2px"}
    >
      <Box onClick={onOpen}>
        <Icon style={{ cursor: "pointer" }} as={BsList} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          background={
            "url(https://cdn.vectorstock.com/i/preview-1x/45/27/abstract-gradient-background-blurred-purple-vector-21994527.jpg) center/cover no-repeat"
          }
        >
          <DrawerCloseButton color={"white"} />
          <DrawerHeader>
            <Box>
              {/* 1st box  */}
              <Box
                h={"529px"}
                p={2}
                height={""}
                // background={
                //   "url(https://cdn.vectorstock.com/i/preview-1x/45/27/abstract-gradient-background-blurred-purple-vector-21994527.jpg) center/cover no-repeat"
                // }
              >
                <Link to={`/admin`}>
                  <Flex
                    gap={3}
                    pl={2}
                    borderBottom={"1px solid"}
                    borderColor={"gray.100"}
                    pb={4}
                    pt={4}
                  >
                    <Icon
                      color={"white"}
                      w={6}
                      h={6}
                      mt={"1px"}
                      as={FaUserLock}
                    />
                    <Text
                      fontWeight={400}
                      textAlign={"center"}
                      fontSize={"18px"}
                      color={"white"}
                    >
                      ADMIN
                    </Text>
                  </Flex>
                </Link>
                <Flex
                  gap={3}
                  pl={1}
                  borderBottom={"1px solid"}
                  borderColor={"gray.100"}
                  pb={3}
                  pt={3}
                >
                  <Image
                    w={"40px"}
                    borderRadius={50}
                    src="https://i.pinimg.com/564x/ab/b9/7e/abb97e1aaacf4ce84378d0a0afe2284e.jpg"
                  />
                  <Text
                    mt={1}
                    fontWeight={400}
                    textAlign={"center"}
                    fontSize={"18px"}
                    color={"white"}
                  >
                    {Name}
                  </Text>
                </Flex>
                {/* Pages  */}
                <Flex p={5} gap={6} flexDirection={"column"}>
                  {adminComp.map((post, i) => (
                    <Link key={i} to={post.link}>
                      <Flex gap={2}>
                        <Icon
                          color={"white"}
                          w={5}
                          h={5}
                          mt={"2px"}
                          as={post.icon}
                        />
                        <Text
                          textAlign={"center"}
                          fontSize={"16px"}
                          fontWeight={400}
                          color={"white"}
                        >
                          {post.txt}
                        </Text>
                      </Flex>
                    </Link>
                  ))}
                </Flex>
              </Box>
            </Box>
          </DrawerHeader>

          <DrawerBody>{/* Body  */}</DrawerBody>
        </DrawerContent>
      </Drawer>
      <Link to={"/admin/allproducts"}>
        <Box>
          <Text fontSize={"14px"} _hover={{ color: "tomato" }} fontWeight={500}>
            All Products
          </Text>
        </Box>
      </Link>
      <Link to={"/admin/addproducts"}>
        <Box>
          <Text fontSize={"14px"} _hover={{ color: "tomato" }} fontWeight={500}>
            Add Product
          </Text>
        </Box>
      </Link>
      <Link to={"/admin/orders"}>
        <Box>
          <Text fontSize={"14px"} _hover={{ color: "tomato" }} fontWeight={500}>
            Orders
          </Text>
        </Box>
      </Link>
      <Link to={"/admin/users"}>
        <Box>
          <Text fontSize={"14px"} _hover={{ color: "tomato" }} fontWeight={500}>
            Users
          </Text>
        </Box>
      </Link>
    </Flex>
    // </Flex>
  );
};

export default AdminNav;
