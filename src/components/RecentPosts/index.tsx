import { data } from "@/data";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const RecentPosts = () => {
  const router = useRouter();

  return (
    <Flex bgColor={"#fff"} p={6} width={"auto"} flexDir={"column"} gap={5}>
      <Text fontWeight={"normal"} fontSize={32}>
        Recent Posts
      </Text>
      <Stack>
        {data.map((item: any, index: number) => (
          <Text
            key={index}
            fontSize={18}
            color={"blue"}
            cursor={"pointer"}
            textDecoration={"underline"}
            onClick={() => router.push(`/blog-details?blog=${item.title}`)}
          >
            {item.title}
          </Text>
        ))}
      </Stack>
    </Flex>
  );
};

export default RecentPosts;
