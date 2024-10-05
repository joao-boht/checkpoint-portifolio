import { FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return ( 
    <>
    <footer className="bg-gray-900 text-white py-6 flex flex-col items-center">
      <div className="flex space-x-6 mb-4">
        <a href="https://instagram.com/bohtsp" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition duration-300">
          <FaInstagram />
        </a>
        <a href="https://github.com/joao-boht" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-blue-400 transition duration-300">
          <FaGithub />
        </a>
      </div>
      <p className="text-sm text-gray-400">Boht Portifólio 2024.</p>
    </footer>

    </>
   );
}

export default Footer;