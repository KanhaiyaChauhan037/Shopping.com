import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Center,
  Flex,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { site } from "../../components/backend";

const initState = {
  title: "",
  price: "",
  price2: "",
  strik: "",
  desc1: "",
  desc2: "",
  desc3: "",
  desc4: "",
  rating: Math.floor(Math.random() * (5 - 3 + 1) + 1),
  reviews: `${Math.floor(
    Math.random() * (20 - 10 + 1) + 10
  )} Ratings & ${Math.floor(Math.random() * (990 - 110 + 1) + 10)} Reviews`,
  off: `${Math.floor(Math.random() * (20 - 10 + 1) + 10)}% off`,
  category: "",
  brand: "",
};

function Editmodal({ ID, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [formstate, setFormstate] = useState(initState);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const toast = useToast();

  useEffect(() => {
    const contact = data.find((contact) => contact._id === ID);
    if (contact) {
      setFormstate({ ...contact });
      setImg1(contact.img[0] || "");
      setImg2(contact.img[1] || "");
      setImg3(contact.img[2] || "");
      setImg4(contact.img[3] || "");
    }
  }, [data, ID]);

  const handleTheChange = (e) => {
    setFormstate({ ...formstate, [e.target.name]: e.target.value });
  };

  const addProduct = async (formdata) => {
    let toki = localStorage.getItem("token");
    const res = await axios.put(`${site}/products/${ID}`, formdata, {
      headers: {
        "Content-Type": "application/json",
        Authorization: toki,
      },
    });
    const data = res.data;
    console.log(data);
    console.log("rodata", formdata);
    return data;
  };

  const handleTheSubmit = () => {
    if (
      formstate.title &&
      formstate.price &&
      formstate.price2 &&
      formstate.desc1 &&
      formstate.desc2 &&
      formstate.desc3 &&
      formstate.desc4 &&
      formstate.strik &&
      formstate.category &&
      formstate.brand &&
      img1 &&
      img2 &&
      img3 &&
      img4
    ) {
      console.log("edit", { ...formstate, img: [img1, img2, img3, img4] });
      addProduct({ ...formstate, img: [img1, img2, img3, img4] })
        .then((res) =>
          toast({
            title: "Product Edit successfully",
            position: "top",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
         
        )
        .catch((e) =>
          toast({
            title: "Product Edit successfully",
            position: "top",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
        );
    } else {
      toast({
        title: "Please Fill The Required Fields",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
     onClose();
  };

  return (
    <Box>
      <Button color={"white"} bgColor={"red.300"} size={"sm"} onClick={onOpen}>
        Edit
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Edit products</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex>
              <Flex direction={"column"} rowGap={"5px"} w="250px">
                <Input
                  onChange={handleTheChange}
                  name="title"
                  placeholder="Product name"
                  value={formstate.title}
                />
                <Input
                  onChange={handleTheChange}
                  name="price"
                  placeholder="Product main price"
                  value={formstate.price}
                />
                <Input
                  onChange={handleTheChange}
                  name="price2"
                  placeholder="Product discounted price"
                  value={formstate.price2}
                />

                <Input
                  onChange={handleTheChange}
                  name="strik"
                  placeholder="Product Real price"
                  value={formstate.strik}
                />

                <Select
                  name="category"
                  onChange={handleTheChange}
                  placeholder="Choose category"
                  value={formstate.category}
                >
                  <option value="Mobile">Mobile</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Electronic&Appliances">
                    Electronic&Appliances
                  </option>
                  <option value="Home">Home</option>
                </Select>
                <Select
                  name="brand"
                  onChange={handleTheChange}
                  placeholder="Choose brand"
                  value={formstate.brand}
                >
                  <option value="vivo">Vivo (Mobile)</option>
                  <option value="samsung">Samsung (Mobile)</option>
                  <option value="mi">mi (Mobile)</option>
                  <option value="apple">apple (Mobile)</option>
                  <option value="motorola">motorola (Mobile)</option>
                  <option value="realme">realme (Mobile)</option>
                  <option value="google">google (Mobile)</option>
                  <option value="Detergents">Detergents (Grocery)</option>
                  <option value="Pakage food">Pakage food (Grocery)</option>
                  <option value="Washing Bars">Washing Bars (Grocery)</option>
                  <option value="Android TV">
                    Android TV (Electronics & Appliances)
                  </option>
                  <option value="Kitchen Appliances">
                    Kitchen Appliances (Electronics & Appliances)
                  </option>
                  <option value="Washing Machine">
                    Washing Machine (Electronics & Appliances)
                  </option>
                  <option value="Iron">Iron (Electronics & Appliances)</option>
                  <option value="Blankets">Blankets {""}(Home)</option>
                  <option value="Diwan Sets">Diwan Sets {""}(Home)</option>
                  <option value="Bedding Sets">Bedding Sets {""}(Home)</option>
                </Select>
                <Input
                  onChange={handleTheChange}
                  name="desc1"
                  placeholder="Product description 1"
                  value={formstate.desc1}
                />
                <Input
                  onChange={handleTheChange}
                  name="desc2"
                  placeholder="Product description 2"
                  value={formstate.desc2}
                />
              </Flex>
              <Flex flexDirection={"column"} rowGap={"5px"} ml="10px" w="250px">
                <Input
                  onChange={handleTheChange}
                  name="desc3"
                  placeholder="Product description 3"
                  value={formstate.desc3}
                />
                <Input
                  onChange={handleTheChange}
                  name="desc4"
                  placeholder="Product description 4"
                  value={formstate.desc4}
                />
                <Text textAlign={"left"} ml={1} fontWeight={500} color={"gray"}>
                  Product Image
                </Text>
                <Input
                  onChange={(e) => setImg1(e.target.value)}
                  placeholder="Product image 1"
                  value={img1}
                />
                <Input
                  onChange={(e) => setImg2(e.target.value)}
                  placeholder="Product image 2"
                  value={img2}
                />
                <Input
                  onChange={(e) => setImg3(e.target.value)}
                  placeholder="Product image 3"
                  value={img3}
                />
                <Input
                  onChange={(e) => setImg4(e.target.value)}
                  placeholder="Product image 4"
                  value={img4}
                />
              </Flex>
            </Flex>
            <Button  w="100px" ml="40%" mt={10} bg={"green.400"} color={"white"} _hover={{backgroundColor:"green",color:"white"}} onClick={handleTheSubmit}>
              Edit
            </Button>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Editmodal;
