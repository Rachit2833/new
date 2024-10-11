"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import image from "./icons.png"; // Adjust this path if needed
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
   Sheet,
   SheetClose,
   SheetContent,
   SheetDescription,
   SheetFooter,
   SheetHeader,
   SheetOverlay,
   SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import ImageCard from "../ImageCard";

// Custom Icon Configuration
const customIcon = new L.Icon({
   iconUrl: image.src, // Use image.src to get the correct path in Next.js
   iconSize: [35, 45], // Size of the icon (width, height)
   iconAnchor: [17, 45], // Anchor of the icon
   popupAnchor: [0, -45], // Anchor of the popup relative to the icon
});

function MapView() {
   const [isOpen, setIsOpen] = useState(false); // State to manage the Sheet's visibility
   const [location, setLocation] = useState({}); // State to manage the Sheet's visibility

   const handleMarkerClick = (item) => {
      setIsOpen(true);
      setLocation(item) // Open the Sheet when the marker is clicked
   };
   const uttarakhandLocations = [
      { name: "Pauri, Uttrakhand", coordinates: [30.1471, 78.7745] },
      { name: "Dehradun, Uttrakhand", coordinates: [30.3165, 78.0322] },
      { name: "Nainital, Uttrakhand", coordinates: [29.3919, 79.4542] },
      { name: "Haridwar, Uttrakhand", coordinates: [29.9457, 78.1642] },
      { name: "Rishikesh, Uttrakhand", coordinates: [30.0869, 78.2676] },
      { name: "Mussoorie, Uttrakhand", coordinates: [30.4591, 78.0669] },
      { name: "Almora, Uttrakhand", coordinates: [29.5971, 79.6591] },
      { name: "Badrinath, Uttrakhand", coordinates: [30.7421, 79.4930] },
      { name: "Kedarnath, Uttrakhand", coordinates: [30.7352, 79.0669] },
      { name: "Joshimath, Uttrakhand", coordinates: [30.5680, 79.5664] },
      { name: "Pithoragarh, Uttrakhand", coordinates: [29.5858, 80.2090] },
      { name: "Haldwani, Uttrakhand", coordinates: [29.2183, 79.5122] },
      { name: "Ranikhet, Uttrakhand", coordinates: [29.6420, 79.4320] },
      { name: "Champawat, Uttrakhand", coordinates: [29.3363, 80.0972] },
      { name: "Chopta, Uttrakhand", coordinates: [30.3557, 79.0277] },
      { name: "Auli, Uttrakhand", coordinates: [30.5283, 79.5657] }
   ];

   return (
      <div className="flex flex-col space-y-4 h-[70vh] relative"> {/* Keep relative positioning here */}
         <Card className="">
            <CardHeader>
               <CardTitle>Access All of your Memories in the Map</CardTitle>
               <CardDescription>
                  Note:Memories with invalid or imaginary location won't appear on Memory-Map
               </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-5 gap-4 relative"> {/* Added relative positioning to CardContent */}
               <MapContainer
                  center={[30.5937, 78.9629]}
                  zoom={7}
                  className="relative col-span-5 h-full z-0" // Ensure MapContainer takes full height
               >
                  <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                  />
                  {uttarakhandLocations.map((item,i)=>{
                     return <Marker
                        position={item.coordinates}
                        draggable={true}
                        animate={true}
                        icon={customIcon}
                        eventHandlers={{
                           click:()=>handleMarkerClick(item), // Trigger the Sheet on marker click
                        }}
                     >
                        <Popup>{item.name}</Popup>
                     </Marker>
                  })}

                  {/* Sheet component */}
                  <Sheet
                    
                     open={isOpen}
                     onOpenChange={setIsOpen}
                     className="absolute top-0 right-0 z-50 h-full" // Position on the right
                  >
                     <SheetOverlay className="bg-white/10" />
                     <SheetContent side="right" className="sm:max-w-[40rem] overflow-auto"> 
                        <SheetHeader className=" w-full ">
                           <SheetTitle>Memories From This Location</SheetTitle>
                           <SheetDescription>
                             {location.name}
                           </SheetDescription>
                        </SheetHeader>
                        <div className="grid grid-cols-2 gap-4 ">
                           <ImageCard />
                           <ImageCard />
                           <ImageCard />
                           <ImageCard />
                           <ImageCard />
                           <ImageCard />
                        </div>
                        <SheetFooter>
                          
                        </SheetFooter>
                     </SheetContent>
                  </Sheet>

            
               </MapContainer>
            </CardContent>
         </Card>
      </div>
   );
}

export default MapView;