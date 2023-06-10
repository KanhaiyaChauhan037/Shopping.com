import axios from "axios";
import {
  Box,
  Center,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { site } from "../../components/backend";
import { Link } from "react-router-dom";

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
    items: 2,
  },
};

const getData = async () => {
  const res = await axios.get(`${site}/products/electronic&appliances`);
  console.log(res.data);
  return res.data;
};
const getMobileData = async () => {
  const res = await axios.get(`${site}/products/mobile`);
  console.log(res.data);
  return res.data;
};

const getGroceryData = async () => {
  const res = await axios.get(`${site}/products/grocery`);
  console.log(res.data);
  return res.data;
};

const getHomeData = async () => {
  const res = await axios.get(`${site}/products/home`);
  console.log(res.data);
  return res.data;
};

const MobileHomeSlider = () => {
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
    <Box>
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
      <Flex mb={5}>
        <Box
          h={120}
          w={"30%"}
          overflow={"hidden"}
          backgroundImage={`url(https://i.postimg.cc/gj0JRv78/Screenshot-2023-02-16-025748.png)`}
          bgSize={"cover"}
        ></Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"70%"}>
          <Carousel responsive={responsive}>
            {mobileData.length > 0 &&
              mobileData.map((post, i) => (
                <Link to={`/singlepage/${post._id}`}>
                  <Box
                    onClick={() => Navigator("/mobile")}
                    h={120}
                    pl={2}
                    pt={2}
                    pr={2}
                    key={i}
                  >
                    <Center>
                      <Image width={"60px"} h={"80px"} src={post.img[0]} />
                    </Center>
                    <Text
                      mt={3}
                      noOfLines={1}
                      fontWeight={500}
                      fontSize={"10px"}
                    >
                      {post.title}
                    </Text>
                  </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Grocery  */}
      <Flex mb={5} mt={5}>
        <Box
          h={120}
          w={"30%"}
          overflow={"hidden"}
          backgroundImage={`url(https://i.postimg.cc/g2mV771K/Screenshot-2023-02-16-024203.png)`}
          bgSize={"cover"}
        ></Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"70%"}>
          <Carousel responsive={responsive}>
            {groceryData.length > 0 &&
              groceryData.map((post, i) => (
                <Link key={i} to={`/singlepage/${post._id}`}>
                  <Box h={120} pl={2} pr={2} onClick>
                    <Center h={"90px"}>
                      <Image width={"80px"} src={post.img[0]} />
                    </Center>
                    <Text
                      mt={2}
                      noOfLines={1}
                      fontWeight={500}
                      fontSize={"10px"}
                    >
                      {post.title}
                    </Text>
                  </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Home  */}
      <Flex mb={5} mt={5}>
        <Box
          h={120}
          w={"30%"}
          overflow={"hidden"}
          backgroundImage={`url(https://i.postimg.cc/JnV4Tf2r/Screenshot-2023-02-16-024516.png)`}
          bgSize={"cover"}
        ></Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"70%"}>
          <Carousel responsive={responsive}>
            {homeData.length > 0 &&
              homeData.map((post, i) => (
                <Link to={`/singlepage/${post._id}`}>
                <Box h={120} pl={2} pt={2} pr={2} key={i}>
                  <Center>
                    <Image width={"70px"} h={"75px"} src={post.img[0]} />
                  </Center>
                  <Text mt={2} noOfLines={1} fontWeight={500} fontSize={"10px"}>
                    {post.title}
                  </Text>
                </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Electronic  */}
      <Flex mb={5} mt={5}>
        <Box
          h={120}
          w={"30%"}
          overflow={"hidden"}
          backgroundImage={`url(https://i.postimg.cc/VLqf6Zvp/78731249.jpg)`}
          bgSize={"cover"}
        ></Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"70%"}>
          <Carousel responsive={responsive}>
            {data.length > 0 &&
              data.map((post, i) => (
                <Link to={`/singlepage/${post._id}`}>
                <Box h={120} pl={2} pt={4} pr={2} key={i}>
                  <Center>
                    <Image width={"60px"} h={"70px"} src={post.img[0]} />
                  </Center>
                  <Text mt={3} noOfLines={1} fontWeight={500} fontSize={"10px"}>
                    {post.title}
                  </Text>
                </Box>
                </Link>
              ))}
          </Carousel>
        </Box>
      </Flex>
    </Box>
  );
};

export default MobileHomeSlider;
