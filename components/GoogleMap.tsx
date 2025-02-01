import { useEffect, useRef } from 'react';
import type {  } from '../Types/googleTypes.tsx';
import { loadGoogleMapsScript } from '../lib/utils';

interface LatLng {
  lat: number;
  lng: number;
}

interface Marker {
  position: LatLng;
  title: string;
}

interface GoogleMapProps {
  center?: LatLng;
  zoom?: number;
  markers?: Marker[];
  className?: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ 
  center = { lat: 46.170399, lng: 14.303600 },
  zoom = 8,
  markers = [],
  className = ''
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map<Element> | google.maps.StreetViewPanorama | undefined>(undefined);

  useEffect(() => {
    const initMap = async (): Promise<void> => {
      try {
        await loadGoogleMapsScript();
        
        if (!mapRef.current || mapInstanceRef.current) return;

        const mapOptions: google.maps.MapOptions = {
          center,
          zoom,
          styles: [
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [
                { saturation: 36 },
                { color: '#ffffff' },
                { lightness: 40 },
              ],
            },
            {
              featureType: 'all',
              elementType: 'labels.text.stroke', 
              stylers: [
                { visibility: 'off' },
                { color: '#000000' },
                { lightness: 16 },
              ],
            },
            {
              featureType: 'all',
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.fill',
              stylers: [
                { color: '#c0c0c0' },
                { lightness: 20 },
                { visibility: 'on' },
              ],
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [
                { color: '#000000' },
                { lightness: 17 },
                { weight: 1.2 },
                { visibility: 'off' },
              ],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#000000' }, { lightness: 20 }],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry.fill',
              stylers: [{ color: '#3f3f3f' }],
            },
            {
              featureType: 'landscape',
              elementType: 'geometry.stroke',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'landscape.man_made',
              elementType: 'geometry.fill',
              stylers: [
                { color: '#333333' },
                { visibility: 'on' },
                { saturation: 0 },
                { lightness: 0 },
                { gamma: 1.00 },
              ],
            },
            {
              featureType: 'landscape.man_made',
              elementType: 'geometry.stroke',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'landscape.natural',
              elementType: 'geometry.fill',
              stylers: [
                { color: '#2b2b2b' },
                { visibility: 'on' },
                { gamma: 1},
                { lightness: 0 },
                { saturation: 0},
              ],
            },
            {
              featureType: 'landscape.natural',
              elementType: 'geometry.stroke',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'landscape.natural.landcover',
              elementType: 'geometry.fill',
              stylers: [{ visibility: 'off' }, { color: '#ff0000' }],
            },
            {
              featureType: 'landscape.natural.landcover',
              elementType: 'geometry.stroke',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'landscape.natural.terrain',
              elementType: 'geometry.fill',
              stylers: [{ visibility: 'on' }, { color: '#222222' }],
            },
            {
              featureType: 'landscape.natural.terrain',
              elementType: 'geometry.stroke',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{ color: '#000000' }, { lightness: 21 }],
            },
            {
              featureType: 'poi',
              elementType: 'geometry.fill',
              stylers: [{ color: '#4a4a4a' }, { visibility: 'on' }],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [
                { color: '#ac9455' },
                { lightness: 0 },
                { gamma: 1.00 },
              ],
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [
                { color: '#000000' },
                { lightness: 29 },
                { weight: 0.2 },
              ],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [{ color: '#ac9455' }, { lightness: 0 }],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ac9455' }],
            },
            {
              featureType: 'road.arterial',
              elementType: 'geometry.stroke',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry',
              stylers: [{ color: '#000000' }, { lightness: 16 }],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.fill',
              stylers: [{ color: '#222222' }],
            },
            {
              featureType: 'road.local',
              elementType: 'geometry.stroke',
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{ color: '#000000' }, { lightness: 19 }],
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#000000' }, { lightness: 17 }],
            },
            {
              featureType: 'water',
              elementType: 'geometry.fill',
              stylers: [{ color: '#1a1a1a' }],
            },
          ],
        };

        
        mapInstanceRef.current = new window.google.maps.Map(
          mapRef.current,
          mapOptions
        );

        const customMarkerIcon = {
          url: '/img/anchore.svg',
          scaledSize: new window.google.maps.Size(120, 120)
        };

        markers.forEach((marker: Marker) => {
          new window.google.maps.Marker({
            position: marker.position,
            map: mapInstanceRef.current,
            title: marker.title,
            icon: customMarkerIcon
          });
        });

      } catch (error) {
        console.error('Error loading Google Maps:', error);
      }
    };

    initMap();

    return () => {
      mapInstanceRef.current = undefined;
    };
  }, [center, zoom, markers]);

  return (
    <div 
      ref={mapRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: '300px' }}
    />
  );
};

export default GoogleMap;