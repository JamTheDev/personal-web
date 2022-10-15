import { FunctionComponent, HTMLAttributes } from "react";

const CardBody: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                {children}
            </div>
        </>
    );
};

export default CardBody;