import img from "@/app/dune.jpg";
import { CardDescription } from "@/components/ui/card";
import Image from "next/image";
import {
   ContextMenu,
   ContextMenuContent,
   ContextMenuItem,
   ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useUser } from "../_lib/context";
import { usePathname } from "next/navigation";

function ImageCard({ image }) {
   const currentPath = usePathname(); // Get current route
   const { setIsImageOpen } = useUser();

   function logTimeDifference(dateString) {
      const now = new Date(); // Current date and time
      const pastDate = new Date(dateString); // Date to compare with

      // Calculate time difference in milliseconds
      const diffMillis = now - pastDate;

      // Convert milliseconds into units
      const diffSeconds = Math.floor(diffMillis / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);
      const diffDays = Math.floor(diffHours / 24);

      // Determine which log message to display
      if (diffHours < 1 || diffDays === 0) {
         return "Added recently";
      } else if (diffDays === 1) {
         return "Added yesterday";
      } else if (diffDays > 1 && diffDays <= 2) {
         return `Added ${diffDays} days ago`;
      } else if (diffDays > 2) {
         return `Added ${diffDays} days ago`;
      } else {
         return `More than  ${diffDays} days ago`;
      }
   }

   return (
      <div className="mx-auto bg-white rounded-lg shadow-md p-4 w-full max-w-xs lg:max-w-sm">
         <div
            className="relative w-full h-[15rem] bg-gray-200 rounded-t-lg cursor-pointer overflow-hidden"
            onClick={() => setIsImageOpen(true)}
         >
            <Image
               src={image || img}
               alt="Placeholder"
               layout="fill"
               objectFit="cover"
               className="rounded-t-lg"
            />
         </div>
         <ContextMenu>
            <ContextMenuTrigger>
               <div className="overflow-y-auto max-h-24 mt-2">
                  <CardDescription>Arrakis</CardDescription>
                  <p className="heading">Whereas recognition</p>
                  <div className="text-xs text-gray-500 mt-4 sm:block hidden">
                     By{" "}
                     <span className="font-semibold hover:cursor-pointer">
                        Author Name 
                     </span>{" "}
                     {logTimeDifference("2024-09-29T10:00:00")}
                  </div>
               </div>
               <ContextMenuContent>
                  <ContextMenuItem>Download</ContextMenuItem>
                  <ContextMenuItem>Share</ContextMenuItem>
                  <ContextMenuItem>
                     {`/${currentPath.split("/")[1]}` === "/albums"
                        ? "Remove From Album"
                        : "Delete"}
                  </ContextMenuItem>
                  <ContextMenuItem>Favourite</ContextMenuItem>
               </ContextMenuContent>
            </ContextMenuTrigger>
         </ContextMenu>
      </div>
   );
}

export default ImageCard;