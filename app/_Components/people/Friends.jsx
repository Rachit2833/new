'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import image2 from "@/app/image5.jpg"; // Ensure this path is correct
import image3 from "@/app/placeholder.webp"; // Ensure this path is correct
import { Avatar } from "@/components/ui/avatar"; // Ensure this component is working as intended
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation";

function Friends({people}) {
   const [isExpanded, setIsExpanded] = useState(false);
   const [numImagesToShow, setNumImagesToShow] = useState(3);
  console.log(people);
   const router = useRouter()
   const updateNumImagesToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
         setNumImagesToShow(5);
      } else if (width >= 640) {
         setNumImagesToShow(4);
      } else {
         setNumImagesToShow(3);
      }
   };

   const toggleExpand = () => setIsExpanded(prev => !prev);

   useEffect(() => {
      updateNumImagesToShow();
      window.addEventListener("resize", updateNumImagesToShow);
      return () => window.removeEventListener("resize", updateNumImagesToShow);
   }, []);

   return (
      <>
         <div className="flex justify-between mx-4 my-8">
            <h1>People</h1>
            <button onClick={toggleExpand} className="text-blue-500 hover:underline">
               {isExpanded ? "View Less" : "View All"}
            </button>
         </div>

         <div className={`grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 w-full gap-4 p-4 ${isExpanded ? "hidden" : "block"}`}>
            {people?.slice(0, numImagesToShow-1).map((img, i) => {
              return <div className="flex flex-col items-center">
                  <Avatar
                     key={i}
                     onClick={() => {
                        router.push(`/people/${img.label}`);
                     }}
                     className="sm:h-24 sm:w-24 h-16 w-16 flex justify-center items-center"
                  >
                     <AvatarImage src={image2.src} alt={`Friend ${i + 1}`} />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                 <span className="text-center mt-2">{img.label.split("_")[0] ==="Person"?"Unknown":img.label}</span>
               </div>

})}
            <div className="relative sm:h-24 sm:w-24 h-16 w-16 flex justify-center items-center rounded-full bg-slate-200">
               <Image src={image3} alt="Add Friend" width={64} height={64} className="rounded-full object-cover" />
               <p className="absolute bottom-2 mx-2 text-center w-[80%] bg-transparent">Add</p>
            </div>
         </div>

         <div className={`grid border-b-2 lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 w-full gap-8 p-4 ${isExpanded ? "block" : "hidden"}`}>
            {people?.map((img, i) => {
              return <div className="flex flex-col items-center">
                  <Avatar
                     key={i}
                     onClick={() => {
                        router.push(`/people/${img.label}`);
                     }}
                     className="sm:h-24 sm:w-24 h-16 w-16 flex justify-center items-center"
                  >
                     <AvatarImage src={image2.src} alt={`Friend ${i + 1}`} />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-center mt-2">{img.label.split("_")[0] === "Person" ? "Unknown" : img.label}</span>
               </div>
})}
            <div className="relative sm:h-24 sm:w-24 h-16 w-16 flex justify-center items-center rounded-full bg-slate-200">
               <Image src={image3} alt="Add Friend" width={64} height={64} className="rounded-full object-cover" />
               <p className="absolute bottom-2 mx-2 text-center w-[80%] bg-transparent">Add</p>
            </div>
         </div>
      </>
   );
}

export default Friends;

// className = "sm:h-24 sm:w-24 h-16 w-16 flex justify-center items-center"