import React, { Component } from 'react';

class LifeCycleChild extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
        console.log("je suis dans le constructeur LifeCycleChild");
    }
    componentDidMount() {
        console.log("je suis dans le componentDidMount LifeCycleChild");
    }

    render() {
        console.log("je suis dans le render LifeCycleChild")
        return (
            <div>
                {console.log("je suis dans le render ==> return LifeCycleChild")}
            </div>
        );
    }
}

export default LifeCycleChild;