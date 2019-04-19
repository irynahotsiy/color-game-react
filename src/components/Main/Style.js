import styled from 'styled-components';


export const Header = styled.div `
    background: ${props => props.color};
    margin: 0;
    padding: 10px 0;
    text-align: center;
    font-weight: inherit;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1.5rem;
`

export const RGB = styled.div `
    font-size: 2rem;
    font-weight: 600;
`

export const Buttons = styled.div `
    background: white;
    display: flex;
    flex-direction: center;
    justify-content: center;
`


export const Button = styled.span `
    color: ${props => props.color};
    letter-spacing: 2px;
    font-size: 1.0em;
    font-weight: 700;
    padding: 10px;
    &:hover {
        color: white;
        background: ${props => props.color};
        cursor: pointer;
        transition: all 0.5s;
        --webkit-transition: all 0.5s;
        --moz-transition: all 0.5s;
        }
`


export const Correct = styled.span `
    display: flex;
    flex-direction: center;
    justify-content: center;
    width: 20%;
    color: black;
    padding: 10px;
`



export const Colors = styled.div `
    text-align: center;
    color: white;
    padding-top: 50px;
    margin: 0px auto;
    max-width: 600px;
`
    
export const Color = styled.div `
    visibility: ${ props => props.isVisible ? "visible" : "hidden"};
    width: 30%;
    color: white;
    background: ${ props => props.color };
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 15px;
    cursor: pointer;
    transition: background 1.0s;
    --webkit-transition: background 1.0s;
    --moz-transition: background 1.0s;
`
   