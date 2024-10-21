import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import FavColor from "./components/favcolor";
import "./zakiya-style.css" 
import RiwayatKerja from "./components/riwayatpekerjaan";

export default function MyApp() {
  return ( 
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatKerja/>
      <FavColor/>

    </section>
  );
}