import {
  Box,
  Button,
  Center,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Tr,
  useDisclosure,
  useFormControlStyles,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { site } from "../../components/backend";
import AddressCard, { getAddress } from "./AddressCard";
import AdminNav from "./AdminNav";

const order = async () => {
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

const deleteProduct = async (id) => {
  let toki = localStorage.getItem("token");
  console.log("id", id);
  const res = await axios.delete(`${site}/admin/order/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
};

const Order = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [Id,setId] = useState("")

  useEffect(() => {
    handleTheData();
  }, []);

  const handleTheData = async () => {
    setLoading(true);
    order().then((res) => setData(res));
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

  const hanldeTheAddress = (id)=>{
    onOpen()
    setId(id)
    console.log(Id)
  }

  return (
    <Box pt={10}>
      <AdminNav />
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
                  <Th>order ID</Th>
                  <Th>name</Th>
                  <Th>date</Th>
                  <Th>Address Details</Th>
                  <Th>Ordered Products</Th>
                  <Th>Total</Th>
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
                        borderColor={"green"}
                      >
                        {post._id}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize={"12px"} fontWeight={"500"}>
                        {post.name}
                      </Text>
                    </Td>
                    <Td>
                      <Text
                        fontSize={"12px"}
                        width={"210px"}
                        overflow={"hidden"}
                        fontWeight={500}
                      >
                        {post.date}
                      </Text>
                    </Td>
                    <Td>
                      <Button
                        size={"sm"}
                        bgColor={"orange.300"}
                        _hover={{}}
                        color={"white"}
                        onClick={()=>hanldeTheAddress(post._id)}
                        // onClick={onOpen}
                        // onClick={hanldeTheAddress}
                      >
                        <Text fontSize={"12px"}>Show Address</Text>
                      </Button>
                      {/* Address  */}
                    </Td>
                    <Td>
                      <Button ml={5}
                      onClick={()=>handleTheDelete(post._id)}
                        size={"sm"}
                        bgColor={"orange.300"}
                        _hover={{}}
                        color={"white"}
                      >
                        <Text fontSize={"12px"}>Delete</Text>
                      </Button>
                     
                    </Td>
                    <Td>
                      <Text fontSize={"12px"} fontWeight={500}>
                        ₹{" "}
                        {post.totalPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </Text>
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <AddressCard id={Id} cancelRef={cancelRef} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Box>
  );
};

export default Order;
