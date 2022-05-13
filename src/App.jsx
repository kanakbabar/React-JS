import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import SignIn from './Containers/SignIN/signIn';
import SignUp from './Containers/SignUP/signUp';



function App() {
  return (
    <div class='app'>
      <h1>Employee Management System</h1>
    
   <SignIn />

   <SignUp />
    </div>
    );
}

export default App;