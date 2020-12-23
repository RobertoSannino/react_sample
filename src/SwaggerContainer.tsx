import React, {Fragment} from 'react';
import ApiCollapse from "./ApiCollapse";
import {Row} from "react-bootstrap";

class SwaggerContainer extends React.Component<any, any> {
    constructor(props: {name: string, apis: Array<string>, methods: Array<string>}) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>Swagger {this.props.name}</h1>
                </div>
                <div>
                    {this.props.apis.map((api: string, index: number) =>
                        <Row key={api} className='m-3'>
                            <ApiCollapse api={api} method={this.props.methods[index]}/>
                        </Row>
                        )}
                </div>
            </Fragment>
        );
    }
}

export default SwaggerContainer;