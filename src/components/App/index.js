import React, {Component} from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/DummySwаpiService";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";

import { SwapiServiceProvider, } from "../SwapiServiceContext";

import './index.css';


export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                                DummySwapiService : SwapiService;
            return {
              swapiService: new Service()
            };
        });
    };


    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className='stardb-app'>
                        <Header onServiceChange={this.onServiceChange} />

                        <RandomPlanet />
                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}