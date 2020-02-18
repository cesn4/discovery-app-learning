import React, { FunctionComponent } from 'react';

interface SimpleComponentProps {
    text: string;
    active?: boolean;
}

const SimpleComponent: FunctionComponent<SimpleComponentProps> = ({
    text,
    active = false,
}: SimpleComponentProps) => {
    return (
        <div className="simple-component">
            <h1>{text}</h1>
            {active && <h2>Shite</h2>}
        </div>
    );
};

export default SimpleComponent;
