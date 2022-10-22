import { Component, FunctionComponent, HTMLAttributes } from "react";

class Card extends Component<HTMLAttributes<HTMLDivElement>> {

    static Body: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
        return (
            <div className={`w-full ${props.className}`}>
                {props.children}
            </div>
        )
    }

    static Header: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
        return (
            <div className={`w-full ${props.className}`}>
                {props.children}
            </div>
        )
    }

    static Footer: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
        return (
            <div className={`w-full ${props.className}`}>
                {props.children}
            </div>
        )
    }

    render() {
        return (
            <div className={
                `w-full h-full 
                rounded-md 
                border-2 border-solid border-stone-400 
                p-2 ${this.props.className}`}>
                    {this.props.children}
            </div>
        )
    }
}

export default Card;