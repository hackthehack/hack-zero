import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../Dashboard";

import { Analytics, Storage, API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';



class FindHacksClass extends Component {

    state = {
        hacks: []
    }



    componentDidMount = () => {
        this.getItems()

    }

    getItems = () => {
        API.graphql(graphqlOperation(queries.listHackss))
            .then(data => this.setState({hacks: data.data.listHackss.items}))
    };

    listQuery = async () => {
        console.log('listing todos');
        const allTodos = await API.graphql(graphqlOperation(queries.listHackss));
        alert(JSON.stringify(allTodos));
    };


    render() {
        return <>
            <h1>Hack Ideas</h1>

            <div>

                {this.state.hacks.map((hack, i) => (
                    <p key={hack.id}>
                        {hack.name} : {hack.description}
                    </p>
                ))}
            </div>
        </>
    }


}

export default FindHacksClass