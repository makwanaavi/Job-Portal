import { MantineProvider} from '@mantine/core';
import "./App.css"
import '@mantine/core/styles.css'


export default function App() {
  return (
    <MantineProvider>
      <h1>Welcome to Mantine!</h1>
    </MantineProvider>
  );
}