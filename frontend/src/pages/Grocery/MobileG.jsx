import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  Spinner,
  Center,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { site } from "../../components/backend";
import { Link } from "react-router-dom";
import { FaRegDotCircle } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";
import { BsSliders } from "react-icons/bs";

const getData = async ({ brand, price }) => {
  const res = await axios.get(
    `${site}/products/grocery?brand=${brand}&price=${price}`
  );
  console.log(res.data);
  return res.data;
};

const MobileG = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const btnRef = React.useRef();
  useEffect(() => {
    handleTheFetch();
  }, [brand, price]);

  const handleTheFetch = async () => {
    setLoading(true);
    const append = await getData({ brand, price }).then((res) => setData(res));
    setLoading(false);
  };
  return (
    <Box>
      {/* Filter  */}
      <Flex
        gap={3}
        onClick={onOpen}
        justifyContent={"center"}
        borderBottom={"1px solid"}
        borderColor={"gray.300"}
      >
        <Icon mt={4} as={BsSliders} />
        <Text fontWeight={400} pt={3} fontSize={"18px"}>
          Filter
        </Text>
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Flex justifyContent={"space-around"}>
                {/* Price  */}
                <Box
                  borderBottom={"1px"}
                  borderColor={"gray.300"}
                  pt={2}
                  pb={2}
                >
                  <Text
                    fontSize={"14px"}
                    textAlign={"left"}
                    pl={1}
                    color={"black"}
                    fontWeight={500}
                  >
                    Price
                  </Text>
                  <Text
                    color={"black"}
                    fontWeight={500}
                    fontSize={"11px"}
                    letterSpacing={1}
                    m={1}
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    textAlign={"left"}
                    onClick={() => setPrice("")}
                  >
                    All price range
                  </Text>
                  <Text
                    color={"black"}
                    fontWeight={500}
                    fontSize={"11px"}
                    letterSpacing={1}
                    m={1}
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    textAlign={"left"}
                    onClick={() => setPrice("0-100")}
                  >
                    ₹0 - ₹100
                  </Text>
                  <Text
                    color={"black"}
                    fontWeight={500}
                    fontSize={"11px"}
                    letterSpacing={1}
                    m={1}
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    textAlign={"left"}
                    onClick={() => setPrice("100-200")}
                  >
                    ₹1OO - ₹2OO
                  </Text>
                  <Text
                    color={"black"}
                    fontWeight={500}
                    fontSize={"11px"}
                    letterSpacing={1}
                    m={1}
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    onClick={() => setPrice("200-400")}
                    textAlign={"left"}
                  >
                    ₹2OO - ₹4OO
                  </Text>
                  <Text
                    color={"black"}
                    fontWeight={500}
                    fontSize={"11px"}
                    letterSpacing={1}
                    m={1}
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    onClick={() => setPrice("400-600")}
                    textAlign={"left"}
                  >
                    ₹4OO - ₹6OO
                  </Text>
                </Box>
                {/* Brand  */}
                <Box
                  borderBottom={"1px"}
                  borderColor={"gray.300"}
                  pt={2}
                  pb={2}
                >
                  <Text
                    fontSize={"14px"}
                    textAlign={"left"}
                    pl={1}
                    color={"black"}
                    fontWeight={500}
                  >
                    Category
                  </Text>
                  {/* Option  */}
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    ml={1}
                    gap={1}
                  >
                    <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
                    <Text
                      fontWeight={500}
                      fontSize={"11px"}
                      letterSpacing={1}
                      m={1}
                      textAlign={"left"}
                      onClick={() => setBrand("")}
                    >
                      All Category
                    </Text>
                  </Flex>
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    ml={1}
                    gap={1}
                  >
                    <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
                    <Text
                      fontWeight={500}
                      fontSize={"11px"}
                      letterSpacing={1}
                      m={1}
                      textAlign={"left"}
                      onClick={() => setBrand("Washing Bars")}
                    >
                      Washing Bars
                    </Text>
                  </Flex>
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    ml={1}
                    gap={1}
                  >
                    <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
                    <Text
                      fontWeight={500}
                      fontSize={"11px"}
                      letterSpacing={1}
                      m={1}
                      textAlign={"left"}
                      onClick={() => setBrand("Detergents")}
                    >
                      Detergents
                    </Text>
                  </Flex>
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    ml={1}
                    gap={1}
                  >
                    <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
                    <Text
                      fontWeight={500}
                      fontSize={"11px"}
                      letterSpacing={1}
                      m={1}
                      textAlign={"left"}
                      onClick={() => setBrand("Pakage food")}
                    >
                      Pakage Food
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      {loading && (
        <Box>
          <Spinner
            mt={10}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text fontWeight={500} color={"rgb(107,70,193)"} mt={10}>
            Loading...
          </Text>
        </Box>
      )}
      {data &&
        data.map((post, i) => (
          <Link key={i} to={`/singlepage/${post._id}`}>
            <Flex
              gap={5}
              pt={5}
              pb={5}
              borderBottom={"1px"}
              borderColor={"gray.300"}
              ml={3}
            >
              {/* Image  */}
              <Box mt={2} width={"30%"}>
                <Center>
                  <Image width={"100px"} src={post.img[0]} />
                </Center>
              </Box>
              {/* Desc  */}
              <Box width={"70%"}>
                <Text
                  textAlign={"left"}
                  noOfLines={1}
                  fontWeight={500}
                  fontSize={"14px"}
                >
                  {post.title}
                </Text>
                {/* Rating & strike */}
                <Flex mt={1} mb={1}>
                  {/* Box 1 */}
                  <Flex
                    pl={"3px"}
                    pr={"3px"}
                    borderRadius={3}
                    bgColor={"green"}
                    gap={1}
                    pb={-2}
                  >
                    <Text fontSize={"10px"} fontWeight={500} color={"white"}>
                      {post.rating}
                    </Text>
                    <Icon
                      as={GoStar}
                      w={"10px"}
                      h={"10px"}
                      mt={"2px"}
                      color="white"
                    />
                  </Flex>
                </Flex>
                {/* price */}
                <Flex gap={2}>
                  <Text fontWeight={500} fontSize={"14px"}>
                    <strike>{post.strik}</strike>
                  </Text>
                  <Text fontWeight={500} fontSize={"14px"}>
                    {post.price}
                  </Text>
                  <Text fontWeight={500} color={"green"} fontSize={"14px"}>
                    {post.off}
                  </Text>
                </Flex>
                {/* delivery */}
                <Text textAlign={"left"} fontWeight={400} fontSize={"12px"}>
                  Free delivery
                </Text>
                <Text textAlign={"left"} fontWeight={400} fontSize={"12px"}>
                  Upto 10,000 Off on Exchange
                </Text>
                <Text
                  mt={1}
                  mb={1}
                  fontWeight={500}
                  color={"green"}
                  textAlign={"left"}
                  fontSize={"13px"}
                >
                  Bank Offer
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      <Box></Box>
    </Box>
  );
};

export default MobileG;
