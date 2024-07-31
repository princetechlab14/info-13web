// components/GoogleAd.js
import { Flex } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const GoogleAd = ({ slot, width, height }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <Flex overflow="hidden">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          display: "block",
          width: width,
          height: height,
          overflow: "hidden",
        }}
        data-ad-client={"ca-pub-7494744911514571"}
        data-ad-slot={slot}
        data-ad-format={"auto"}
      ></ins>
    </Flex>
  );
};

export default GoogleAd;
