import {
  Container,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const GoogleAd = dynamic(() => import("../GoogleAd"), { ssr: false });

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <Flex justifyContent={"center"}>
        <GoogleAd slot="9" width={728} height={90} />
      </Flex>
      <Stack padding={6} bgColor={"#fff"}>
        <Container maxW={"7xl"}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading cursor={"pointer"} size={"md"} onClick={() => router.push("/")}>
            techbuzzmedia
            </Heading>
          </Flex>
        </Container>
      </Stack>
    </>
  );
};

export default Navbar;
