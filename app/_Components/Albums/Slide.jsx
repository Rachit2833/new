"use client"
import { Button } from "@/components/ui/button"

import { Card } from "@/components/ui/card"
import Splide from "@splidejs/splide"
import SplideSlide from "@splidejs/splide"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import image from "@/app/dune.jpg";
function Slide() {
   return (
      <Splide aria-label="My Favorite Images">
         <SplideSlide>
            <Card className="h-[30rem] relative">
               <div className="absolute  z-10 top-12 left-8">
                  <h1 className=" text-[2rem] text-white text-xl">August 2024</h1>
                  <p className="text-white mt-2 text-[1.2rem]">
                     Relive Memories From August 2024{" "}
                  </p>
                  <p className="text-white ">28/11/2033 - 28/12/2033</p>
               </div>
               <Button className="absolute  z-10 bottom-12 right-8  p-4 bg-transparent border-2 text-white text-[1rem]">
                  Visit <ChevronRight className="ml-2" />
               </Button>
               <Image
                  className="rounded-xl z-0"
                  src={image}
                  alt="Dune"
                  layout="fill"
                  objectFit="cover"
               />
            </Card>
         </SplideSlide>
         <SplideSlide>
            \{" "}
            <Card className="h-[30rem] relative">
               <div className="absolute  z-10 top-12 left-8">
                  <h1 className=" text-[2rem] text-white text-xl">August 2024</h1>
                  <p className="text-white mt-2 text-[1.2rem]">
                     Relive Memories From August 2024{" "}
                  </p>
                  <p className="text-white ">28/11/2033 - 28/12/2033</p>
               </div>
               <Button className="absolute  z-10 bottom-12 right-8  p-4 bg-transparent border-2 text-white text-[1rem]">
                  Visit <ChevronRight className="ml-2" />
               </Button>
               <Image
                  className="rounded-xl z-0"
                  src={image}
                  alt="Dune"
                  layout="fill"
                  objectFit="cover"
               />
            </Card>
         </SplideSlide>
      </Splide>

   )
}

export default Slide
