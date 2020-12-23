import React from 'react';
import './App.css';
import SwaggerContainer from "./SwaggerContainer";
import {Col, Container, Row} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const elasticApis = ['/elastic/uffici-by-pf-name', '/elastic/uffici-by-queries'];
const neo4jApis = ['/neo4j/uffici-by-queries'];


function App() {
  return (
    <div className="App">
        <Container>
            <Row className='m-5'>
                <Col lg={6}>
                    <SwaggerContainer name={'Elastic'} apis={elasticApis} methods={['GET','POST']}/>
                </Col>
                <Col lg={6}>
                    <SwaggerContainer name={'Neo4j'} apis={neo4jApis} methods={['POST']}/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
