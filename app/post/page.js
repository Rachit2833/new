import dynamic from "next/dynamic";


const CameraUi = dynamic(() => import("../_Components/post/CameraUi"), { ssr: false });

function page() {
  return <CameraUi />;
}

export default page;
