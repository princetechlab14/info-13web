import { Container, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CardSection from "../CardSection";
import { data } from "@/data";
import RecentSection from "../RecentSection";
import { useRouter } from "next/router";

const Homepage = () => {
  const router = useRouter();

  return (
    <Container maxW={"7xl"} py={20}>
      <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
        <Flex width={{ md: "70%" }} flexDir={"column"} gap={6}>
          <Flex
            bgColor={"#ffff"}
            p={10}
            display={
              router.pathname.includes("uncategorized") ? "block" : "none"
            }
          >
            <Text fontSize={32} fontWeight={"normal"}>
              Uncategorized
            </Text>
          </Flex>
          <Stack height={"20vh"}></Stack>
          {data.map((item: any, index: number) => (
            <CardSection item={item} key={index} />
          ))}
        </Flex>
        <Flex width={{ md: "30%" }} flexDir={"column"} gap={4}>
          <RecentSection />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Homepage;
