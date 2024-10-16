"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent } from "@radix-ui/react-tabs";
import { Suspense } from "react";
import PasteCards from "./Albums/PasteCards";


function MainSlide() {
 

   return (

      <TabsContent  value="all">
         <Card x-chunk="dashboard-06-chunk-0">
            <CardHeader>
               <CardTitle>Your Saved Images</CardTitle>
               <CardDescription>
                  Paste your Copied Images Here Or Directly Add Images
               </CardDescription>
            </CardHeader>
            <CardContent>
               <Suspense fallback={<div>Loading Images...</div>}>
               <PasteCards />
               </Suspense>
            </CardContent>
            <CardFooter>
               <div className="text-xs text-muted-foreground">
                  Showing <strong>20</strong> of <strong>20</strong> photos
               </div>
            </CardFooter>
         </Card>
      </TabsContent>

   )
}

export default MainSlide
