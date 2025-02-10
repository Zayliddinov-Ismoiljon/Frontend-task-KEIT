// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import Places from "./places";

// export default function IndexMap() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBiqCmM1sQuZdFfyk_lCWjbj5iTWkKt4oc",
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 41.326158154854866, lng: 69.2935293679735 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container h-[500px]">
//       <Marker position={center} />
//       <Places/>
//     </GoogleMap>
//   );
// }


// index_map.tsx

import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./places";

export default function IndexMap({ onLocationSelect }: { onLocationSelect: (location: any) => void }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBiqCmM1sQuZdFfyk_lCWjbj5iTWkKt4oc",
    libraries: ["places"],
  });

  const center = useMemo(() => ({ lat: 41.326158154854866, lng: 69.2935293679735 }), []);
  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(null);

  const handleLocationSelect = (location: { lat: number; lng: number }) => {
    setSelected(location);
    onLocationSelect(location); // Formga qiymat uzatish uchun
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full">
      <PlacesAutocomplete setSelected={handleLocationSelect} />
      <GoogleMap zoom={10} center={selected || center} mapContainerClassName="map-container h-[500px] w-full mt-4">
        {selected && <Marker position={center} />}
        <PlacesAutocomplete setSelected={setSelected}/>
      </GoogleMap>
    </div>
  );
}
