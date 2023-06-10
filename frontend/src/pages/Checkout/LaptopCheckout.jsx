import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { site } from "../../components/backend";

const postOrder = async ({ cart, formstate,totalPrice }) => {
  let toki = localStorage.getItem("token");
  console.log(cart, formstate ,"totalprice",totalPrice);
  let res = await axios.post(
    `${site}/admin/post_orders`,
    { cart, ...formstate ,totalPrice },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: toki,
      },
    }
  );
  return res.data;
};

const checkout = async () => {
  let toki = localStorage.getItem("token");
  let res = await axios.delete(`${site}/carts/checkout`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  return res.data;
};
const initState = {
  name: "",
  mobileNumber: "",
  pinCode: "",
  houseNo: "",
  area: "",
  landmark: "",
  state: "",
  date : new Date().toDateString() + " " + new Date().toTimeString()
};

const LaptopCheckout = ({
  handleTheFetch,
  cart,
  totalPrice,
  isOpen,
  onOpen,
  onClose,
  cancelRef,
}) => {
  const [formstate, setFormstate] = useState(initState);
  const toast = useToast()
  console.log("User cart=>", cart);

  const handleTheChange = (e) => {
    setFormstate({ ...formstate, [e.target.name]: e.target.value });
  };
  const handleTheCheckout = () => {
    if (
      formstate.name &&
      formstate.mobileNumber &&
      formstate.pinCode &&
      formstate.houseNo &&
      formstate.area &&
      formstate.landmark && 
      formstate.state
    ) {

      console.log("formstate",formstate)
      postOrder({ cart, formstate ,totalPrice }).then((res) => console.log(res));
      checkout().then((res) => toast({
        title: res,
        position: "top",
        status: "warning",
        duration: 1500,
        isClosable: true,
      }));
      handleTheFetch();
      onClose()
    } else {
      toast({
        title: "Please Fill The Required Fields",
        position: "top",
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    }
    handleTheFetch();
  };
  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Checkout</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Input
              mt={1}
              mb={1}
              name="name"
              onChange={handleTheChange}
              placeholder="Name"
            />
            <Input
              mt={1}
              mb={1}
              name="mobileNumber"
              onChange={handleTheChange}
              placeholder="Mobile Number"
            />
            <Input
              mt={1}
              mb={1}
              name="pinCode"
              onChange={handleTheChange}
              placeholder="Pincode"
            />
            <Input
              mt={1}
              mb={1}
              name="houseNo"
              onChange={handleTheChange}
              placeholder="Flat, House no., Building, Company, Apartment"
            />
            <Input
              mt={1}
              mb={1}
              name="area"
              onChange={handleTheChange}
              placeholder="Area, Street, Sector, Village"
            />
            <Input
              mt={1}
              mb={1}
              name="landmark"
              onChange={handleTheChange}
              placeholder="Landmark"
            />
            <Input
              mt={1}
              mb={1}
              name="state"
              onChange={handleTheChange}
              placeholder="State"
            />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              onClick={handleTheCheckout}
              bgColor={"purple.400"}
              color={"white"}
              ml={3}
            >
              Proceed to Checkout
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default LaptopCheckout;
