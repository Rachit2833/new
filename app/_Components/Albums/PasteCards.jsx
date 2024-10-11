"use client";

import { useUser } from "@/app/_lib/context";
import Uploadcard from "../UploadCard";
import ImageCard from "../ImageCard";
import { Suspense, useEffect, useState } from "react";
import useFaceApi from "@/app/hooks/FaceApi";
import * as faceapi from "@vladmandic/face-api";

function PasteCards() {
   const { handlePaste, images } = useUser();
   const { isModelsLoaded, error } = useFaceApi();
   const [processedImages, setProcessedImages] = useState([]);

   const arrayImage = [
      "/labels/Rachit/1.JPG", "/labels/Rachit/2.JPG",
      "/labels/Rohit/1.JPG", "/labels/Rohit/2.webp",
      "/labels/Virat/1.png", "/labels/Virat/2.webp",
      "/dune.jpg"
   ];

   useEffect(() => {
      document.addEventListener("paste", handlePaste);
      return () => {
         document.removeEventListener("paste", handlePaste);
      };
   }, [handlePaste]);

   useEffect(() => {
      if (isModelsLoaded) {
         const processImages = async () => {
            const labeledDescriptors = await checkLabels();
            const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
            const results = await Promise.all(
               arrayImage.map(async (item) => {
                  const image = await faceapi.fetchImage(item);
                  const detection = await faceapi
                     .detectSingleFace(image)
                     .withFaceLandmarks()
                     .withFaceDescriptor();
                  if (detection) {
                     const bestMatch = faceMatcher.findBestMatch(detection.descriptor);
                     return bestMatch.label !== "unknown" ? item : null;
                  }
                  return null;
               })
            );
            setProcessedImages(results.filter((img) => img !== null));
         };
         processImages();
      }
   }, [isModelsLoaded]);

   const checkLabels = async () => {
      const labels = ["Rachit", "Rohit", "Virat"];
      const labeledDescriptors = await Promise.all(
         labels.map(async (label) => {
            const descriptions = [];
            for (let i = 1; i <= 2; i++) {
               try {
                  const image = await faceapi.fetchImage(`/labels/${label}/${i}.JPG`)
                     .catch(() => faceapi.fetchImage(`/labels/${label}/${i}.png`))
                     .catch(() => faceapi.fetchImage(`/labels/${label}/${i}.webp`));
                  const detection = await faceapi
                     .detectSingleFace(image)
                     .withFaceLandmarks()
                     .withFaceDescriptor();
                  if (detection) {
                     descriptions.push(detection.descriptor);
                  }
               } catch (err) {
                  console.error("Error fetching image:", err);
               }
            }
            return new faceapi.LabeledFaceDescriptors(label, descriptions);
         })
      );
      return labeledDescriptors;
   };

   return (
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-0">
         {images.map((item, index) => (
            <Uploadcard key={index} img={item.imageUrl} />
         ))}
     
            {error ? (
               <div className="col-span-full text-red-600">{error}</div>
            ) : (
               processedImages.map((item, index) => (
                  <ImageCard key={index} image={item} />
               ))
            )}

      </div>
   );
}

export default PasteCards;