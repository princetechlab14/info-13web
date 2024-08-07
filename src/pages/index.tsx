import Homepage from "@/components/Homepage";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.reload();
    }, 12000);
    
  }, [router]);

  return (
    <Layout>
      <Homepage />
    </Layout>
  );
}
