import React, {Component} from "react";

class Counter extends Component {
    styles = {
        fontSize: 20,
        fontWeight: "900",
    };

    constructor(props) {
        super(props);
        console.log(props);
        //this is how we bind object of current class to a method, but this is very VERBOSE
        //this.handleIncrement = this.handleIncrement.bind(this);
    }

    /*handleIncrement() {
        console.log("Button clicked", this);
    }*/

    //bind the object of current class to a method using arrow function (preferred & cleaner)

    render() {
        return (
            <React.Fragment>
                <div>
                    <h2>This is counter number {this.props.counter.id}</h2>
                    <span className={this.setBadgeClass()}>{this.formatCount()}</span>
                    <button
                        onClick={() => this.props.onChangeValue(this.props.counter, 1)}
                        className="btn btn-primary m-1"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => this.props.onChangeValue(this.props.counter, -1)}
                        className="btn btn-danger m-1"
                    >
                        Decrement
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-1">
                        Delete Counter
                    </button>
                </div>
            </React.Fragment>
        );
    }

    setBadgeClass() {
        const defaultBgClasses = "m-2 badge bg-";
        const bgClass =
            defaultBgClasses +
            (this.props.counter.value === 0 ? "warning" : this.props.counter.value < 0 ? "danger" : "primary");
        return bgClass;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value < 0 ? "Negative " + value : "Positive " + value;
    }
}

export default Counter;

/*
 * Export can be done as above or can also be done directly in the class declaration itself
 * Example:
 * export default class Counter extends Component {...}
 */
