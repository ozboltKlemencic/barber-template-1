// googleTypes.d.ts
declare global {
  interface Window {
    google: {
      maps: {
        Map: typeof google.maps.Map;  // Directly reference google.maps.Map
        MapOptions: typeof google.maps.MapOptions;  // Directly reference google.maps.MapOptions
        Marker: typeof google.maps.Marker;  // Use google.maps.Marker for the Marker type
      };
    };
  }
}

// Ensure the module is treated as a global declaration
export {};
