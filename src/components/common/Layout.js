import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-black to-slate-700 min-h-[120vh] text-white">
      <Header />
      <div className="max-w-[1500px] mx-auto mt-12">{children}</div>
    </div>
  );
}
