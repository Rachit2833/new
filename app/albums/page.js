import { Card } from "@/components/ui/card"
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Heart, ListFilter, Share2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import DrawerClick from "../_Components/DrawerClick";
import AlbumCard from "../_Components/Albums/AlbumCard";



export const revalidate =0
function page() {
   return (
     <>
       <div className="flex items-center">
         <TabsList>
           <TabsTrigger value="all">All</TabsTrigger>
           <TabsTrigger value="active">2024</TabsTrigger>
           <TabsTrigger value="draft">2023</TabsTrigger>
           <TabsTrigger value="archived" className="hidden sm:flex">
             2022
           </TabsTrigger>
         </TabsList>
         <div className="ml-auto flex items-center gap-2">
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button variant="outline" size="sm" className="h-7 gap-1">
                 <ListFilter className="h-3.5 w-3.5" />
                 <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                   Filter
                 </span>
               </Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent align="end">
               <DropdownMenuLabel>Filter by</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuCheckboxItem checked>
                 Oldest to Newest
               </DropdownMenuCheckboxItem>
               <DropdownMenuCheckboxItem>
                 {" "}
                 Newest to Oldest
               </DropdownMenuCheckboxItem>
             </DropdownMenuContent>
           </DropdownMenu>
           <Button size="sm" variant="outline" className="h-7 gap-1">
             <Download className="h-3.5 w-3.5" />
             <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
               Download
             </span>
           </Button>
           <DrawerClick />
         </div>
       </div>

       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-2">
         
         <AlbumCard />
         <AlbumCard />
         <AlbumCard />
       </div>
     </>
   );
}

export default page
