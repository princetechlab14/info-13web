import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import RecentPosts from "../RecentPosts";
import dynamic from "next/dynamic";

const GoogleAd = dynamic(() => import("../GoogleAd"), { ssr: false });

const RecentSection = () => {
  return (
    <>
      <GoogleAd slot="8" width={300} height={600} />
      <RecentPosts />
      <GoogleAd slot="8" width={300} height={600} />
      <Flex p={6} width={"auto"} flexDir={"column"} gap={3} bgColor={"#fff"}>
        <Text fontWeight={"normal"} fontSize={32}>
          Recent Comments
        </Text>
        <Text>No comments to show.</Text>
      </Flex>
      <GoogleAd slot="12" width={300} height={600} />
    </>
  );
};

export default RecentSection;
