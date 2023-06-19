import {
  Box,
  Center,
  Image,
  Text,
  Icon,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import NormalNav from "../../components/NormalNav";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { site } from "../../components/backend";
import axios from "axios";

const postCart = async (data) => {
  let toki = localStorage.getItem("token");
  // console.log("postcart",toki)
  // console.log("postcart data",data)
  const res = await axios.post(`${site}/carts`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  console.log("post cart", res.data);
};

const MobileSinglepage = ({ data }) => {
  let objLength = Object.keys(data).length;
  const [Imageurl, setimageurl] = useState(
  ""
  );

  const { isAuth, token } = useSelector((store) => store.auth);
  const toast = useToast();
  console.log("test", data);
  const handleTheCart = (data) => {
    if (isAuth == false) {
      toast({
        position: "top",
        title: `Login to add the product in cart`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } else {
      postCart(data);
      toast({
        position: "top",
        title: `Product is add in your cart`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  console.log("data=>", data);
  console.log("dataa=>", Object.keys(data).length);

  const handleImageHover = (imageUrl) => {
    setimageurl(imageUrl);
  };
  console.log("imgage", Imageurl);
  const handleImageLeave = () => {
    setimageurl(Imageurl);
  };
  return (
    <Box mb={10}>
      {/* //   Mobile screen */}
      {objLength > 0 && (
        <Box>
          <Box>
            <Center display={"flex"} gap="10px" mt="10px">
              {data &&
                data.img.map((el) => (
                  <Image
                    width={"70px"}
                    h="70px"
                    onMouseEnter={() => handleImageHover(el)}
                    onMouseLeave={handleImageLeave}
                    cursor={"pointer"}
                    src={el}
                  />
                ))}
            </Center>
            <Center mt={8} mb={10}>
             <Image width={"400px"} h="350px" src={Imageurl} />
            </Center>
          </Box>
          <Box ml={3} mr={3}>
            <Text textAlign={"left"} fontWeight={500} fontSize={"22px"}>
              {data && data.title}
            </Text>
            {/* Rating  */}
            <Flex mt={2} mb={2} gap={3}>
              <Flex
                pl={"6px"}
                pt={"2px"}
                pr={"6px"}
                borderRadius={3}
                bgColor={"green.500"}
                gap={1}
              >
                <Text fontSize={"12px"} fontWeight={500} color={"white"}>
                  {data && data.rating}
                </Text>
                <Icon
                  as={GoStar}
                  w={"10px"}
                  h={"10px"}
                  mt={"3px"}
                  color="white"
                />
              </Flex>
              <Text fontSize={"13px"} fontWeight={500} color={"gray.500"}>
                {data && data.reviews}
              </Text>
            </Flex>
            {/* Price  */}
            <Flex gap={3}>
              <Text fontWeight={500} fontSize={"18px"} color={"green"}>
                {data && data.off}
              </Text>
              <Text fontWeight={500} fontSize={"18px"}>
                <strike>{data && data.strik}</strike>
              </Text>
              <Text fontWeight={500} fontSize={"18px"}>
                {data && data.price}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} mt={8}>
              <Button width={"48%"} onClick={() => handleTheCart(data)}>
                <Flex gap={3} mt={"1px"}>
                  <Icon h={5} w={5} color={"orange.300"} as={HiShoppingCart} />
                  <Text fontWeight={700} color={"orange.300"} fontSize={"15px"}>
                    ADD TO CART
                  </Text>
                </Flex>
              </Button>
              <Button
                onClick={() => handleTheCart(data)}
                _hover={{}}
                width={"48%"}
                bgColor={"orange.300"}
                color={"white"}
              >
                Buy Now
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MobileSinglepage;
