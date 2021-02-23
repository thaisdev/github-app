import { Component } from "react";
import Content from "./content";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: "Thaís Oliveira",
        repos: 10,
        followers: 1,
        following: 1,
      },
      repos: [{ name: "Repo", link: "#" }],
      starred: [{ name: "Repo", link: "#" }],
    };
  }

  render() {
    const { userInfo, repos, starred } = this.state;
    return <Content userInfo={userInfo} repos={repos} starred={starred} />;
  }
}

export default Home;
