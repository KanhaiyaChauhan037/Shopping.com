import { Center, Flex, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { site } from "./backend";

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

const PieChart = () => {
  const [order, setOrder] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const data = [
    ["Task", "Hours per Day"],
    ["Products", products.length],
    ["Users", users.length],
    ["Orders", order.length],
  ];

  const options = {
    pieHole: 0.4,
    is3D: false,
  };
  return (
    <>
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
      <Chart
        chartType="PieChart"
        width="600px"
        height="600px"
        data={data}
        options={options}
      />
    </>
  );
};

export default PieChart;
