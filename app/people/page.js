
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
 // Make sure to import all required images
import Friends from "../_Components/people/Friends";


function Page() {


  return (
    <Card>
      <CardHeader className="border-b-4">
        <CardTitle>Capture Moments, Share Memories</CardTitle>
        <CardDescription>
          Discover unforgettable memories with friends. Relive and cherish each
          captured moment together.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Friends />
        <Friends />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default Page;
