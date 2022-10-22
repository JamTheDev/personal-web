import { Component, FunctionComponent, HTMLAttributes, ReactNode } from "react";

type ProjectCardAttributes = {
    children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

// project card is the main component. sets up the layout and direction as well
// as the flex of its children
export class ProjectSection extends Component<HTMLAttributes<HTMLDivElement>> {

    static Card: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
        return (
            <div className="col-span-1 p-4 rounded-md border-stone-400 border-2">
                { props.children }
            </div>
        )
    }

    static Header: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
        return (
            <div className={`flex flex-col ${props.className} `}>
                {props.children}
            </div>
        );
    }

    static Body: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
        return (
            <div className={`flex flex-col ${props.className} `}>
                {props.children}
            </div>
        );
    }

    static Image: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
        return (
            <div></div>
        );
    }

    render() {
        return (
            <div className="grid grid-cols-4 py-6">
                {this.props.children}
            </div>        
        );
    };

}