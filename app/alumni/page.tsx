'use client';
import dynamic from "next/dynamic";
//import AlumniMap from '../../components/AlumniMap';
const AlumniMap = dynamic(() => import("../../components/AlumniMap"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
export default function AlumniMapPage() {
  return <AlumniMap />;
}
