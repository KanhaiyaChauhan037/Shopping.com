import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Center,
  Spinner,
  useToast,
  Button,
} from "@chakra-ui/react";
import Editmodal from "./Editmodal";
import Showdata from "./Showdata";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { site } from "../../components/backend";
import AdminNav from "./AdminNav";

const getAllProducts = async () => {
  const res = await axios.get(`${site}/products`);
  let data = res.data;
  return data;
};

const deleteProduct = async (id) => {
  let toki = localStorage.getItem("token");
  console.log("id", id);
  const res = await axios.delete(`${site}/products/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
};

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [showmodal, setshowmodal] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    handleTheData();
  }, []);

  const handleTheData = async () => {
    setLoading(true);
    await getAllProducts().then((res) => setData(res));
    setLoading(false);
  };

  const handleTheDelete = async (id) => {
    console.log(id);
    deleteProduct(id)
      .then((res) =>
        toast({
          title: res,
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      )
      .catch((e) =>
        toast({
          title: e,
          position: "top",
          status: "warning",
          duration: 2000,
          isClosable: true,
        })
      );
    handleTheData();
  };
  console.log("allproducts", data);
    const handleshow = (_id) => {
    const modald = data.find((el) => el._id === _id);
    setshowmodal(modald);
  };
 
  
  return (
    <Box pt={10}>
      <AdminNav />
      {/* table */}
      {loading && (
        <Center mt={20} mb={20}>
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
        </Center>
      )}
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              {loading == false && (
                <Tr>
                  <Th>Product ID</Th>
                  <Th>Product Name</Th>
                  <Th>Product Image</Th>
                  <Th>Product category</Th>
                  <Th>Delete</Th>
                  <Th>Edit</Th>
                </Tr>
              )}
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((post, i) => (
                  <Tr key={i}>
                    <Td>
                      <Text
                        width={"180px"}
                        fontSize={"12px"}
                        fontWeight={"500"}
                      >
                        {post._id}
                      </Text>
                    </Td>
                    <Td>
                      <Text
                        width={"300px"}
                        overflow={"hidden"}
                        fontSize={"12px"}
                        fontWeight={"500"}
                        onClick={() => handleshow(post._id)}
                      >
                        {/* {post.title} */}
                        <Showdata title={post.title} data={showmodal} />
                      </Text>
                    </Td>
                    <Td color={"blue"}>
                      <a href={post.img[0]} target="_blank">
                        View Image
                      </a>
                    </Td>
                    <Td>{post.category}</Td>
                    <Td
                      style={{ cursor: "pointer" }}
                      color={"blue"}
                      onClick={() => handleTheDelete(post._id)}
                    >
                      <Button color={"white"} bgColor={"red.300"} size={"sm"}>
                        Delete
                      </Button>
                    </Td>
                    <Td>
                      <Editmodal ID={post._id} data={data} />
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AllProducts;
