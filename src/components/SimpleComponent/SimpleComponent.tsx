import React, { FunctionComponent } from 'react';

interface SimpleComponentProps {
    text: string;
}

const SimpleComponent: FunctionComponent<SimpleComponentProps> = ({
    text,
}: SimpleComponentProps) => {
    return (
        <div className="simple-component">
            <h1>{text}</h1>
        </div>
    );
};

export default SimpleComponent;
