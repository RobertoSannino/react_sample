import React, {Fragment} from 'react';
import {QueryApi} from "./FormPostApi";

interface PcmService {
    elasticGetUfficiByPfName: (name: string, search_type: string, pageNumber: number, numberOfResults: number ) => Promise<any>;
    elasticGetUfficiByQueris: (aggrCond: string, limit: number, queries: Array<QueryApi>) => Promise<any>;
}

    const elasticGetUfficiByPfName = (name: string, search_type: string, pageNumber: number, numberOfResults: number): Promise<any> => {
        const url = "http://localhost:8080/elastic/uffici-by-pf-name?" +
            "name=" + name +
            "&searchType=" + search_type +
            "&page=" + pageNumber +
            "&results=" + numberOfResults;
        return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "GET"}).then(res => res.text())
    }

    const elasticGetUfficiByQueris = (aggrCond: string, limit: number, queries: Array<QueryApi>): Promise<any> => {
        const url = "http://localhost:8080/elastic/uffici-by-queries?" +
            "queryLogic=" + aggrCond +
            "&limit=" + limit;
        const q = queries.map(q => {q['key'] = q._key; delete q._key; return q;})
        return fetch(url, {headers : {'Content-Type' : 'application/json'}, method : "POST", body: JSON.stringify(q)}).then(res => res.text())
    }

export const pcmService: PcmService = {
    elasticGetUfficiByPfName: elasticGetUfficiByPfName,
    elasticGetUfficiByQueris: elasticGetUfficiByQueris
}
