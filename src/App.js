//import react from source
import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Article from "./Article";
import {Story_one, Story_two} from './Stories'
class App extends Component {
  //what you want to display on the screen
  render() {
    const headerInfo = [{header: 'Curse of the Current Reviews', info: "There was little doubt that the bridge was unsafe. All one had to do was look at it to know that with certainty. Yet Bob didn't see another option. He may have been able to work one out if he had a bit of time to think things through, but time was something he didn't have. A choice needed to be made, and it needed to be made quickly."}]
    const story = [{header: "Hello WatchKit", info: "MaryLou wore the tiara with pride. There was something that made doing anything she didn't really want to do a bit easier when she wore it. She really didn't care what those staring through the window were thinking as she vacuumed her apartment.", likes: '242', comments: '74' }, {header: "Introduction to Swift", info: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.", likes: '142', comments: '37'}]



    return (
      <div>
        <Header />
        <Article headerInfo = {headerInfo} />
        <Story_one story = {story} />
        <Story_two story = {story} />

      </div>
    );
  }
}

export default App;
