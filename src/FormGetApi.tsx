import React, {Fragment} from 'react';
import {Formik, Field, Form, FormikValues} from "formik";
import {Row} from "react-bootstrap";

class FormGetApi extends React.Component<any, any> {
    constructor(props: { api: string, sendRequest: (api: string, formData: FormikValues) => void }) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Formik
                        initialValues={{ name: "ciccio", searchType: "EXACT", page: 0, results: 20  }}
                        onSubmit={(values) => this.props.onSubmit(this.props.api, values, undefined)}
                    /*onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}*/
                    >
                    <Form>
                        <Row className='mt-2'>
                            <Field name="name" type="text" className='mr-2' />
                            <Field name="searchType" as="select">
                                <option value="EXACT">EXACT</option>
                                <option value="STARTS_WITH">STARTS_WITH</option>
                                <option value="CONTAINS">CONTAINS</option>
                            </Field>
                        </Row>
                        <Row className='mt-2'>
                            <Field name="page" type="number" className='mr-2' />
                            <Field name="results" type="number" />
                        </Row>
                        <Row className='mt-2 mb-2'>
                            <button type="submit">Submit</button>
                        </Row>
                    </Form>
                </Formik>
            </Fragment>
        );
    }
}

export default FormGetApi;