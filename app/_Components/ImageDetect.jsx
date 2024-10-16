"use client"
import { useEffect, useState } from "react";
import ImageCard from "./ImageCard"
import Uploadcard from "./UploadCard"
import useFaceApi from "@/app/hooks/FaceApi";
import * as faceapi from "@vladmandic/face-api";
import { usePathname } from "next/navigation";
function ImageDetect() {
   const [processedImages, setProcessedImages] = useState([]);
   const {isModelsLoaded,error}=useFaceApi()
   const arrayImage = [
      "/labels/Rachit/1.JPG", "/labels/Rachit/2.JPG",
      "/labels/Rohit/1.JPG", "/labels/Rohit/2.webp",
      "/labels/Virat/1.png", "/labels/Virat/2.webp",
      "/labels/Virat/3.JPG",
      "/dune.jpg"
   ];
   const pathName = usePathname();
   const id = pathName.split('/').pop(); 
   console.log(id);// Gets the last part of the path
   useEffect(() => {
      if (isModelsLoaded) {
         const processImages = async () => {
            let labeledDescriptors = localStorage.getItem("identifiers");
            labeledDescriptors = await JSON.parse(labeledDescriptors);

            // Check if labeledDescriptors is null or undefined
            if (!labeledDescriptors) {
               console.log("label checking");
               labeledDescriptors = await checkLabels();
            }

            // Reconstruct labeledDescriptors for FaceMatcher
            labeledDescriptors = labeledDescriptors.map(descriptor =>
               new faceapi.LabeledFaceDescriptors(
                  descriptor.label,
                  descriptor.descriptors.map(d => new Float32Array(d))
               )
            );

            const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
            const results = await Promise.all(
               arrayImage.map(async (item) => {
                  const image = await faceapi.fetchImage(item);
                  const detection = await faceapi.detectSingleFace(image)
                     .withFaceLandmarks(true)
                     .withFaceDescriptor();
                  if (detection) {
                     const bestMatch = faceMatcher.findBestMatch(detection.descriptor);
                     return bestMatch.label === id  ? item : null;
                  }
                  return null;
               })
            );
            if (results.filter((img) => img !== null).length===0){
              try {
                 const res = await fetch("http://localhost:2833/test", {
                    method: "DELETE",
                    headers: {
                       "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                       label: id
                    })
                 });
                 console.log(res);
              } catch (error) {
               console.error(error);
              }
            }
            setProcessedImages(results.filter((img) => img !== null));
         };
         processImages();
      }
   }, [isModelsLoaded]);


   const checkLabels = async () => {
      const identifiers = [];
      const response = await fetch("http://localhost:2833/loadLabels");
      const storedDescriptors = await response.json();
      console.log("Stored Descriptors:", storedDescriptors);

      storedDescriptors.map((data, i) => {
         const { label, descriptors } = data;
         console.log(label, descriptors, i, data);
         if (Array.isArray(descriptors) && descriptors.length > 0) {
            const faceDescriptor = Float32Array.from(descriptors[0]);
            identifiers.push(new faceapi.LabeledFaceDescriptors(label, [faceDescriptor]));
         }
      });
      localStorage.setItem("identifiers", JSON.stringify(identifiers))
      return identifiers;
   };
  
   return (
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-0">
        

         {error ? (
            <div className="col-span-full text-red-600">{error}</div>
         ) : (
            processedImages.map((item, index) => (
               <ImageCard key={index} image={item} />
            ))
         )}

      </div>
   )
}

export default ImageDetect
