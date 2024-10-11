"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Heart, Share2 } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import image from "@/app/dune.jpg";
function AlbumCard() {
   const router = useRouter()
   return (
      <Card className="relative min-h-[20rem] sm:min-h-[24rem] lg:min-h-[30rem]">
         <div className="absolute z-10 top-6 sm:top-12 left-4 sm:left-8">
            <h1 className="text-[1.5rem] sm:text-[2rem] text-white">August 2024</h1>
            <p className="text-white mt-2 text-[1rem] sm:text-[1.2rem]">
               Relive Memories From August 2024
            </p>
            <p className="text-white text-[0.9rem] sm:text-[1rem]">28/11/2033 - 28/12/2033</p>
         </div>

         <Image
            className="rounded-xl z-0"
            src={image}
            alt="Dune"
            layout="fill"
            objectFit="cover"
         />

         <div className="absolute flex flex-row items-center justify-center gap-4 z-10 bottom-6 sm:bottom-12 right-4 sm:right-8">
            <Button className="p-2 sm:p-4 bg-transparent border-2 border-white text-white text-[0.9rem] sm:text-[1rem] hover:bg-white hover:text-black transition-colors">
               <Heart />
            </Button>
            <Button className="flex items-center p-2 sm:p-4 bg-transparent border-2 border-white text-white text-[0.9rem] sm:text-[1rem] hover:bg-white hover:text-black transition-colors">
               <Share2 />
            </Button>
            <Button onClick={() => router.push("/albums/1")} className="flex items-center p-2 sm:p-4 bg-transparent border-2 border-white text-white text-[0.9rem] sm:text-[1rem] hover:bg-white hover:text-black transition-colors">
               Visit <ChevronRight className="ml-2" />
            </Button>
         </div>
      </Card>
   )
}

export default AlbumCard
