import './App.css';

function App() {
  const voce = [{id: 1, name: 'jabuke'}, {id: 2, name: 'kruske'}, {id: 3, name: 'sljive'}, {id: 4, name: 'visnje'}]

  return (
    <div>
      <ol>
      {voce.map(v=><li key={v.id}>{v.name}</li>)}
      </ol>
    </div>
  );
}

export default App;
