import React, { Component } from "react";
import { Header } from "./Style";
import { RGB } from "./Style";
import { Buttons } from "./Style";
import { Button } from "./Style";
import { Correct } from "./Style";
import { Colors } from "./Style";
import { Color } from "./Style";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor: "",
      colors: [],
      status: " ",
      playAgain: "New colors",
      headBackground: "rgb(0, 0, 254)"
    };
  }

  generateColors = count => {
    let Colors = [];

    for (let i = 0; i < count; i++) {
      let col =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        ", " +
        Math.floor(Math.random() * 255) +
        ", " +
        Math.floor(Math.random() * 255) +
        ")";
      // Colors.push(col);
      Colors.push({ color: col, vis: true });
    }

    let random = Math.floor(Math.random() * Colors.length);
    console.log(Colors);
    console.log(random);
    this.setState({
      colors: Colors,
      randomColor: Colors[random].color,
      status: "",
      playAgain: "New Colors",
      headBackground: "rgb(0, 0, 254)"
    });
  };

  componentDidMount() {
    this.generateColors(6);
  }

  onClickColor = color => {
    debugger;
    let arrayColors = this.state.colors;
    let headColor = this.state.randomColor;
    console.log(headColor);
    if (color.color === headColor) {
      for (let i = 0; i < arrayColors.length; i++) {
        arrayColors[i].color = headColor;  
        arrayColors[i].vis = true;
      }
      this.setState({
        status: "Correct!",
        playAgain: "Play again?",
        colors: arrayColors,
        headBackground: color.color
      });
    } else {
      color.vis = false;
      this.setState({
        status: "Try again...",
      });
    }
  };

  render() {
    return (
      <>
        <section>
          <Header color={this.state.headBackground}>
            <div>The great</div>
            <RGB> {this.state.randomColor} </RGB>
            <div>guessing game</div>
          </Header>
        </section>
        <Buttons>
          <Button
            color={this.state.headBackground}
            onClick={() =>
              this.generateColors(
                this.state.colors.length ? this.state.colors.length : 6
              )
            }
          >
            {this.state.playAgain}
          </Button>
          <Correct className="word-correct">{this.state.status}</Correct>
          <Button
            color={this.state.headBackground}
            className="easy-btn btn"
            onClick={() => this.generateColors(3)}
          >
            Easy
          </Button>
          <Button
            color={this.state.headBackground}
            className="hard-btn btn"
            onClick={() => this.generateColors(6)}
          >
            Hard
          </Button>
        </Buttons>
        <Colors>
          {this.state.colors.map(el => (
            <Color
              visibility={el.vis}
              color={el.color}
              onClick={() => this.onClickColor(el)}
            />
          ))}
        </Colors>
      </>
    );
  }
}

export default Main;
