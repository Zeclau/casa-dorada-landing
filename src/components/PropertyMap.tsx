import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LAT = 12.0945260;
const LNG = -86.3296769;

const PropertyMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [LAT, LNG],
      zoom: 18,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    // Dark tile layer fits the luxury theme
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        maxZoom: 20,
        subdomains: "abcd",
      }
    ).addTo(map);

    // 50m radius circle in champagne gold
    const gold = "#d4b06a";
    L.circle([LAT, LNG], {
      radius: 50,
      color: gold,
      weight: 2,
      opacity: 0.9,
      fillColor: gold,
      fillOpacity: 0.18,
    }).addTo(map);

    // Center marker (small dot)
    L.circleMarker([LAT, LNG], {
      radius: 5,
      color: gold,
      weight: 2,
      fillColor: gold,
      fillOpacity: 1,
    }).addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full sm:h-[520px]"
      aria-label="Mapa de ubicación de la propiedad"
    />
  );
};

export default PropertyMap;
