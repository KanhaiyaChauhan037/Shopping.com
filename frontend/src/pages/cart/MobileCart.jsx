import {
  Box,
  Text,
  Flex,
  Button,
  Image,
  Center,
  Icon,
  Toast,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { site } from "../../components/backend";
import { MdShoppingCart } from "react-icons/md";
import { GoStar } from "react-icons/go";
import { SlPlus } from "react-icons/sl";
import { FiMinusCircle } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import LaptopCheckout from "../Checkout/LaptopCheckout";

const getCart = async () => {
  let toki = localStorage.getItem("token");
  const res = await axios.get(`${site}/carts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
};

const plusQuantity = async (prod) => {
  let toki = localStorage.getItem("token");
  const res = await axios.patch(
    `${site}/carts/${prod._id}`,
    {
      quantity: prod.quantity + 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: toki,
      },
    }
  );
  console.log(res.data);
};

const minusQuantity = async (prod) => {
  let toki = localStorage.getItem("token");
  const res = await axios.patch(
    `${site}/carts/${prod._id}`,
    {
      quantity: prod.quantity - 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: toki,
      },
    }
  );
  console.log(res.data);
};

const itemDelete = async (id) => {
  let toki = localStorage.getItem("token");
  const res = await axios.delete(`${site}/carts/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  console.log(res.data);
};

const MobileCart = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  useEffect(() => {
    handleTheFetch();
  }, []);

  const handleTheFetch = async () => {
    const append = await getCart();
    console.log("append=>", append);
    setData(append);
  };

  const handleTheMinus = async (prod) => {
    console.log("minus btn");
    await minusQuantity(prod);
    handleTheFetch();
  };

  const handleThePlus = async (prod) => {
    console.log("plus btn");
    await plusQuantity(prod);
    handleTheFetch();
  };

  const handleTheCheckout = () => {
    console.log("hi checkout")
  };

  const handleTheDelete = async (id) => {
    console.log(id);
    itemDelete(id);
    handleTheFetch();
    toast({
      position: "top",
      title: `Item is deleted from your cart`,
      status: "info",
      duration: 1700,
      isClosable: true,
    });
  };

  let total = data.reduce((acc, el) => acc + el.price2 * el.quantity, 0);
  let paid = total === 0 ? 0 : data.reduce((acc, el) => acc + el.price2 * el.quantity, 0) + 100
  return (
    <Box pt={5} bgColor={"gray.100"} pb={10}>
      <Flex ml={3} gap={1}>
        <Icon w={4} h={4} mt={"1px"} as={SlHandbag} />
        <Text fontWeight={500} textAlign={"left"}>
          My Cart
        </Text>
      </Flex>
      <Flex justifyContent={"center"} flexDirection={"column"}>
        <Box
          // border={"1px"}
          // borderColor={"gray.300"}
          // boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          mr="5px"
          ml="5px"
          h="auto"
        >
          <Box mb={5}>
            <Center>
              {data.length == 0 && (
                // <Text fontWeight={500} mt={"70px"} fontSize={"20px"}>
                //   Your cart is empty
                // </Text>
                <Image src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png" />
              )}
            </Center>
            {data &&
              data.map((prod, i) => (
                <Box
                  mt={2}
                  mb={2}
                  bgColor={"white"}
                  key={i}
                  borderTop={"1px"}
                  borderColor={"gray.300"}
                >
                  <Flex justifyContent={"space-between"}>
                    {/* Image Box  */}
                    <Box p={2} width={"30%"}>
                      <Center>
                        <Image mt={2} src={prod.img[0]} width={"90px"} />
                      </Center>
                    </Box>
                    {/* Desc  */}
                    <Box w={"70%"}>
                      <Text
                        h="40px"
                        textAlign={"left"}
                        fontSize={"13px"}
                        fontWeight={500}
                        ml={1}
                        mt={3}
                        noOfLines={2}
                      >
                        {prod.title}
                      </Text>
                      {/* Desc  */}
                      <Flex
                        pl={1}
                        pr={1}
                        pt={1}
                        gap={2}
                        justifyContent={"left"}
                      >
                        <Flex
                          pl={"3px"}
                          pr={"3px"}
                          borderRadius={3}
                          bgColor={"green"}
                          gap={1}
                        >
                          <Text
                            fontSize={"10px"}
                            fontWeight={500}
                            color={"white"}
                          >
                            {prod.rating}
                          </Text>
                          <Icon
                            as={GoStar}
                            w={"10px"}
                            h={"10px"}
                            mt={"2px"}
                            color="white"
                          />
                        </Flex>
                        <Text
                          fontSize={"10px"}
                          color={"gray.500"}
                          fontWeight={500}
                        >
                          {prod.reviews}
                        </Text>
                      </Flex>
                      <Box mt={2} ml={1}>
                        <Flex gap={2}>
                          <Text
                            textAlign={"left"}
                            fontSize={"16px"}
                            fontWeight={500}
                            color={"gray.500"}
                          >
                            ₹{prod.price2}
                          </Text>
                          <Text
                            textAlign={"left"}
                            fontSize={"16px"}
                            fontWeight={500}
                            color={"gray.500"}
                          >
                            <strike> {prod.strik} </strike>
                          </Text>
                          <Text
                            color={"green"}
                            textAlign={"left"}
                            fontSize={"16px"}
                            fontWeight={500}
                          >
                            {prod.off}
                          </Text>
                        </Flex>
                      </Box>
                      <Text fontSize={"12px"} textAlign={"left"} ml={1}>
                        Free delivery upto ₹1,000
                      </Text>
                    </Box>
                  </Flex>
                  {/* Price box  */}
                  <Box>
                    <Flex justifyContent={"space-between"}>
                      <Flex
                        pt={1}
                        pb={1}
                        gap={1}
                        border={"1px"}
                        w={"50%"}
                        borderColor={"gray.300"}
                      >
                        <Text w={"60px"} mt={1} fontWeight={500}>
                          Qty
                        </Text>
                        <Button
                          color={"gray.700"}
                          // bgColor={"purple.500"}
                          bg={"none"}
                          _hover={{}}
                          borderRadius={100}
                          isDisabled={prod.quantity == 1}
                          size="sm"
                          onClick={() => handleTheMinus(prod)}
                        >
                          <Icon w={5} h={5} as={FiMinusCircle} />
                        </Button>
                        <Text mt={1} fontWeight={500}>
                          {prod.quantity}
                        </Text>
                        <Button
                          color={"gray"}
                          bg={"none"}
                          _hover={{}}
                          borderRadius={100}
                          size="sm"
                          onClick={() => handleThePlus(prod)}
                        >
                          <Icon w={5} h={5} as={SlPlus} />
                        </Button>
                      </Flex>
                      <Box border={"1px"} w={"50%"} borderColor={"gray.300"}>
                        <Button
                          bg={"none"}
                          color={"white"}
                          // bgColor={"purple.500"}
                          _hover={{}}
                          borderRadius={10}
                          size="sm"
                          mt={1}
                          onClick={() => handleTheDelete(prod._id)}
                        >
                          <Icon
                            w={4}
                            h={4}
                            color={"gray.500"}
                            as={MdShoppingCart}
                          />
                          <Text color={"gray.500"} ml={2}>
                            Remove
                          </Text>
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              ))}
          </Box>
        </Box>

        <Box
          bgColor={"white"}
          ml={1}
          mr={1}
          pt={1}
          pb={2}
          border={"1px"}
          borderColor={"gray.300"}
        >
          <Box p="15px" h="180px">
            <Box>
              <Flex justifyContent="space-between" fontSize={12} p="10px">
                <Text>Item Total(MRP)</Text>
                <Text>₹ {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              </Flex>
            </Box>
            <hr></hr>
            <Box>
              <Flex justifyContent="space-between" fontSize={12} p="10px">
                <Text>Shipping Fee</Text>
                <Text>₹ 100</Text>
              </Flex>
            </Box>
            <hr></hr>
            <Box>
              <Flex justifyContent="space-between" fontSize={12} p="10px">
                <Text>To be paid</Text>
                <Text>₹ {paid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
              </Flex>
            </Box>
          </Box>
          <Button
            onClick={onOpen}
            w="90%"
            bgColor={"purple.500"}
            mt="10px"
            _hover={{}}
          >
            <Text fontWeight={500} color={"white"}>
            Proceed to Buy
            </Text>
          </Button>
        </Box>
      </Flex>
      <LaptopCheckout handleTheFetch={handleTheFetch} totalPrice={paid} cart={data} cancelRef={cancelRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default MobileCart;
