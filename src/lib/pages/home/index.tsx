import {
  Button,
  useDisclosure,
  Modal,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CTASection from "./components/CTASection";
import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";

import {
  usePioneer,
  AssetSelect,
  BlockchainSelect,
  WalletSelect,
  // @ts-ignore
} from "@pioneer-sdk/pioneer-react";

const Home = () => {
  const { state } = usePioneer();
  const { api, app, context, assetContext, blockchainContext, pubkeyContext } =
    state;
  const [address, setAddress] = useState("");
  const [modalType, setModalType] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log("pubkeyContext: ", pubkeyContext);
    setAddress(pubkeyContext?.master || pubkeyContext?.pubkey);
  }, [pubkeyContext]);

  const openModal = (type: any) => {
    setModalType(type);
    onOpen();
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => onClose()} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalType}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Render content based on modalType */}
            {modalType === "Select wallet" && (
              <div>
                <WalletSelect onClose={onClose}></WalletSelect>
              </div>
            )}
            {modalType === "Select Asset" && (
              <div>
                <AssetSelect onClose={onClose}></AssetSelect>
              </div>
            )}
            {modalType === "Select Blockchain" && (
              <div>
                <BlockchainSelect onClose={onClose}></BlockchainSelect>
              </div>
            )}
            {modalType === "View Address" && <div>address: {address}</div>}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      Context: {context}
      <Button onClick={() => openModal("Select wallet")}>Select wallet</Button>
      <br />
      Asset Context: {assetContext?.name}
      <Button onClick={() => openModal("Select Asset")}>Select Asset</Button>
      <br />
      Blockchain Context: {blockchainContext?.name}
      <Button onClick={() => openModal("Select Blockchain")}>
        Select Blockchain
      </Button>
      <br />
      Address: {pubkeyContext?.master || pubkeyContext?.pubkey}
      <Button onClick={() => openModal("View Address")}>View Address</Button>
      <br />
      <br />
      <SomeText />
      <SomeImage />
      <CTASection />
    </div>
  );
};

export default Home;
