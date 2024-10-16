"use client";

import { useUser } from "@/app/_lib/context";
import Uploadcard from "../UploadCard";
import ImageCard from "../ImageCard";
import { Suspense, useEffect, useState } from "react";
import useFaceApi from "@/app/hooks/FaceApi";
import * as faceapi from "@vladmandic/face-api";

function PasteCards() {
   const { handlePaste, images } = useUser();

   const arrayImage = [
      "/labels/Rachit/1.JPG", "/labels/Rachit/2.JPG",
      "/labels/Rohit/1.JPG", "/labels/Rohit/2.webp",
      "/labels/Virat/1.png", "/labels/Virat/2.webp",
      "/labels/Virat/3.JPG",
      "/dune.jpg"
   ];

   useEffect(() => {
      document.addEventListener("paste", handlePaste);
      return () => {
         document.removeEventListener("paste", handlePaste);
      };
   }, [handlePaste]);

 
   return (
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 ">
         {images.map((item, index) => (
            <Uploadcard key={index} img={item.imageUrl} />
         ))}
     
            {
               arrayImage.map((item, index) => (
                  <ImageCard key={index} image={item} />
               ))
            }

      </div>
   );
}

export default PasteCards;