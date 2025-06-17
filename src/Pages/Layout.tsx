import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="grid grid-cols-2 h-45 bg-amber-200 text-amber-800">
        <div className="max-w-6xl mx-auto px-4 md:flex-row items-center justify-between gap-4 mt-10">
          <b className="text-amber-800">Besöksadress</b>
          <p>Lillegården 8, Lillesved</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:flex-row items-center justify-between gap-4 mt-10">
          <b>Öppettider</b>
          <p>mån-fre 8-18</p>
          <p>lördag 9-18</p>
          <p>söndag 10-18</p>
        </div>
      </footer>
    </>
  );
};
