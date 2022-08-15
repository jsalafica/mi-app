import './App.css';
import Card from './componentes/Card';

function App() {
  const cards = [
    {
      id: 1,
      titulo: "Titulo uno",
      cuerpo: "Cuerpo Uno",
      footer: "Footer Uno"
    },
    {
      id: 2,
      titulo: "Titulo dos",
      cuerpo: "Cuerpo dos",
      footer: "Footer dos"
    },
    {
      id: 3,
      titulo: "Titulo tres",
      cuerpo: "Cuerpo tres",
      footer: "Footer tres"
    },
    {
      id: 4,
      titulo: "Titulo cuatro",
      cuerpo: "Cuerpo cuatro",
      footer: "Footer cuatro"
    }
  ];

  return (
    <div className="App">
      <div className='container-fluid'>
        <h1 className='text-info text-center mb-4'>Titulo principal</h1>
        <p className='text-danger mb-4'>
          Mi aplicacion con React.
        </p>
        <div className='row'>
            {cards.map((card) => (
                <Card
                  key = {card.id}
                  titulo = {card.titulo} 
                  cuerpo = {card.cuerpo}
                  footer = {card.footer} />
            ))}
            
        </div>
      </div>
    </div>
  );
}

export default App;