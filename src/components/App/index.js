import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundary from "../ErrorBoundary";
import SwapiService from "../../services/SwapiService";
import DummySwapiService from "../../services/DummySwаpiService";
import { PeoplePage, PlanetsPage, StarshipsPage, HomePage, SecretPage, LoginPage, ErrorPage } from "../Pages";
import { PlanetDetails, StarshipDetails } from "../SWComponents";

import { SwapiServiceProvider, } from "../SwapiServiceContext";
import './index.css';


export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
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

        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className='stardb-app'>
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />

                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" exact component={PlanetsPage} />
                                <Route path="/planets/:id" render={({match}) => <PlanetDetails itemId={match.params.id}/>} />
                                <Route path="/starships" exact component={StarshipsPage} />
                                <Route path="/starships/:id" render={({match}) => <StarshipDetails itemId={match.params.id}/>} />
                                <Route
                                    path="/login"
                                    render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}/>
                                    )} />
                                <Route
                                    path="/secret"
                                    render={() => (
                                        <SecretPage
                                            isLoggedIn={isLoggedIn} />
                                    )} />
                                <Route component={ErrorPage}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}