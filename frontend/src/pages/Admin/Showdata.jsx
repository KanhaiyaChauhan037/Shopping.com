import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Image,
  TableContainer,
  Td,
  Tr,
  Tbody,
  Table,
  Flex,ModalFooter
} from "@chakra-ui/react";

const Showdata = ({ title, data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Text onClick={onOpen} cursor={"pointer"} _hover={{ color: "tomato" }}>
        {title}
      </Text>

      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Product Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box display={"flex"} gap="10px" mb={"10px"}>
              {/* images part here  */}
              <Image w="25%" h="80px" src={data && data.img[0]} />
              <Image w="25%" h="80px" src={data && data.img[1]} />
              <Image w="25%" h="80px" src={data && data.img[2]} />
              <Image w="25%" h="80px" src={data && data.img[3]} />
              <Image w="25%" h="80px" src={data && data.img[4]} />
              {/* {data && data.img[0]} */}
            </Box>
            <Box border="1px dotted gray">
              <Box>
                <Box>
                  <TableContainer>
                    <Table variant="striped" colorScheme="gray">
                      <Tbody fontWeight={"500"} fontSize={"14px"}>
                        {/* <Flex>
                          <Box> */}
                        <Tr>
                          <Td>Title:</Td>

                          <Td>{data.title}</Td>
                        </Tr>
                        <Tr>
                          <Td>Brand:</Td>

                          <Td>{data.brand}</Td>
                        </Tr>
                        <Tr>
                          <Td>Category:</Td>
                          <Td>{data.category}</Td>
                        </Tr>
                        <Tr>
                          <Td>Price:</Td>
                          <Td>{data.price}</Td>
                        </Tr>
                        <Tr>
                          <Td>OFF:</Td>
                          <Td>{data.off}</Td>
                        </Tr>
                        <Tr>
                          <Td>Rating:</Td>
                          <Td>{data.rating}</Td>
                        </Tr>
                        <Tr>
                          <Td>Reviews:</Td>
                          <Td>{data.reviews}</Td>
                        </Tr>
                        {/* </Box> */}
                        {/* <Box borderLeft={"1px solid gray"}> */}
                        <Tr>
                          <Td>Desc1:</Td>

                          <Td>{data.desc1}</Td>
                        </Tr>
                        <Tr>
                          <Td>Desc2:</Td>

                          <Td>{data.desc2}</Td>
                        </Tr>
                        <Tr>
                          <Td>Desc3:</Td>
                          <Td>{data.desc3}</Td>
                        </Tr>
                        <Tr>
                          <Td>Desc4:</Td>
                          <Td>{data.desc4}</Td>
                        </Tr>
                        {/* </Box> */}
                        {/* </Flex> */}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box>
                </Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Showdata;
