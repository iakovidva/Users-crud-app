import './App.css';
import ListUsersComponent from './components/ListUsersComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterUserComponent from './components/RegisterUserComponent.jsx';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div >
      <HeaderComponent/>
      <div className="container text-center" >
      <div className="row">
      <div className="col-3">
        <RegisterUserComponent />
        </div>
        <div className="col-9">
        <ListUsersComponent />
        </div>

      </div>
    </div>
    <FooterComponent/>
  </div>

  );
}

export default App;
