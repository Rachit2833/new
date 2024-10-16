'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { useState } from "react";

function SideProfile() {
   const [isNameInput,setIsNameInput]= useState(false)
   const pathName = usePathname();
   const id = pathName.split('/').pop(); // Gets the last part of the path
   return (
     
      <div className="flex p-2 gap-2 w-[35%] items-center">
         {isNameInput ? (
            <Card className="flex p-2 gap-2 w-full h-16 items-center">
               <Avatar className="h-12 w-12 object-cover">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>

               <input
                  className="h-full w-full p-2 focus:outline-none focus:border-0 active:border-0"
                  placeholder="New Name or Nickname"
                  type="text"
               />

               <Button onClick={()=>{
                  setIsNameInput(false)
               }} variant="outline" size="sm">Done</Button>
            </Card>
         ) : (
            <div className="flex p-2 gap-2 w-full h-16 items-center">
               <Avatar className="h-12 w-12 object-cover">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>
               <div className="flex flex-col justify-center h-full">
                  <h1
                     onClick={() => {
                        setIsNameInput(true);
                     }}
                     className="text-[royalblue] cursor-pointer"
                  >
         {id.split("_")[0]==="Person"?"Add a name": id}
                  </h1>
                  <p className="text-slate-500">Find them fast by name with search</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default SideProfile
