import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 flex justify-between items-center px-8">
      <div>
        <h1 className="text-2xl font-bold">Joao Boht</h1>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <NavLink to="/"><a className="relative text-yellow-400 text-2xl md:text-3xl leading-10 transition-all duration-500 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-80 hover:text-[#FF6347] hover:opacity-100 hover:scale-[1.3] md:hover:scale-[2.0] cursor-pointer">Menu</a></NavLink>
          </li>
          <li>
            <NavLink to="/contato"><a className="relative text-yellow-400 text-2xl md:text-3xl leading-10 transition-all duration-500 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-80 hover:text-[#FF6347] hover:opacity-100 hover:scale-[1.3] md:hover:scale-[2.0] cursor-pointer">Contato</a></NavLink>
          </li>
          <li>
            <NavLink to="/projetos"><a className="relative text-yellow-400 text-2xl md:text-3xl leading-10 transition-all duration-500 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-80 hover:text-[#FF6347] hover:opacity-100 hover:scale-[1.3] md:hover:scale-[2.0] cursor-pointer">Projetos</a></NavLink>
          </li>
          <li>
            <NavLink to="/quemsoueu"><a className="relative text-yellow-400 text-2xl md:text-3xl leading-10 transition-all duration-500 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-80 hover:text-[#FF6347] hover:opacity-100 hover:scale-[1.3] md:hover:scale-[2.0] cursor-pointer">Quem sou eu</a></NavLink>
          </li>
          <li>
            <NavLink to="/redessociais"><a className="relative text-yellow-400 text-2xl md:text-3xl leading-10 transition-all duration-500 ease-in-out w-40 md:w-52 h-40 md:h-52 text-opacity-80 hover:text-[#FF6347] hover:opacity-100 hover:scale-[1.3] md:hover:scale-[2.0] cursor-pointer">Redes Sociais</a></NavLink>
          </li>
        </ul>

      </nav>
      <div className="flex space-x-6">
        <i className="fab fa-facebook-f text-white text-2xl hover:text-blue-400 transition duration-300"></i>
        <i className="fab fa-twitter text-white text-2xl hover:text-blue-400 transition duration-300"></i>
        <i className="fab fa-linkedin-in text-white text-2xl hover:text-blue-400 transition duration-300"></i>
        <i className="fab fa-instagram text-white text-2xl hover:text-blue-400 transition duration-300"></i>
      </div>
    </header>
  );
}

export default Header;
