export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat hero-background"
      style={{ backgroundImage: "url('/hero/banner-4.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-65"></div>
      <div className="relative container mx-auto flex flex-col gap-6 items-start justify-center text-white px-6 hero-background">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Descubre los mejores cuidadores <br /> para tus mascotas
        </h1>
        <span className="text-lg sm:text-xl italic">
          Encuentra a los mejores cuidadores de mascotas en tu ciudad
        </span>
        <div className="flex flex-wrap gap-4"></div>
      </div>
    </section>
  );
}
