function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 flex justify-between items-center px-8">
      <div>
        <h1 className="text-2xl font-bold">Joao Boht</h1>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a href="#home" className="text-white hover:text-blue-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#contato" className="text-white hover:text-blue-400 transition duration-300">
              Contato
            </a>
          </li>
          <li>
            <a href="#projetos" className="text-white hover:text-blue-400 transition duration-300">
              Projetos
            </a>
          </li>
          <li>
            <a href="#quem-sou-eu" className="text-white hover:text-blue-400 transition duration-300">
              Quem Sou Eu
            </a>
          </li>
          <li>
            <a className="text-white hover:text-blue-400 transition duration-300">
              Redes Sociais
            </a>
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
