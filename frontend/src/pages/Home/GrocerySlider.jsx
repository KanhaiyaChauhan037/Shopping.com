import { Box, Center, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { site } from "../../components/backend";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const getData = async () => {
  const res = await axios.get(`${site}/products/electronic&appliances`);
  return res.data;
};
const getMobileData = async () => {
  const res = await axios.get(`${site}/products/mobile`);
  return res.data;
};

const getGroceryData = async () => {
  const res = await axios.get(`${site}/products/grocery`);
  return res.data;
};

const getHomeData = async () => {
  const res = await axios.get(`${site}/products/home`);
  return res.data;
};

const GrocerySlider = () => {
  const [data, setData] = useState([]);
  const [mobileData, setMobileData] = useState([]);
  const [groceryData, setGroceryData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleTheFetch();
  }, []);
  const handleTheFetch = async () => {
    setLoading(true);
    await getData().then((res) => setData(res));
    await getMobileData().then((res) => setMobileData(res));
    await getGroceryData().then((res) => setGroceryData(res));
    await getHomeData().then((res) => setHomeData(res));
    setLoading(false);
  };
  console.log(data);
  return (
    <div>
      {loading && (
        <div>
          <Flex justifyContent={"center"} flexDirection={"column"}>
            <Center>
              <Spinner
                m={10}
                thickness="4px"
                speed="0.75s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
            <Text
              mt={5}
              mb={10}
              fontWeight={500}
              fontSize={"19px"}
              color={"blue.500"}
            >
              Loading ...
            </Text>
          </Flex>
        </div>
      )}

      {/* Mobile  */}
      <Flex mt={10} mb={10}>
        <Box
          h={200}
          w={"20%"}
          overflow={"hidden"}
          backgroundImage={`url(https://i.postimg.cc/gj0JRv78/Screenshot-2023-02-16-025748.png)`}
          bgSize={"cover"}
        >
        </Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {mobileData.length > 0 &&
              mobileData.map((post, i) => (
                <Link to={`/singlepage/${post._id}`}>
                <Box  h={200} pl={10} pr={10} key={i} pt={10}>
                  <Center h={"100px"}>
                    <Image width={"90px"} src={post.img[0]} />
                  </Center>
                  <Text mt={5} noOfLines={1} fontWeight={500} fontSize={"12px"}>
                    {post.title}
                  </Text>
                </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Grocery  */}
      <Flex mt={10} mb={10}>
        <Box
          backgroundImage={`url(https://i.postimg.cc/g2mV771K/Screenshot-2023-02-16-024203.png)`}
          bgSize={"cover"}
          h={200}
          w={"20%"}
          pt={10}
        ></Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {groceryData.length > 0 &&
              groceryData.map((post, i) => (
                <Link to={`/singlepage/${post._id}`}>
                <Box h={200} pl={10} pr={10} key={i} pt={10}>
                  <Center h={"100px"}>
                    <Image width={"90px"} src={post.img[0]} />
                  </Center>
                  <Text mt={5} noOfLines={1} fontWeight={500} fontSize={"12px"}>
                    {post.title}
                  </Text>
                </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Home  */}
      <Flex mt={10} mb={10}>
        <Box
          backgroundImage={`url(https://i.postimg.cc/JnV4Tf2r/Screenshot-2023-02-16-024516.png)`}
          bgSize={"cover"}
          h={200}
          w={"20%"}
        ></Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {homeData.length > 0 &&
              homeData.map((post, i) => (
                <Link to={`/singlepage/${post._id}`}>
                <Box h={200} pl={10} pr={10} key={i} pt={10}>
                  <Center h={"100px"}>
                    <Image width={"90px"} src={post.img[0]} />
                  </Center>
                  <Text mt={5} noOfLines={1} fontWeight={500} fontSize={"12px"}>
                    {post.title}
                  </Text>
                </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Electronic  */}
      <Flex>
        <Box
        backgroundImage={`url(https://i.postimg.cc/VLqf6Zvp/78731249.jpg)`}
        bgSize={"cover"}
        h={200} w={"20%"}>
          
        </Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {data.length > 0 &&
              data.map((post, i) => (
                <Link to={`/singlepage/${post._id}`}>
                <Box h={200} pl={10} pr={10} key={i}>
                  <Center h={"130px"}>
                    <Image width={"100px"} src={post.img[0]} />
                  </Center>
                  <Text mt={5} noOfLines={1} fontWeight={500} fontSize={"12px"}>
                    {post.title}
                  </Text>
                </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>
    </div>
  );
};

export default GrocerySlider;
