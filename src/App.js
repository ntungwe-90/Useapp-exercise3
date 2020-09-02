import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './store/usersAction';
import UsersForm from './components/UsersForm';
import UserInfo from './components/UserInfo'

export class App extends Component {
    addNewUser = (newUser) => {
      this.props.addUser(newUser)
    };

  render(){
    return (
      <div className = "App">
       {/*form information*/ }
       <UsersForm addUser = {this.addNewUser}/>
        
        <div className = "app-info">
          {this.props.users.map((item, index) => {
            return(
            
               <UserInfo
              key={index} 
              name={item.name}
              email={item.email}
              gen={item.gen}/>

               );
          
          })}
        </div>
        </div>
        
        
     
    );
  }
}
   


    const mapStateToProps = (state) => (
      {
        users: state.users
      }
    );
    const mapDispatchToProps = {
      addUser: addUser
    }
export default connect(mapStateToProps, mapDispatchToProps)(App);



