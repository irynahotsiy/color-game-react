import React, { Component } from 'react';
import { Header } from "./Style";
import { RGB } from "./Style";
import { Buttons } from "./Style";
import { Button } from "./Style";
import { Correct } from "./Style";
import { Colors } from "./Style";
import { Color } from "./Style";


class Main extends Component {
    constructor (props){
        super (props);
        this.state = {
            randomColor: 'rgb(0, 0, 254)',
            colors: ["rgb(0, 0, 254)", "rgb(0, 0, 254)", "rgb(0, 0, 254)","rgb(0, 0, 254)","rgb(0, 0, 254)","rgb(0, 0, 254)"],
            status: " ",
            playAgain: "New colors",
            backgroundHead: "rgb(0, 0, 254)"
        }
    }


    generationColors = number => {
        let Colors = [];
        let color = "";
        for (let i = 0; i < number; i ++){
            color = "rgb(" + (Math.floor(Math.random() * 255)) + ", " + (Math.floor(Math.random() * 255)) + ", " + (Math.floor(Math.random() * 255)) + ")";
            Colors.push(color);
        }
        let random =  Math.floor(Math.random() * Colors.length); 
        console.log(Colors); 
        console.log(random)
        this.setState ({
            colors: Colors,
            randomColor: Colors[random],
            status: "",
            playAgain: "New Colors",
            backgroundHead: "rgb(0, 0, 254)"
        })
    }

    onClickColor = color => { 
        debugger;
        let arrayColors = this.state.colors;
        let headColor = this.state.randomColor;
        console.log(headColor);
        if (color === headColor){
            for (let i = 0; i < arrayColors.length; i++){
                arrayColors[i] = headColor;
            }
            this.setState ({
                status: "Correct!",
                playAgain: "Play again?",
                colors: arrayColors,
                backgroundHead: color
            })
        }
       else{
            this.setState ({
                status: "Try again",
        })  
    }
    
}

    
    render() { 
        return ( 
            <>
            <section>
                <Header color={this.state.backgroundHead}>
                <div>The great</div>
                    <RGB> {this.state.randomColor} </RGB>
                    <div>guessing game</div>
                </Header>
            </section>
            <Buttons>
                <Button color={this.state.backgroundHead} onClick={()=> this.generationColors(this.state.colors.length ? this.state.colors.length : 6)}>{this.state.playAgain}</Button>
                <Correct className="word-correct">{this.state.status}</Correct>
                <Button color={this.state.backgroundHead} className="easy-btn btn" onClick={()=> this.generationColors(3)}>Easy</Button>
                <Button color={this.state.backgroundHead} className="hard-btn btn" onClick={()=> this.generationColors(6)}>Hard</Button>
            </Buttons>
        <Colors>
        
           {this.state.colors.map(el => (
               <Color color={el} onClick={()=> this.onClickColor(el)}></Color>
           ))}

        </Colors>
            </>
         );
    }
}

 
export default Main;