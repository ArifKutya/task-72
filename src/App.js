import { Component } from "react";

export default class App extends Component {
  state = {
    array: [
      { start: '#', string: 'boomdotdev' },
      { clasName: "tag", string: 'task' },
      { clasName: "tags", string: 'tags' },
      { string: 'react' },
    ]
  }

  render() {
    return <div>{this.state.array.length}</div>
  }
}

