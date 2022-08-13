import './App.css';
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
        <h1 className='text-info text-center mb-4'>Titulo principal</h1>
        <p className='text-danger mb-4'>
          Mi aplicacion con React.
        </p>
        <div className='row'>
            <Card 
              titulo='Titulo 1'
              cuerpo='Cuerpo 1'
              footer='Footer 1' />
            <Card 
              titulo='Titulo 2'
              cuerpo='Cuerpo 2'
              footer='Footer 2' />
            <Card 
              titulo='Titulo 3'
              cuerpo='Cuerpo 3'
              footer='Footer 3' />
        </div>
    </div>
  );
}

export default App;
