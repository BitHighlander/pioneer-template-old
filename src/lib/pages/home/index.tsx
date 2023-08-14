import { useEffect, useState } from "react";
import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { usePioneer } from "pioneer-react";

const Home = () => {
  const { state } = usePioneer();
  const { app, context, assetContext, blockchainContext, pubkeyContext } = state;
  const [address, setAddress] = useState("");

  useEffect(() => {
    const addressContext = app.pubkeyContext.master || app.pubkeyContext.pubkey;
    setAddress(addressContext);
  }, [app, app?.pubkeyContext, app?.pubkeyContext.address, pubkeyContext]);


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
