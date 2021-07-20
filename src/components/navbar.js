import React, {Component} from "react";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand">
                    Total Count<span className="badge rounded-pill bg-info">{this.calculateSum()}</span>
                </span>
            </nav>
        );
    }

    calculateSum() {
        let sum = 0;
        if (this.props.counters != null && !this.props.counters.length == 0) {
            this.props.counters.forEach((ctr) => (sum += ctr.value));
        }
        return sum;
    }
}
