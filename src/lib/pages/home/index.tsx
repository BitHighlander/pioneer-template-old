import React, { useEffect, useState } from "react";
import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";
import { usePioneer } from "pioneer-react";

const Home = () => {
  const { state } = usePioneer();
  const { api, app, context, assetContext, blockchainContext, pubkeyContext } = state;
  const [address, setAddress] = useState("");

  useEffect(() => {
    console.log("pubkeyContext: ", pubkeyContext);
    setAddress(pubkeyContext.master || pubkeyContext.pubkey);
  }, [pubkeyContext]);

  return (
    <div>
      Context: {context}
      <br />
      Asset Context: {assetContext?.name}
      <br />
      Blockchain Context: {blockchainContext?.name}
      <br />
      Address: {address}
      <br />
      <SomeText />
      <SomeImage />
      <CTASection />
    </div>
  );
};

export default Home;
