import { Link } from "@tanstack/react-router";

export default function Header() {
  // TODO: refactor using Shadcn Navigation Menu
  return (
    <header className="p-2 flex gap-2 bg-white w-full text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>
      </nav>
    </header>
  );
}
