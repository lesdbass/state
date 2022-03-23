import './App.css';
import React from 'react';
import Profil from './Component/Profil';
class App extends React.Component {
  
  render()
  {
  const Person = { id: 1,
                   fullName : "Bassem Lessoued" ,
                   bio : "Le développement web frontal correspond aux productions HTML, CSS et JavaScript d’une page internet ou d’une application qu’un utilisateur peut voir et avec lesquelles il peut interagir directement.", 
                   imgSrc : "./profil.png", 
                   profession: "Back End" , 
                   show : 'True'
                  }
  {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Welcome to checkpoint "State"</h1>
            <Profil person={Person} />

          </header> 
        </div>
      );
}

}
}

export default App;
