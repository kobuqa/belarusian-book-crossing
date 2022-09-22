import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
const Map = ({ coords, items }: any) => {

  return (
    <MapContainer
      style={{ width: '100%', height: '40rem' }}
      center={coords}
      zoom={7}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

      />
      {items.map(({ id, latitude, longitude, author, title, year, contacts }: any) => (
        <Marker position={[latitude, longitude]} key={id}>
          <Popup>
            <p>Аўтар: {author}</p>
            <p>Назва: {title}</p>
            <p>Год: {year ?? 'Няма'}</p>
            <p>Кантакты: {contacts}</p>
            <p>Статус: дазнацца ва ўладальніка</p>
            <p>Умовы: дазнацца ва ўладальніка</p>
            <Link href={`/books/${id}`}>Зрабіць запыт на кнігу</Link>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;