import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <>
      <header className="flex justify-around items-center h-25 bg-amber-100">
        <div>
          <p className="text-5xl font-bold font-moolahlah text-amber-700 p-6">
            SVEDS ZOO
          </p>
        </div>
        <nav>
          <Navigation />
        </nav>
      </header>
    </>
  );
};
