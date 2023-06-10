import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SearchBox = ({ data }) => {
  console.log("searchBox", data);
  return (
    <Link to={`/singlepage/${data._id}`}>
      <Flex m={2} gap={4}>
        <Box w={"10%"}>
          <Image src={data.img[0]} width={9} />
        </Box>
        <Box w={"80%"} mt={1}>
          <Text
          textAlign={"left"}
            fontWeight={500}
            color={"gray.600"}
            fontSize={"12px"}
            noOfLines={1}
          >
            {data.title}
          </Text>
          <Text
            textAlign={"left"}
            color={"blue.400"}
            fontWeight={500}
            fontSize={"10px"}
          >
            {data.category}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default SearchBox;
