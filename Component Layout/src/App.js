import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({name}) => {
  return <h1 style={{background:"green"}}>{name}</h1>
}

const RightHandComponent = ({message}) => {
  return <p style={{background:"red"}}>{message}</p>
}

function App() {
  return (
    <SplitScreen
      leftWeight={1}
      rightWeight={3}>
      <LeftHandComponent name={'Shaun'} />
      <RightHandComponent message={ 'Hello world'} />
    </SplitScreen>
  );
}

export default App;
