import "./HeaderComponent.css";
import React from "react";
import { Link } from "react-router-dom";

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
        <button onClick={this.openSidebar} className="sidebar-button">
          {" "}
          ☰
        </button>
        <Link to="/">
          <img
            className="header-wrapper__logo"
            src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/BH-logo-V4-reverse-min.png"
          />
        </Link>
        <img
          className="header-wrapper__IG"
          src="https://timmyportfolio.s3.us-east-2.amazonaws.com/Brickhead-stills-2/Instagram-Glyph-White-Logo.wine-min.png"
        />

        <div className={sidebar}>
          <button onClick={this.openSidebar} className="close-sidebar-button">
            X
          </button>
          <ul className="header-wrapper__ul">
            <li className="header-wrapper__li">WORK</li>
            <li className="header-wrapper__li">
              {" "}
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>

            <li className="header-wrapper__li">
              {" "}
              <Link className="link" to="/collaborators">
                COLLABORATORS
              </Link>
            </li>

            <li className="header-wrapper__li">
              {" "}
              <a
                href="https://www.lightrange.productions/"
                className="link"
                target="_blank"
              >
                VFX
              </a>
            </li>

            <li className="header-wrapper__li"></li>
          </ul>
        </div>

        <ul className="header-wrapper__ul-desktop">
          <ul className="header-wrapper__work">
            Work
            <div className="absolute-position">
              {/* Work ▾ */}
              <li className="header-wrapper__work__li">
                {" "}
                <Link className="link" to="/branded">
                  Branded Content
                </Link>
              </li>
              <li className="header-wrapper__work__li">
                {" "}
                <Link className="link" to="/musicvideos">
                  Music Videos
                </Link>
              </li>
              <li className="header-wrapper__work__li">
                <Link className="link" to="/narrative">
                  Narrative
                </Link>
              </li>
              <li className="header-wrapper__work__li">
                <Link className="link" to="/documentary">
                  Documentary
                </Link>
              </li>
            </div>
          </ul>

          <ul className="header-wrapper__directors">
            <Link
              className="header-wrapper__directors__link"
              to="/collaborators"
            >
              Collaborators
            </Link>
            {/* <div className="absolute-position">{collaboratorList}</div> */}
          </ul>
          <li className="header-wrapper__li">
            {" "}
            <a
              href="https://www.lightrange.productions/"
              className="about-link"
              target="_blank"
            >
              VFX
            </a>
          </li>
          <li className="header-wrapper__li">
            <Link className="about-link" to="/about">
              About
            </Link>
          </li>
          <li className="header-wrapper__li"></li>
        </ul>
      </div>
    );
  }
}
export default HeaderComponent;
