import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import RecentSection from "../RecentSection";
import { useRouter } from "next/router";
import { data } from "@/data";
import CommentSection from "../CommentSection";
import dynamic from "next/dynamic";

const GoogleAd = dynamic(() => import("../GoogleAd"), { ssr: false });

const BlogDetail = () => {
  const router = useRouter();
  const { blog }: any = router.query;
  const [blogData, setBlogData] = useState<any>({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const savedIndex = localStorage.getItem("currentIndex");
    if (savedIndex !== null) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling behavior
    });
  }, []);

  useEffect(() => {
    if (blog) {
      const filterData = data.find(
        (item) => item.title.toLowerCase() === blog.toLowerCase()
      );
      if (filterData) {
        setBlogData(filterData);
      }
    }
  }, [blog]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      const nextTitle = data[nextIndex].title;
      localStorage.setItem("currentIndex", nextIndex.toString());
      setCurrentIndex(nextIndex);
      router.push(
        `/blog-details?blog=${encodeURIComponent(nextTitle)}`,
        undefined,
        { shallow: true }
      );
    }, 11500);

    return () => clearInterval(interval);
  }, [currentIndex, router]);

  return (
    <Container maxW={"7xl"} py={20}>
      <Flex gap={4} flexDir={{ base: "column", md: "row" }}>
        <Flex width={{ md: "70%" }} flexDir={"column"} gap={6}>
          <GoogleAd slot="10" width={750} height={300} />
          {/* <Stack height={"20vh"}></Stack> */}
          <Flex flexDir={"column"} gap={8} bgColor={"#ffff"} p={10}>
            <Stack>
              <Text fontSize={32} fontWeight={"normal"}>
                {blogData?.title}
              </Text>
              <Text>{blogData?.date}</Text>
            </Stack>
            <GoogleAd slot="10" width={750} height={300} />
            {blogData?.firstDescription?.map((des: any, index: number) => (
              <Text key={index}>{des}</Text>
            ))}
            <GoogleAd slot="10" width={750} height={300} />
            {blogData?.secondDescription?.map((des: any, index: number) => (
              <Text key={index}>{des}</Text>
            ))}
            <GoogleAd slot="10" width={750} height={300} />
            {blogData?.ThirdDescription?.map((des: any, index: number) => (
              <Text key={index}>{des}</Text>
            ))}
          </Flex>
          <CommentSection />
        </Flex>
        <Flex width={{ md: "30%" }} flexDir={"column"} gap={4}>
          <RecentSection />
        </Flex>
      </Flex>
    </Container>
  );
};

export default BlogDetail;
