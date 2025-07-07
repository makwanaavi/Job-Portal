import { MantineProvider} from '@mantine/core';
import "./App.css"
import '@mantine/core/styles.css'
import HomePage from './pages/HomePage';


export default function App() {
  return (
    <MantineProvider>
     <HomePage/>
    </MantineProvider>
  );
}