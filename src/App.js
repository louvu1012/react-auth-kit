import './App.css';
import AuthProvider from 'react-auth-kit';
import SignIn from './modules/auth/sign-in';
import { store } from './provider/store';

const App = () => (
    <AuthProvider store={store}>
        <SignIn />
    </AuthProvider>
);

export default App;