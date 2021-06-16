import React, { Component } from 'react';
import LifeCycleChild from './LifeCycleChild';
import PureComp from './PureComponent';

class LifeCycle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Toto',
            step: 1
        }
        console.log(this.state.step + ": Je suis dans le constructor LifeCycle");
    }

    componentDidMount () {
        console.log(this.state.step + ": Je suis dans le componentDidMount LifeCycle");
        this.setState({
            step: this.state.step +1
        })
        console.log("je suis dans le componentDidMount LifeCycle et j'incremente")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Je suis dans shouldComponentUpdate LifeCycle");
        console.log(nextProps);
        console.log(nextState);
        return true
    }

    forceChange = () => {
        this.forceUpdate(() => {
            console.log("Je fait un forceUpdate et je force le changement");
        })
    }

    static getDerivedStateFromProps (props, state) {
        console.log("Je suis dans le getDerivedStateFromProps LifeCycle");
        console.log(props);
        console.log(state);
        return null
    }

    componentDidUpdate( prevProps,prevState) {
        console.log("je suis dans le componentDidUpdate LifeCycle")
        console.log(prevState);
        console.log(this.state);
    }

    componentWillUnmount() {
        console.log("je suis dans le componentWillUnmount LifeCycle")
    }

    render () {
        console.log(this.state.step + ": Je suis dans le render LifeCycle")
        return (
            <div>
                {console.log(this.state.step + ": Je suis dans le render ==> return LifeCycle")}
                {this.state.name}
                <br />
                {`step : ${this.state.step}`}
                <button onClick={this.forceChange}>forcer changement</button>
                <LifeCycleChild />
                <PureComp/>
            </div>
        );
    }
}

export default LifeCycle;