import { Box, Flex, useMediaQuery} from "@chakra-ui/react";
import React, { useState } from "react";
import NormalNav from "../../components/NormalNav";
import FilterHomePro from "./FilterHomePro";
import LaptopHomePro from "./LaptopHomePro";
import MobileHomePro from "./MobileHomePro";


const HomePro = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 880px)')
  const [price,setPrice] = useState("")
  const [category,setCategory] = useState("")
  const handle = (pricearg,categoryarg)=>{
    setPrice(pricearg)
    setCategory(categoryarg)
  }
  return (
    <Box pt={10}>
      {isLargerThan1280 ? <Box>
      <NormalNav />
      <Flex justifyContent={"space-between"} ml={"8px"} mt={"10px"} mr={"8px"}>
        <FilterHomePro handle={handle} />
          {/* < /> */}
        {/* Products  */}
        <LaptopHomePro price={price} category={category} />
      </Flex>
      </Box> : <MobileHomePro/>}
      
    </Box>
  );
}

export default HomePro
