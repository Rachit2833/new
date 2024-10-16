
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as faceapi from "@vladmandic/face-api";
import Friends from "../_Components/people/Friends";

 const checkLabels = async () => {

   const response = await fetch("http://localhost:2833/labels");
   const storedDescriptors = await response.json();
    return storedDescriptors
 };
async function Page() {
  let people =  await checkLabels();
  console.log(people);

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
        <Friends people={people} />

      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default Page;
