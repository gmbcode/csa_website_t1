'use client';
// components/MapComponent.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [alumniData, setAlumniData] = useState([]);

  useEffect(() => {
    fetch('/database/alumniData.json')
      .then((res) => res.json())
      .then((data) => setAlumniData(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div style={{ height: '500px', width: '100%'}} className="z-0">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '500px', width: '60%', margin: '0 auto'}}
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
        {alumniData.map(
          (alumnus: {
            id: number;
            name: string;
            lat: number;
            lng: number;
            picture: string;
            batch: string;
            linkedin?: string;
            github?: string;
          }) => (
            <Marker
              key={alumnus.id}
              position={[alumnus.lat, alumnus.lng]}
              icon={
                new Icon({
                  iconUrl: '/images/marker.png',
                  iconSize: [20, 20],
                  iconAnchor: [10, 0],
                })
              }
            >
              <Popup>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={alumnus.picture}
                    alt={alumnus.name}
                    style={{
                      borderRadius: '50%',
                      width: '50px',
                      height: '50px',
                      marginBottom: '5px',
                    }}
                  />
                  <p style={{ margin: 0, marginBottom: '2px' }}>
                    {alumnus.name}
                  </p>
                  {alumnus.batch && (
                    <p style={{ margin: 0, fontSize: '0.9em' }}>
                      Batch: {alumnus.batch}
                    </p>
                  )}
                  <div className="flex justify-center space-x-2 mt-1">
                    {alumnus.linkedin && (
                      <a
                        href={alumnus.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                    {alumnus.github && (
                      <a
                        href={alumnus.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-800 dark:text-gray-300 hover:underline"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          )
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
