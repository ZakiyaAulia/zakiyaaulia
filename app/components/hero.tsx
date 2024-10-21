import foto from "../foto.jpg";

export default function Hero() {
    return (
      <div className="container mx-auto p-2 text-center">
        <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
        <h2 className="text-3xl">Zakiya Aulia</h2>
        <Profile />
        <p>
           Saya Zakiya Aulia
        </p>
       </div>
    );
}

function Profile () {
    return <img src={foto.src} alt="Zakiya Aulia Profile" className="fotoku" />;
   }