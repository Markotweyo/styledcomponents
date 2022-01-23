
import './App.css';
import {Button, FancyButton} from './styles/styles';




function App() {
  return (
    <div className="App">
      <Button type='submit'>button</Button>
      <div><br/></div>
      <Button variant='outline'>button</Button>
      <div><br/></div>
      <FancyButton as='a'>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
