
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, ListFilter } from "lucide-react";
import DrawerClick from "@/app/_Components/DrawerClick";
import SideProfile from "@/app/_Components/people/SideProfile";
import PasteCards from "@/app/_Components/Albums/PasteCards";

// Make sure to import all required images


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
          <DrawerClick name={"Add Images"} />
        </div>
      </div>
      <Card>
        <CardHeader className="">
          <SideProfile />
        </CardHeader>
        <CardContent>
          <PasteCards />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </>
  );
}

export default page;
