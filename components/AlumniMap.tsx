'use client';
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
    <div style={{ height: '500px', width: '100%' }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '500px', width: '60%', margin: '0 auto' }}
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
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {alumniData.map(
          (alumnus: {
            id: number;
            name: string;
            lat: number;
            lng: number;
            picture: string;
          }) => (
            <Marker
              key={alumnus.id}
              position={[alumnus.lat, alumnus.lng]}
              icon={
                new Icon({
                  iconUrl: '/images/marker.png',
                  iconSize: [30, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>
                <div style={{ textAlign: 'center' }}>
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
                  <p>{alumnus.name}</p>
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
