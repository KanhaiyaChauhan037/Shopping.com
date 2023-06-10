import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { site } from "../../components/backend";
import { GoStar } from "react-icons/go";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const getData = async ({brand,price}) => {
  const res = await axios.get(`${site}/products/grocery?brand=${brand}&price=${price}`);
  console.log(res.data);
  return res.data;
};

const LaptopG = ({brand,price}) => {
  console.log("price",price)
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleTheFetch();
  }, [brand,price]);

  const handleTheFetch = async () => {
    setLoading(true);
    const append = await getData({brand,price}).then((res) => setData(res));
    setLoading(false);
  };
  console.log(data);
  return (
    <Box
    width={"82%"}
    bgColor={"rgb(267,260,262)"}
    boxShadow={"base"}
  >
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
            justifyContent={"space-between"}
            
            border={"1px"}
            borderColor={"gray.200"}
            p={6}
          >
            <Flex gap={10}>
              {/* Box 1 */}
              <Box >
                <Image m={2} width={"100px"} src={post.img[0]} />
              </Box>
              {/* Box 2  */}
              <Box w={"500px"}>
                <Text textAlign={"left"} noOfLines={1} fontSize={"14px"} fontWeight={"500"}>
                  {post.title}
                </Text>
                <Box>
                  {/* rating  */}
                  <Flex gap={2} justifyContent={"left"}>
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
                    <Text
                      fontSize={"10px"}
                      color={"gray.500"}
                      fontWeight={500}
                    >
                      {post.reviews}
                    </Text>
                  </Flex>
                  {/* Description  */}
                  <Box ml={2} mt={3}>
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
                        {post.desc1}
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
                        {post.desc2}
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
                        {post.desc3}
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
                        {post.desc4}
                      </Text>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Flex>
            {/* Price box  */}
            <Box mr={"150px"}>
              <Text
                fontSize={"18px"}
                color={"black"}
                textAlign="left"
                fontWeight={"500"}
              >
                {post.price}
              </Text>
              <Flex gap={2}>
                <strike>
                  <Text
                    fontSize={"12px"}
                    color={"gray.500"}
                    textAlign="left"
                    fontWeight={"500"}
                  >
                    {post.strik}
                  </Text>
                </strike>
                <Text
                  fontSize={"12px"}
                  color={"green"}
                  textAlign="left"
                  fontWeight={"500"}
                >
                  {post.off}
                </Text>
              </Flex>
              <Text
                fontSize={"11px"}
                textAlign="left"
                fontWeight={"400"}
                color={"gray.500"}
              >
                Free delivery
              </Text>
              <Flex gap={2}>
                <Text
                  fontSize={"11px"}
                  textAlign="left"
                  fontWeight={"400"}
                  color={"gray.700"}
                >
                  Upto
                </Text>
                <Text fontWeight={500} fontSize={"11px"}>
                  ₹20,000
                </Text>
                <Text
                  fontSize={"11px"}
                  textAlign="left"
                  fontWeight={"400"}
                  color={"gray.700"}
                >
                  Off on Exchange
                </Text>
              </Flex>
              <Box>
                <Text
                  fontSize={"11px"}
                  textAlign="left"
                  fontWeight={"600"}
                  color={"green"}
                  letterSpacing={"1px"}
                >
                  Bank Offer
                </Text>
              </Box>
            </Box>
          </Flex>
        </Link>
      ))}
      
  </Box>
  )
}

export default LaptopG
