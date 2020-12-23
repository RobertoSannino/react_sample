import React from 'react';

class GraphResult extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.result}
            </div>
        );
    }
}

export default GraphResult;