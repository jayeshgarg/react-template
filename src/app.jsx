import React, {Component} from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    handleDeleteCounter = (id) => {
        console.log("attempt to delete #" + id + " counter was made successfully!!!");
        const counters = this.state.counters.filter((c) => c.id !== id);
        this.setState({ counters: counters });
    };

    handleReset = () => {
        console.log("attempt to reset counters was made!!!");
        /*----------To reset without bringing back the deleted counters
        const counters = this.state.counters.map((ctr) => {
            ctr.value = 0;
            return ctr;
        });*/
        /*----------To reset while bringing back the deleted counters*/
        const counters = [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ];
        this.setState({ counters });
        console.log("reset successful!!!");
    };

    handleIncrementDecrement = (ctr, val) => {
        /*
        Create clone of an array
        NOTE: It copies the references to the original object as well
        const counters = [...this.state.counters];
         */

        console.log("Button clicked", this);
        const counters = [...this.state.counters];
        const index = counters.indexOf(ctr);
        counters[index] = { ...ctr };
        counters[index].value += val;
        /*
        const counters = this.state.counters.map((ctrItr) => {
            if (ctrItr.id === ctr.id) ctrItr.value += val;
            return ctr;
        });*/
        this.setState({ counters }); //correct
        //this.setState(counters); //incorrect
    };

    render() {
        return (
            <React.Fragment>
                <Navbar counters={this.state.counters} />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={(id) => this.handleDeleteCounter(id)}
                        onChangeValue={(ctr, val) => this.handleIncrementDecrement(ctr, val)}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
