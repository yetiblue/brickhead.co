import "./HeaderComponent.css";
import React from "react";

interface MyState {
  value: string;
}
interface StringArray {
  name: string;
  website: string;
}
let collaboratorsList: StringArray[] = [
  { name: "Ewurakua Dawson-Amoah", website: "https://www.byraekua.com/" },
  {
    name: "Gabriel Crawford Connelly",
    website: "https://www.gabrielconnelly.com/",
  },
  { name: "Zac Dov Weisel", website: "https://zacdovwiesel.com/" },
  { name: "Ragan Henderson", website: "https://www.raganhenderson.com/" },
  { name: "Giles Perkins", website: "https://www.gilesperkins.com/" },
  { name: "Nick Freeman", website: "https://www.nickfreemanfilm.com/" },
  { name: "Matthew O’Connor", website: "matthewoconnorfilms.com" },
  { name: "Jack Doc Simon", website: "https://www.jacksimonmakes.com" },
  { name: "Alex Fischman", website: "https://alexfischman.com/" },
  { name: "Caleb Wild", website: "https://calebwild.com/" },
  { name: "Zen Pace", website: "https://zenzadihpace.com/" },
  { name: "Mike Klubeck", website: "https://www.mikeklubeck.com/" },
];

class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collaborators: collaboratorsList,
      showSidebar: false,
    };
    this.openSidebar = this.openSidebar.bind(this);
  }
  async openSidebar() {
    await this.setState({ showSidebar: !this.state.showSidebar }); //setState makes a request and isn't instant
    console.log("called", this.state.showSidebar);

    if (this.state.showSidebar === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }
  render() {
    let sidebar: string = this.state.showSidebar
      ? "mobile-sidebar"
      : "mobile-sidebar-hide";
    let collaboratorList = this.state.collaborators.map(
      (person: StringArray) => (
        <li key={person.name} className="header-wrapper__directors__li">
          <a
            className="director-names"
            href={`${person.website}`}
            target="_blank"
          >
            {person.name}
          </a>
        </li>
      )
    );
    return (
      <div className="header-wrapper">
        <img
          className="header-wrapper__logo"
          src="https://timmyportfolio.s3.us-east-2.amazonaws.com/BrickHead/Copy+of+1.png"
        />
        <div className={sidebar}>
          <button onClick={this.openSidebar} className="close-sidebar-button">
            X
          </button>
          <ul className="header-wrapper__ul">
            <ul className="header-wrapper__work">
              Work ▾
              <li className="header-wrapper__work__li">Branded Content</li>
              <li className="header-wrapper__work__li">Music Videos</li>
              <li className="header-wrapper__work__li">Narrative</li>
              <li className="header-wrapper__work__li">Documentary</li>
            </ul>

            <ul className="header-wrapper__directors">
              Collaborators ▾{collaboratorList}
            </ul>

            <li className="header-wrapper__li">About</li>
            <li className="header-wrapper__li"></li>
          </ul>
        </div>
        <button onClick={this.openSidebar} className="sidebar-button">
          {" "}
          ☰
        </button>
      </div>
    );
  }
}
export default HeaderComponent;
