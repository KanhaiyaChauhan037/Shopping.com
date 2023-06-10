import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  Text,
  Box,
  Flex,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { site } from "../../components/backend";

export const getAddress = async (id) => {
  console.log(id);
  let toki = localStorage.getItem("token");
  const res = await axios.get(`${site}/admin/orders/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
  //   console.log(data)
};

const AddressCard = ({ id, isOpen, onOpen, onClose, cancelRef }) => {
  const [data, setData] = useState();
  console.log(id);

  useEffect(() => {
    getAddress(id).then((res) => setData(res));
  }, [id]);

  //   console.log(data);
  //   console.log("cart", data.cart);
  return (
    <>
      <AlertDialog
        // motionPreset="slideInBottom"
        motionPreset="scale"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader fontSize={"18px"}>Order Details</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            {/* <Flex> */}
            <Text fontSize={"14px"} fontWeight={"500"}>
              Address
            </Text>
            {data !== undefined && (
              <Box>
                {data && (
                  <Flex p={2} gap={10} border={"1px solid"} borderColor={"gray.200"}>
                    <Box>
                      <Text fontWeight={500} fontSize={"13px"}>
                        Name : {data.name}
                      </Text>
                      <Text fontWeight={500} fontSize={"13px"}>
                        Mobile No : {data.mobileNumber}
                      </Text>
                      <Text fontWeight={500} fontSize={"13px"}>
                        Pin Code : {data.pinCode}
                      </Text>
                      <Text fontWeight={500} fontSize={"13px"}>
                        House No : {data.houseNo}
                      </Text>
                    </Box>
                    <Box>
                      <Text fontWeight={500} fontSize={"13px"}>
                        Area : {data.area}
                      </Text>
                      <Text fontWeight={500} fontSize={"13px"}>
                        Landmark : {data.landmark}
                      </Text>
                      <Text fontWeight={500} fontSize={"13px"}>
                        State : {data.state}
                      </Text>
                      <Text fontWeight={500} fontSize={"13px"}>
                        User-Id : {data.userId}
                      </Text>
                    </Box>
                  </Flex>
                )}
                <Box mt={1} border={"1px solid"} borderColor={"gray.200"}>
                  <Text
                    fontWeight={500}
                    noOfLines={1}
                    fontSize={"13px"}
                  >
                    Products
                  </Text>
                  {data.cart &&
                    data.cart.map((post, i) => (
                      <Flex  borderBottomColor={"gray.100"} p={1}>
                        <Box w={"15%"}>
                          <Image w={"40px"} src={post.img[0]} />
                        </Box>
                        <Box w={"85%"}>
                          <Text
                            fontWeight={500}
                            noOfLines={1}
                            color={"gray.600"}
                            fontSize={"13px"}
                          >
                            {post.title}
                          </Text>
                          <Text
                            fontWeight={500}
                            color={"gray.600"}
                            fontSize={"13px"}
                          >
                            {"₹"}{" "}{post.price2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </Text>
                        </Box>
                      </Flex>
                    ))}
                </Box>
              </Box>
            )}
            {/* </Flex> */}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AddressCard;
