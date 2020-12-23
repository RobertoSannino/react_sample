import React, {Fragment} from 'react';
import FormGetApi from "./FormGetApi";
import GraphResult from "./GraphResult";
import {Button, Collapse, Row} from "react-bootstrap";
import {FormikValues} from "formik";
import {pcmService} from "./PcmService";
import FormPostApi, {QueryApi} from "./FormPostApi";

class ApiCollapse extends React.Component<any, any> {
    constructor(props: { api: string, method: string }) {
        super(props);
        this.state = {open: false, response: '' }
        this.sendRequest = this.sendRequest.bind(this);
    }


    sendRequest(api: string, formData: FormikValues, queriesApi: Array<QueryApi>) {
        let promise: Promise<string>;
        switch (api) {
            case "/elastic/uffici-by-pf-name":
                promise = pcmService.elasticGetUfficiByPfName(formData['name'], formData['searchType'], formData['page'], formData['results']);
                break;
            case "/elastic/uffici-by-queries":
                promise = pcmService.elasticGetUfficiByQueris(formData['queryLogic'], formData['limit'], queriesApi);
                break;
            default:
                promise = Promise.resolve(JSON.stringify('No implementation'));
                break;
        }

        promise
            .then(
            (result: string) => {
                console.log('result: ', JSON.parse(result));
                this.setState({response: result});
            },
            (error) => {
                console.log("error", error);
            }
        )

    }

    render() {
        return (
            <Fragment>
                <Button className='m-1' onClick={() => this.setState({open: !this.state.open})}>
                    {this.props.api}
                </Button>
                <Collapse in={this.state.open}>
                    <div>
                        <Row className='m-2'>
                            {this.props.method === 'GET' ?
                                <FormGetApi api={this.props.api} onSubmit={this.sendRequest}/> :
                                <FormPostApi api={this.props.api} onSubmit={this.sendRequest}/>
                            }
                        </Row>
                        <Row className='m-2'>
                            <GraphResult result={this.state.response}/>
                        </Row>
                    </div>
                </Collapse>
            </Fragment>
        );
    }
}

export default ApiCollapse;