import React from 'react';
import {Row} from "react-bootstrap";
import {QueryApi} from "./FormPostApi";

class FormQueryApi extends React.Component<number & QueryApi & any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row className='mt-2 mb-2'>
                    <input name="_key" value={this.props._key} type="text" className='mr-2'
                           onChange={(e) => this.props.onChange(this.props.i, "_key", e.target.value)} />
                    <input name="value" value={this.props.value} type="text"
                           onChange={(e) => this.props.onChange(this.props.i, "value", e.target.value)} />
                </Row>
                <Row>
{/*                    <input name="searchType" type="select" className='mr-2'>
                        <option value="EXACT">EXACT</option>
                        <option value="STARTS_WITH">STARTS_WITH</option>
                        <option value="CONTAINS">CONTAINS</option>
                    </input>*/}
                    <input name="label" value={this.props.label} type="text"
                           onChange={(e) => this.props.onChange(this.props.i,"label",e.target.value)} />
                </Row>
            </div>
        );
    }
}

export default FormQueryApi;