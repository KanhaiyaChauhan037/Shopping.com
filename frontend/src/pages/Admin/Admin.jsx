import {
  Box,
  Flex,
  Text,
  useMediaQuery,
  Icon,
  Image,
  Center,
  ScaleFade,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import { FaUserLock } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { site } from "../../components/backend";
import PieChart from "../../components/PieChart";

const adminComp = [
  {
    icon: GiCardboardBoxClosed,
    txt: "All Products",
    link: "/admin/allproducts",
  },
  {
    icon: MdOutlineAddShoppingCart,
    txt: "Add Products",
    link: "/admin/addproducts",
  },
  {
    icon: CiDeliveryTruck,
    txt: "Orders",
    link: "/admin/orders",
  },
  {
    icon: BiUser,
    txt: "Users",
    link: "/admin/users",
  },
];

const getOrder = async () => {
  let toki = localStorage.getItem("token");
  const res = await axios.get(`${site}/admin/orders`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  let data = res.data;
  return data;
};

const getAllProducts = async () => {
  const res = await axios.get(`${site}/products`);
  let data = res.data;
  return data;
};

const getAllUser = async () => {
  let toki = localStorage.getItem("token");
  const res = await axios.get(`${site}/users/admin`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  let data = res.data;
  return data;
};

const Admin = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width:800px)");
  const [order, setOrder] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useSelector((store) => store.auth);

  useEffect(() => {
    handleTheData();
  }, []);

  const handleTheData = async () => {
    setLoading(true);
    await getOrder().then((res) => setOrder(res));
    await getAllProducts().then((res) => setProduct(res));
    await getAllUser().then((res) => setUsers(res));
    setLoading(false);
  };

  const Name = localStorage.getItem("name");
  console.log("name", Name);

  console.log(name);
  return (
    <Box pt={10} overflowX={"hidden"}>
      {/* <AdminNav /> */}
      {isLargerThan1280 ? (
        <Box>
          <Flex>
            {/* 1st box  */}
            <Box
              w={"20%"}
              h={"529px"}
              p={2}
              height={""}
              background={
                "url(https://cdn.vectorstock.com/i/preview-1x/45/27/abstract-gradient-background-blurred-purple-vector-21994527.jpg) center/cover no-repeat"
              }
            >
              <Flex
                gap={3}
                pl={2}
                borderBottom={"1px solid"}
                borderColor={"gray.100"}
                pb={4}
                pt={4}
              >
                <Icon color={"white"} w={6} h={6} mt={"1px"} as={FaUserLock} />
                <Text
                  fontWeight={400}
                  textAlign={"center"}
                  fontSize={"18px"}
                  color={"white"}
                >
                  ADMIN
                </Text>
              </Flex>
              <Flex
                gap={3}
                pl={1}
                borderBottom={"1px solid"}
                borderColor={"gray.100"}
                pb={3}
                pt={3}
              >
                <Image
                  w={"40px"}
                  borderRadius={50}
                  src="https://i.pinimg.com/564x/ab/b9/7e/abb97e1aaacf4ce84378d0a0afe2284e.jpg"
                />
                <Text
                  mt={1}
                  fontWeight={400}
                  textAlign={"center"}
                  fontSize={"18px"}
                  color={"white"}
                >
                  {Name}
                </Text>
              </Flex>
              {/* Pages  */}
              <Flex p={5} gap={6} flexDirection={"column"}>
                {adminComp.map((post, i) => (
                  <Link key={i} to={post.link}>
                    <Flex gap={2}>
                      <Icon
                        color={"white"}
                        w={5}
                        h={5}
                        mt={"2px"}
                        as={post.icon}
                      />
                      <Text
                        textAlign={"center"}
                        fontSize={"16px"}
                        fontWeight={400}
                        color={"white"}
                      >
                        {post.txt}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </Box>
            {/* 2nd box  */}
            <Box w={"80%"}>
              {/* Cards  */}
              <Flex p={5} justifyContent={"space-between"}>
                {/* users card  */}
                <Link to={"/admin/users"}>
                  <Box
                    pt={3}
                    borderRadius={"10px"}
                    background={
                      "url(https://media.istockphoto.com/id/912278192/vector/abstract-orange-background-vector.jpg?s=612x612&w=0&k=20&c=GG0Iu1--sa2ARNxxoYom1igGdgDpUGI8lWVPPaOgzRs=) center/cover no-repeat"
                    }
                    h={140}
                    w={200}
                    bgColor={"gray.200"}
                  >
                    <Center>
                      <Box
                        borderRadius={"50%"}
                        background={
                          "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                        }
                        h={"60px"}
                        w={"60px"}
                      >
                        <Icon mt={3} color={"white"} w={8} h={8} as={BiUser} />
                      </Box>
                    </Center>
                    <Flex justifyContent={"center"} p={2} gap={4}>
                      <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                        Total Users
                      </Text>
                      <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                        {users && users.length}
                      </Text>
                    </Flex>
                  </Box>
                </Link>

                {/* All Products card  */}
                <Link to={"/admin/allproducts"}>
                  <Box
                    pt={3}
                    borderRadius={"10px"}
                    background={
                      "url(https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg) center/cover no-repeat"
                    }
                    h={140}
                    w={200}
                    bgColor={"gray.200"}
                  >
                    <Center>
                      <Box
                        borderRadius={"50%"}
                        background={
                          "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                        }
                        h={"60px"}
                        w={"60px"}
                      >
                        <Icon
                          mt={3}
                          color={"white"}
                          w={8}
                          h={8}
                          as={GiCardboardBoxClosed}
                        />
                      </Box>
                    </Center>
                    <Flex justifyContent={"center"} mt={1} p={2} gap={4}>
                      <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                        Total Products
                      </Text>
                      <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                        {products && products.length}
                      </Text>
                    </Flex>
                  </Box>
                </Link>
                {/* Order card  */}
                <Link to={"/admin/orders"}>
                  <Box
                    borderRadius={"10px"}
                    background={
                      "url(https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-color-background-website-banner-graphic-design_120819-729.jpg) center/cover no-repeat"
                    }
                    pt={3}
                    h={140}
                    w={200}
                    bgColor={"gray.200"}
                  >
                    <Center>
                      <Box
                        borderRadius={"50%"}
                        background={
                          "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                        }
                        h={"60px"}
                        w={"60px"}
                      >
                        <Icon
                          mt={3}
                          color={"white"}
                          w={8}
                          h={8}
                          as={CiDeliveryTruck}
                        />
                      </Box>
                    </Center>
                    <Flex justifyContent={"center"} mt={1} p={2} gap={4}>
                      <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                        Total Orders
                      </Text>
                      <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                        {order && order.length}
                      </Text>
                    </Flex>
                  </Box>
                </Link>
                {/* Add product card  */}
                <Link to={"/admin/addproducts"}>
                  <Box
                    borderRadius={"10px"}
                    background={
                      "url(https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/62ee0d23043a368090e6f389_Rectangle%201%20-%202022-08-06T094136.523.svg) center/cover no-repeat"
                    }
                    pt={3}
                    h={140}
                    w={200}
                    bgColor={"gray.200"}
                  >
                    <Center>
                      <Box
                        borderRadius={"50%"}
                        background={
                          "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                        }
                        h={"60px"}
                        w={"60px"}
                      >
                        <Icon
                          mt={4}
                          color={"white"}
                          w={7}
                          h={7}
                          as={MdOutlineAddShoppingCart}
                        />
                      </Box>
                    </Center>
                    <Flex justifyContent={"center"} mt={1} p={2} gap={4}>
                      <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                        Add Products
                      </Text>
                    </Flex>
                  </Box>
                </Link>
              </Flex>
              {/* pie chart box  */}
              <Flex overflow={"hidden"} ml={5} justifyContent={"center"}>
                <Box mt={"-100px"}>
                  <ScaleFade initialScale={2} in={true}>
                    <PieChart />
                  </ScaleFade>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        // Mobile
        <Box>
          <AdminNav />
          {/* Cards  */}
          <Center mt={10}>
            <SimpleGrid columns={2} gap={4} alignItems={"center"}>
              {/* users card  */}
              <Link to={"/admin/users"}>
                <Box
                  pt={3}
                  borderRadius={"10px"}
                  background={
                    "url(https://media.istockphoto.com/id/912278192/vector/abstract-orange-background-vector.jpg?s=612x612&w=0&k=20&c=GG0Iu1--sa2ARNxxoYom1igGdgDpUGI8lWVPPaOgzRs=) center/cover no-repeat"
                  }
                  h={110}
                  w={170}
                  bgColor={"gray.200"}
                >
                  <Center>
                    <Box
                      borderRadius={"50%"}
                      background={
                        "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                      }
                      h={"50px"}
                      w={"50px"}
                    >
                      <Icon mt={2} color={"white"} w={7} h={7} as={BiUser} />
                    </Box>
                  </Center>
                  <Flex justifyContent={"center"} p={2} gap={2}>
                    <Text color={"white"} fontSize={"16px"} fontWeight={500}>
                      Total Users
                    </Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={500}>
                      {users && users.length}
                    </Text>
                  </Flex>
                </Box>
              </Link>

              {/* All Products card  */}
              <Link to={"/admin/allproducts"}>
                <Box
                  pt={3}
                  borderRadius={"10px"}
                  background={
                    "url(https://img.freepik.com/free-vector/gradient-background-green-tones_23-2148374530.jpg) center/cover no-repeat"
                  }
                  h={110}
                  w={170}
                  bgColor={"gray.200"}
                >
                  <Center>
                    <Box
                      borderRadius={"50%"}
                      background={
                        "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                      }
                      h={"50px"}
                      w={"50px"}
                    >
                      <Icon
                        color={"white"}
                        w={8}
                        h={8}
                        mt={2}
                        as={GiCardboardBoxClosed}
                      />
                    </Box>
                  </Center>
                  <Flex justifyContent={"center"} p={1} gap={1}>
                    <Text color={"white"} fontSize={"16px"} fontWeight={500}>
                      Total Products
                    </Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={500}>
                      {products && products.length}
                    </Text>
                  </Flex>
                </Box>
              </Link>
              {/* Order card  */}
              <Link to={"/admin/orders"}>
                <Box
                  borderRadius={"10px"}
                  background={
                    "url(https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-color-background-website-banner-graphic-design_120819-729.jpg) center/cover no-repeat"
                  }
                  pt={3}
                  h={110}
                  w={170}
                  bgColor={"gray.200"}
                >
                  <Center>
                    <Box
                      borderRadius={"50%"}
                      background={
                        "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                      }
                      h={"50px"}
                      w={"50px"}
                    >
                      <Icon
                        mt={3}
                        color={"white"}
                        w={8}
                        h={8}
                        as={CiDeliveryTruck}
                      />
                    </Box>
                  </Center>
                  <Flex justifyContent={"center"} mt={1} p={2} gap={4}>
                    <Text color={"white"} fontSize={"16px"} fontWeight={500}>
                      Total Orders
                    </Text>
                    <Text color={"white"} fontSize={"16px"} fontWeight={500}>
                      {order && order.length}
                    </Text>
                  </Flex>
                </Box>
              </Link>
              {/* Add product card  */}
              <Link to={"/admin/addproducts"}>
                <Box
                  borderRadius={"10px"}
                  background={
                    "url(https://uploads-ssl.webflow.com/5a9ee6416e90d20001b20038/62ee0d23043a368090e6f389_Rectangle%201%20-%202022-08-06T094136.523.svg) center/cover no-repeat"
                  }
                  pt={3}
                  h={110}
                  w={170}
                  bgColor={"gray.200"}
                >
                  <Center>
                    <Box
                      borderRadius={"50%"}
                      background={
                        "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                      }
                      h={"50px"}
                      w={"50px"}
                    >
                      <Icon
                        mt={3}
                        color={"white"}
                        w={7}
                        h={7}
                        as={MdOutlineAddShoppingCart}
                      />
                    </Box>
                  </Center>
                  <Flex justifyContent={"center"} mt={1} p={2} gap={4}>
                    <Text color={"white"} fontSize={"16px"} fontWeight={500}>
                      Add Products
                    </Text>
                  </Flex>
                </Box>
              </Link>
            </SimpleGrid>
          </Center>
          {/* pie chart box  */}
          <Flex overflow={"hidden"} ml={5} justifyContent={"center"}>
            <Box mt={"-100px"} mb={"-100px"} ml={"30px"}>
              <ScaleFade initialScale={2} in={true}>
                <PieChart />
              </ScaleFade>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Admin;
