import dynamic from "next/dynamic";



const MapView = dynamic(() => import("../_Components/Map/MapView"), {
  ssr: false,
});


export const revalidate = 0;
function page() {
  return (
    <>
      <MapView />
    </>
  );
}

export default page;
