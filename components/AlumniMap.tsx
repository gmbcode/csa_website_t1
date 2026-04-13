'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { AlumniCarousel } from './Carousel';

interface Alumni {
  id: number;
  name: string;
  lat: number;
  lng: number;
  picture: string;
  batch: string;
  linkedin: string;
}

const MapComponent = () => {
  const [alumniData, setAlumniData]: [
    Alumni[],
    React.Dispatch<React.SetStateAction<Alumni[]>>
  ] = useState([] as Alumni[]);

  useEffect(() => {
    fetch('/database/alumniData.json')
      .then((res) => res.json())
      .then(setAlumniData)
      .catch(console.error);
  }, []);

  const [startBatch, setStartBatch] = useState<string | null>(null);
  const [endBatch, setEndBatch] = useState<string | null>(null);

  const batches = useMemo(() => {
    const unique = [...new Set(alumniData.map((p) => p.batch))];
    return unique.sort((a, b) => Number(a) - Number(b));
  }, [alumniData]);

  useEffect(() => {
    if (startBatch && endBatch && Number(startBatch) > Number(endBatch)) {
      setEndBatch(startBatch);
    }
  }, [startBatch]);

  const filteredData = useMemo(() => {
    // show all if nothing selected
    if (!startBatch && !endBatch) return alumniData;

    return alumniData.filter((p: any) => {
      const batch = Number(p.batch);

      if (startBatch && batch < Number(startBatch)) return false;
      if (endBatch && batch > Number(endBatch)) return false;

      return true;
    });
  }, [alumniData, startBatch, endBatch]);

  const batch_years = useMemo(() => {
    const unique = [...new Set(alumniData.map((p) => p.batch))];
    return unique.sort((a, b) => Number(a) - Number(b));
  }, [alumniData]);

  const locationAcc = filteredData.reduce((acc, person) => {
    const key = `${person.lat}x${person.lng}`; // note that the key is unique to each location, coordinates separated by 'x'

    if (!acc[key]) acc[key] = [];
    acc[key].push(person);

    return acc;
  }, {} as Record<string, any[]>);

  return (
    <div
      style={{ width: '100%' }}
      className="flex flex-col items-center gap-10"
    >
      <div style={{ height: '500px', width: '100%' }} className="z-0">
        <div style={{ height: '500px', width: '100%' }} className="z-0">
          <div className="flex justify-center items-center my-8 gap-x-2">
            {/* START */}
            <select
              value={startBatch ?? ''}
              onChange={(e) => setStartBatch(e.target.value || null)}
              className="border rounded-lg dark:bg-neutral-800 dark:text-white p-2"
            >
              <option value="">Start Batch</option>
              {batches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            <span className='text-black dark:text-white'>to</span>

            {/* END */}
            <select
              value={endBatch ?? ''}
              onChange={(e) => setEndBatch(e.target.value || null)}
              className="border rounded-lg dark:bg-neutral-800 dark:text-white p-2"
            >
              <option value="">End Batch</option>
              {batches.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>

            {/* RESET */}
            <button
              onClick={() => {
                setStartBatch(null);
                setEndBatch(null);
              }}
              className="px-2 py-1 border ml-3 dark:text-white dark:bg-lime-800 rounded"
            >
              Show All
            </button>
          </div>

          <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: '500px', width: '60%', margin: '0 auto', border: '1px solid white' }}
            scrollWheelZoom={true}
            dragging={true}
            maxBounds={[
              [-85, -179],
              [85, 179],
            ]}
            maxBoundsViscosity={1.0}
            worldCopyJump={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {Object.entries(locationAcc).map(([coords, people]) => {
              const [lat, lng] = coords.split('x').map(Number); // decode the coordinates from the key, delimited by 'x'

              return (
                <Marker
                  key={coords}
                  position={[lat, lng]}
                  icon={
                    new Icon({
                      iconUrl: '/images/marker.png',
                      iconSize: [20, 20],
                      iconAnchor: [10, 0],
                    })
                  }
                >
                  <Popup
                    closeButton={false}
                    autoClose={true}
                    closeOnEscapeKey={true}
                    closeOnClick={true}
                  >
                    <AlumniCarousel people={people} />
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
