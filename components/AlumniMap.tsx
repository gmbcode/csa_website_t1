'use client';
// components/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const alumniData = [
  {
    id: 1,
    name: 'Bhavya',
    lat: 37.7749,
    lng: -122.4194,
    picture: '/images/male.png',
  },
  {
    id: 2,
    name: 'Tobit',
    lat: 51.5074,
    lng: -0.1278,
    picture: '/images/male.png',
  },
  {
    id: 3,
    name: 'Vihaan',
    lat: 35.6895,
    lng: 139.6917,
    picture: '/images/male.png',
  },
];

const MapComponent = () => {
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
        {alumniData.map((alumnus) => (
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
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
