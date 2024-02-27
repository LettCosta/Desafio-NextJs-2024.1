interface Cliente {
    nome: string;
    depoimento: string;
  }
  
  const ClienteCard = ({ cliente }: { cliente: Cliente }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg font-semibold mb-4">{cliente.nome}</p>
        <p className="text-gray-600">{cliente.depoimento}</p>
      </div>
    );
  };
  
  export default ClienteCard;
  