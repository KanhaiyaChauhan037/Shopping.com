import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NormalNav = () => {
  return (
    <div>
      <Box boxShadow={"md"} pb={2} pt={2} mt="10px">
        <Flex justifyContent={"space-between"} ml={{base : 10,md:10,lg:100}} mr={{base : 10,md:10,lg:100}}>
          <Link to={"/grocery"}>
          <Box>
            <Text fontSize={"14px"} _hover={{color:"tomato"}} fontWeight={500}>
              Grocery
            </Text>
          </Box>
          </Link>
          <Link to={"/mobile"}>
            <Box>
              <Text fontSize={"14px"}  _hover={{color:"tomato"}} fontWeight={500}>
                Mobile
              </Text>
            </Box>
          </Link>
          <Link to={"/fashion"}>
          <Box>
            <Text fontSize={"14px"} _hover={{color:"tomato"}} fontWeight={500}>
              Fashion
            </Text>
          </Box>
          </Link>
        <Link to={"/electronic"}>
          <Box>
            <Text fontSize={"14px"} _hover={{color:"tomato"}} fontWeight={500}>
            Electronics & Appliances
            </Text>
          </Box>
          </Link>
          <Link to={"/home"}>
          <Box>
            <Text fontSize={"14px"} _hover={{color:"tomato"}} fontWeight={500}>
              Home
            </Text>
          </Box>
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default NormalNav;
