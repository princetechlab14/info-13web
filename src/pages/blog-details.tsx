import React, { useEffect } from "react";
import Layout from "@/components/Layout";
import BlogDetail from "@/components/BlogDetail";
import { useRouter } from "next/router";

const BlogDetails = () => {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.reload();
    }, 12000);
    
  }, [router]);

  return (
    <Layout>
      <BlogDetail />
    </Layout>
  );
};

export default BlogDetails;
