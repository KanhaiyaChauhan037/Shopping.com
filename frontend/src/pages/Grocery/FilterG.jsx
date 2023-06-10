import React, { useEffect, useState } from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";

const FilterGrocery = ({handle}) => {
  const [sortPrice,setSortPrice] = useState("")
  const [sortBrand,setSortBrand] = useState("")

  useEffect(()=>{
    handle(sortBrand,sortPrice)
  },[sortPrice,sortBrand])
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
          textAlign={"left"}
          onClick={()=>setSortPrice("")}
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
          onClick={()=>setSortPrice("0-100")}

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
          onClick={()=>setSortPrice("100-200")}

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
          onClick={()=>setSortPrice("200-400")}
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
          onClick={()=>setSortPrice("400-600")}
          textAlign={"left"}
        >
          ₹4OO - ₹6OO
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
            onClick={()=>setSortBrand("")}
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
            onClick={()=>setSortBrand("Washing Bars")}
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
            onClick={()=>setSortBrand("Detergents")}
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
            onClick={()=>setSortBrand("Pakage food")}

          >
            Pakage Food
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

export default FilterGrocery;
