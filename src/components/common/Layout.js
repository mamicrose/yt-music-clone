import Header from "./Header";
import Index from "./Player";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white">
      <Header />
      <div className="max-w-[1500px] mx-auto mt-8">{children}</div>

      <Index />
    </div>
  );
}
