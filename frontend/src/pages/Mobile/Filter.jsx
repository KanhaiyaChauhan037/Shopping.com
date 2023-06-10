import React, { useEffect, useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";

// const sortData = async (brand)=>{
//   const res = await axios.get(`${site}/products/mobile?brand=${brand}`);
//   console.log(res.data);
// }

const Filter = ({handle}) => {
  const [brand,setBrand] = useState("")
  const [price,setPrice] = useState("")
  
  useEffect(()=>{
    handle(brand,price)
  },[brand,price])
  console.log(brand,price)

  return (
    <Box bgColor={"rgb(267,260,262)"} boxShadow={"base"} width={"17%"} p={2}>
      <Box borderBottom={"1px"} color={"gray.300"} pt={1} pb={2}>
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          color={"black"}
          fontWeight={500}
        >
          Filter
        </Text>
      </Box>
      {/* Price  */}
      <Box borderBottom={"1px"} borderColor={"gray.300"} pt={2} pb={2}>
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
          onClick={()=>setPrice("")}
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
          onClick={()=>setPrice("0-20000")}
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
          onClick={()=>setPrice("20000-40000")}

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
          onClick={()=>setPrice("40000-60000")}

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
          onClick={()=>setPrice("morethan80000")}

        >
          More than 60,000
        </Text>
      </Box>
      {/* Brand  */}
      <Box borderBottom={"1px"} borderColor={"gray.300"} pt={2} pb={2}>
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
          onClick={()=>setBrand("")}
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
          onClick={()=>setBrand("google")}
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
          onClick={()=>setBrand("samsung")}
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
          onClick={()=>setBrand("apple")}
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
          onClick={()=>setBrand("mi")}
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
          onClick={()=>setBrand("motorola")}
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
      {/* Rating  */}
      <Box>
        <Text
          fontSize={"14px"}
          textAlign={"left"}
          pl={1}
          color={"black"}
          fontWeight={500}
        >
          Rating
        </Text>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={RxStarFilled} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            4 & above
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
          <Icon as={RxStarFilled} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            3 & above
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
          <Icon as={RxStarFilled} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            2 & above
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Filter;