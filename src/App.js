import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './SplitScreen';


const LeftHandComponent = ({message}) => {
  return <h1 style={{background: 'green'}}>Left {message}</h1>
}

const RightHandComponent = ({message}) => {
  return <h1 style={{background: 'red'}}>Right {message}</h1>
}

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent message="Stuff for Left" />
      <RightHandComponent message="Stuff for right" />
    </SplitScreen>
  );
}

export default App;
