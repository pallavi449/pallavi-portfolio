export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 fixed w-full bg-[#0b1220] z-50 shadow-md border-b border-gray-700">
      <h1 className="text-xl font-bold text-blue-500">Portfolio</h1>

      <ul className="flex gap-6 text-gray-300">
        <li>
          <a href="#home" className="hover:text-white">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-white">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-white">Projects</a>
        </li>
        <li>
          <a href="#Learning Journey" className="hover:text-white">Learning Journey</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
