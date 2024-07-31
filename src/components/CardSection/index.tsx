import { Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaComments } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";

const CardSection = ({ item }: any) => {
  const router = useRouter();
  const WORD_LIMIT = 50;

  const truncateDescription = (description: string): string => {
    const words = description.split(" ");
    if (words.length > WORD_LIMIT) {
      return words.slice(0, WORD_LIMIT).join(" ") + "...";
    }
    return description;
  };

  return (
    <Flex flexDir={"column"} gap={8} bgColor={"#ffff"} p={10}>
      <Stack>
        <Text fontSize={32} fontWeight={"normal"}>
          {item.title}
        </Text>
        <Text>{item.date}</Text>
      </Stack>
      <Text>
        {item?.firstDescription &&
          truncateDescription(item?.firstDescription[0])}
        <span
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => router.push(`/blog-details?blog=${item.title}`)}
        >
          {" "}
          Read more
        </span>
      </Text>
      <Stack>
        <Flex gap={2} alignItems={"center"}>
          <Icon as={GoFileDirectoryFill} />
          <Text
            color={"blue"}
            textDecoration={"underline"}
            cursor={"pointer"}
            onClick={() => router.push("/uncategorized")}
          >
            {item.category}
          </Text>
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Icon as={FaComments} />
          <Text
            color={"blue"}
            textDecoration={"underline"}
            cursor={"pointer"}
            onClick={() => router.push(`/blog-details?blog=${item.title}#COMMENT`)}
          >
            Leave a comment
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default CardSection;
