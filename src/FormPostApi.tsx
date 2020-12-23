import React, {Fragment} from 'react';
import {Formik, Field, Form, FormikValues} from "formik";
import {Row} from "react-bootstrap";
import FormQueryApi from "./FormQueryApi";

export interface QueryApi {
    _key?: string,
    value: string,
    searchType: string,
    label: string,
    // onChange: (i: number, input: string, newValue: string) => null
}

class FormPostApi extends React.Component< any, Array<QueryApi> & any > {
    constructor(props: { api: string, sendRequest: (api: string, formData: FormikValues) => void }) {
        super(props);
        this.state = {queries: [{_key: 'name', value: 'ciccio', searchType: 'EXACT', label: 'Pf'}], test: "test" };
        this.handleQueryOnChange = this.handleQueryOnChange.bind(this);
        this.addQuery = this.addQuery.bind(this);
    }

    handleQueryOnChange(i: number, inputChanged: string, newValue: string) {
        let queries = this.state.queries;
        queries[i][inputChanged] = newValue;
        this.setState({queries: queries});
    }

    addQuery() {
        let queries = this.state.queries;
        queries.push({_key: 'name', value: 'ciccio', searchType: 'EXACT', label: 'Pf'});
        this.setState({queries: queries});
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Row className='m-1'>
                        {this.state.queries.map((q: QueryApi, i: number) =>
                            <Row key={i} className='mt-2'>
                                <FormQueryApi i={i} _key={q._key} value={q.value} searchType={q.searchType} label={q.label} onChange={this.handleQueryOnChange}/>
                            </Row>)
                        }
                    </Row>
                    <Row>
                        <button value='Add Query' onClick={this.addQuery} className='mt-2 mb-2'> + </button>
                    </Row>
                    <Formik
                        initialValues={{ queryLogic: "OR", limit: 20  }}
                        onSubmit={(values) => this.props.onSubmit(this.props.api, values, this.state.queries)}>
                        <Form>
                            <Row className='mt-2'>
                                <Field name="queryLogic" as="select">
                                    <option value="OR">OR</option>
                                    <option value="AND">AND</option>
                                </Field>
                                <Field name="limit" type="number"/>
                            </Row>
                            <Row className='mt-2 mb-2'>
                                <button type="submit">Submit</button>
                            </Row>
                        </Form>
                    </Formik>
                </div>


            </Fragment>
        );
    }
}

export default FormPostApi;
