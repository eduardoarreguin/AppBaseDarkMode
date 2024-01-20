import { ThemeProvider } from './src/context';
import { RootNavigation } from './src/navigation/RootNavigation';

const App:React.FC = () => {
    return (
        <ThemeProvider> 
            <RootNavigation />
        </ThemeProvider>
    );
}

export default  App