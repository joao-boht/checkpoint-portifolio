import React, { useState } from 'react';

function Contato() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 animate-gradient-x">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
          Contato
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="name">
            Nome
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg mb-2" htmlFor="message">
            Mensagem
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-[#FF6347] text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contato;
