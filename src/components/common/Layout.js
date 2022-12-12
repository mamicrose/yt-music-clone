import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-black/60 to-lime-600 min-h-[120vh] text-white">
      <Header />
      {children}
    </div>
  );
}
