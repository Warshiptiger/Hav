import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Router , link} from 'react-router-dom'
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import registerscreen from './screens/registerscreen';
function App() {
    return (
        <div classname="App">
            <Navbar/>
            <BrowserRouter>

              <Route path="/home" exact component={Homescreen} />
              <Route path="/book" exact component={Bookingscreen}/>
              <Route path="/register" exact component={registerscreen}/>   
              <Route path="/login" exact component={loginscreeen}/>         
            </BrowserRouter>
        </div>
    )
}