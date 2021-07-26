import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Panel from './components/Panel';
import StoreDelete from './components/StoreDelete';
import StoreUpdate from './components/StoreUpdate';
import AddBook from './components/AddBook';
import StoreList from './components/StoreList';
import Chart from './components/Chart';


function App() {
  return (
    <div >
      
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/panel" component={Panel}></Route>
          <Route exact path="/storeList" component={StoreList}></Route>
          <Route exact path="/storeDelete" component={StoreDelete}></Route>
          <Route exact path="/storeUpdate/:id" component={StoreUpdate}></Route>
          <Route exact path="/addBook" component={AddBook}></Route>
          <Route exact path="/chart" component={Chart}></Route>


        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
