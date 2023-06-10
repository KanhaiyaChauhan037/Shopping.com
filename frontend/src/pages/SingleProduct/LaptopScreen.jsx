import React from "react";
import { Flex, Image, Box, Text, Icon, Button, useToast } from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import NormalNav from "../../components/NormalNav";
import { HiShoppingCart } from "react-icons/hi";
import {useSelector} from "react-redux"
import {site} from "../../components/backend"
import axios from "axios";


const postCart = async(data)=>{
    let toki = localStorage.getItem("token")
    // console.log("postcart",toki)
    // console.log("postcart data",data)
    const res = await axios.post(`${site}/carts`,data,{
      headers : {
        "Content-Type" : "application/json",
        "Authorization" : toki
      }
    })
    console.log(res.data)
  }

const LaptopScreen = ({ data }) => {
  const {isAuth,token} =  useSelector((store)=>store.auth)
  const toast = useToast()
  
  const handleTheCart=(data)=>{
    if(isAuth == false)
    {
        toast({
            position : "top",
            title: `Login to add the product in cart`,
            status: "warning",
            duration: 1500,
            isClosable: true,
          }) 
    }
    else{
        postCart(data)
        toast({
            position : "top",
            title: `Product is add in your cart`,
            status: "success",
            duration: 1500,
            isClosable: true,
          }) 
    }
  }
  console.log("datasdfdf-",data)
  return (
    <Box>
      <NormalNav />
      <Box>
        {/* Product  */}
        <Flex justifyContent={"center"} mt={5} mb={10} gap={10}>
            {/* Product Image  */}
          <Box>
            <Image width={"200px"} m={10} src={data && data.img[0]} />
          </Box>
          {/* Product details  */}
          <Box p={5}>
            <Text textAlign={"left"} fontSize={"14px"} fontWeight={"500"}>
              {data && data.title}
            </Text>
            <Box>
              {/* rating  */}
              <Flex mt={1} mb={1} gap={2} justifyContent={"left"}>
                <Flex
                  pl={"3px"}
                  pr={"3px"}
                  borderRadius={3}
                  bgColor={"green.500"}
                  gap={1}
                >
                  <Text fontSize={"10px"} fontWeight={500} color={"white"}>
                    {data && data.rating}
                  </Text>
                  <Icon
                    as={GoStar}
                    w={"10px"}
                    h={"10px"}
                    mt={"2px"}
                    color="white"
                  />
                </Flex>
                <Text fontSize={"10px"} color={"gray.500"} fontWeight={500}>
                  {data && data.reviews}
                </Text>
              </Flex>
              {/* Price  */}
              <Flex gap={3}>
                <Box>
                  <Text fontSize={"20px"} fontWeight={500}>
                    {data && data.price}
                  </Text>
                </Box>
                <Box>
                  <Text
                    mt={2}
                    fontSize={"13px"}
                    color={"gray.400"}
                    fontWeight={500}
                  >
                    <strike>{data && data.strik}</strike>
                  </Text>
                </Box>
                <Box>
                  <Text
                    mt={2}
                    fontSize={"13px"}
                    color={"green.500"}
                    fontWeight={500}
                  >
                    {data && data.off}
                  </Text>
                </Box>
              </Flex>
              {/* Description  */}
              <Box ml={2} mt={1}>
                <Text
                  textAlign={"left"}
                  mt={1}
                  mb={1}
                  fontSize={"13px"}
                  fontWeight={500}
                >
                  Highlights
                </Text>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc1}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc2}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc3}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc4}
                  </Text>
                </Flex>
              </Box>
              {/* Seller  */}
              <Box ml={2} mt={1}>
                <Text
                  textAlign={"left"}
                  mt={1}
                  mb={1}
                  fontSize={"13px"}
                  fontWeight={500}
                >
                  Seller
                </Text>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    7 day seller replacement policy/brand assistance for device
                    issues
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    GST invoice available
                  </Text>
                </Flex>
              </Box>
              {/* Button  */}
              <Flex mt={10} gap={3}>
                <Button onClick={()=>handleTheCart(data)} _hover={{}} w={"150px"} bg={"none"} bgColor={"rgb(255,159,0)"}>
                    <Flex gap={3} mt={"1px"}  >
                        <Icon m={"1px"} h={4} w={4} color={"white"} as={HiShoppingCart}/>
                        <Text fontWeight={500} color={"white"} fontSize={"13px"}>ADD TO CART</Text>
                    </Flex>
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default LaptopScreen;
