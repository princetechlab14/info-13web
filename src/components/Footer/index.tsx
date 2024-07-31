import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";

const GoogleAd = dynamic(() => import("../GoogleAd"), { ssr: false });
const Footer = () => {
  return (
    <>
      <Flex justifyContent={"center"} padding={6} bgColor={"#fff"}>
        <Text>© Copyright 2024 by techbuzzmedia</Text>
      </Flex>
      <Flex justifyContent={"center"}>
        <GoogleAd slot="11" width={970} height={250} />
      </Flex>
    </>
  );
};

export default Footer;
