import { NavLink } from "react-router";

export const Home = () => {
  return (
    <main className="flex-1  bg-white">
      <section className="relative h-[400px] flex items-center justify-center text-center overflow-hidden bg-amber-100">
        <img
          src="https://images.photowall.com/products/62137/zoo-animals.jpg?h=699&q=85" // ← lägg bilden i public-mappen, t.ex. /public/zoo-hero.jpg
          alt="hej"
          className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[1px]"
        />

        {/* overlay på heropic */}
        <div className="relative z-10 bg-white/70 backdrop-blur-sm p-6 rounded shadow-md max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Välkommen till <br />
            Sveds Zoo!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Möt våra fantastiska djur, mata dem i realtid och lär dig mer.
          </p>
          <NavLink
            to="/animals"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded shadow-md transition transform hover:scale-105 duration-300"
          >
            Utforska djuren 🐾
          </NavLink>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-6 max-w-6xl mx-auto text-center mb-10">
        {/* Direktlänk till att mata djuren eller se hungrig djur. Ej skapat filtrering... */}
        <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Mata ett djur
          </h3>
          <p className="text-gray-700 mb-4">
            Se vilket djur som är hungrigt och hjälp till att mata det!
          </p>
          <NavLink
            to="/animals"
            className="text-blue-600 font-medium hover:underline"
          >
            Se hungriga djur →
          </NavLink>
        </div>

        <div className="bg-emerald-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 hover:scale-105">
          <h3 className="text-xl font-bold text-emerald-800 mb-2">
            Lär dig mer
          </h3>
          <p className="text-gray-700 mb-4">
            Alla djur har sin egen bakgrund och personlighet. Läs om dem!
          </p>
          <NavLink
            to="/animals"
            className="text-emerald-600 font-medium hover:underline"
          >
            Läs mer →
          </NavLink>
        </div>
      </section>
    </main>
  );
};
