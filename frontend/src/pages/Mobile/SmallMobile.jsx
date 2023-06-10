import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  Spinner,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import { BsSliders } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { site } from "../../components/backend";
import { Link } from "react-router-dom";
import { FaRegDotCircle } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";

const getData = async ({ brand, price }) => {
  const res = await axios.get(
    `${site}/products/mobile?brand=${brand}&price=${price}`
  );
  console.log(res.data);
  return res.data;
};

const SmallMobile = () => {
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
  console.log(brand);
  console.log(price);
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
                <Flex
                flexDirection={"column"}
                gap={1}
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
                    onClick={() => setPrice("")}
                    textAlign={"left"}
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
                    onClick={() => setPrice("0-20000")}
                    textAlign={"left"}
                  >
                    Under ₹20,OOO
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
                    onClick={() => setPrice("20000-40000")}
                  >
                    ₹20,OOO - ₹40,OOO
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
                    onClick={() => setPrice("40000-60000")}
                  >
                    ₹40,OOO - ₹60,OOO
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
                    onClick={() => setPrice("morethan80000")}
                  >
                    More than 60,000
                  </Text>
                </Flex>
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
                    Brand
                  </Text>
                  {/* Option  */}
                  {/* all brand */}
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    ml={1}
                    gap={1}
                    onClick={() => setBrand("")}
                  >
                    <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
                    <Text
                      fontWeight={500}
                      fontSize={"11px"}
                      letterSpacing={1}
                      m={1}
                      textAlign={"left"}
                    >
                      All brands
                    </Text>
                  </Flex>
                  {/* Google  */}
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    ml={1}
                    gap={1}
                    onClick={() => setBrand("google")}
                  >
                    <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
                    <Text
                      fontWeight={500}
                      fontSize={"11px"}
                      letterSpacing={1}
                      m={1}
                      textAlign={"left"}
                    >
                      Google
                    </Text>
                  </Flex>
                  {/* samsung  */}
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    onClick={() => setBrand("samsung")}
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
                    >
                      Samsung
                    </Text>
                  </Flex>
                  {/* Apple  */}
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    onClick={() => setBrand("apple")}
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
                    >
                      Apple
                    </Text>
                  </Flex>
                  {/* Mi  */}
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    onClick={() => setBrand("mi")}
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
                    >
                      Mi
                    </Text>
                  </Flex>
                  {/* Motorola  */}
                  <Flex
                    _hover={{
                      color: "rgb(200,136,240)",
                      transition: ".3s",
                      cursor: "pointer",
                    }}
                    onClick={() => setBrand("motorola")}
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
                    >
                      Motorola
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

      {/* Maping  */}
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

export default SmallMobile;
