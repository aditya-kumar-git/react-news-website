import gsap from "gsap";
import React, { useEffect } from "react";
import { LoaderContainer, Loader } from "./styles";

export default function Loading() {
  useEffect(() => {
    var tl = gsap.timeline();
    tl.from(".animated", {
      duration: 1,
      height:'9rem',
      width:'9rem',
      repeat: -1,
    });
  }, []);
  return (
    <LoaderContainer>
      <Loader className="animated">Loading</Loader>
    </LoaderContainer>
  );
}
