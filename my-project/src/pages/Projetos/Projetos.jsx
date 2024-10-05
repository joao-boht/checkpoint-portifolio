function Projeto({ titulo, descricao }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{titulo}</h2>
      <p className="text-gray-700 text-lg">{descricao}</p>
    </div>
  );
}

function Projetos() {
  const listaDeProjetos = [
    {
      titulo: 'Site Airbnb',
      descricao: 'Site feito no checkpoint de frontend',
    },
    {
      titulo: 'Site crie videos WebDev',
      descricao: 'Site feito para o checkpoint 1 (2º Semestre 2024) WebDev',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black p-10">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10">Meus Projetos</h1>
      {listaDeProjetos.map((projeto, index) => (
        <Projeto key={index} titulo={projeto.titulo} descricao={projeto.descricao} />
      ))}
    </div>
  );
}

export default Projetos;
