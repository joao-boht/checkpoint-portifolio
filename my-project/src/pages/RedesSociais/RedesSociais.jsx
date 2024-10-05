import { FaGithub, FaInstagram } from 'react-icons/fa';

function RedesSociais() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-10">Minhas Redes Sociais</h1>
      <div className="flex space-x-8">
        <a 
          href="https://github.com/joao-boht" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-6xl hover:text-gray-500 transition duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://instagram.com/bohtsp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-6xl hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="mt-6 text-lg">Siga-me no <a href="https://github.com/joao-boht" className="text-blue-400 hover:underline">GitHub</a> e <a href="https://instagram.com/bohtsp" className="text-pink-400 hover:underline">Instagram</a>!</p>
    </div>
  );
}

export default RedesSociais;
