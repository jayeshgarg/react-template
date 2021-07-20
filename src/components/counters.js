import React from 'react'
import Counter from './counter'

/*
Instead of usual class, if a class has just render method and nothing else, then it can be converted to
Stateless Functional Component(SFC)
NOTE: Lifecycle hooks cannot be used in SFC's
Old Way:
export default class Counters extends Component {
    render() {
        return (
            ...
        );
    }
}

New Way:
 */

const Counters = (props) => {
    const { onReset, onDelete, onChangeValue, counters } = props
    return (
        <div>
            <button onClick={onReset} className='btn btn-success m-1'>
                Reset
            </button>
            {counters.map((ctr) => (
                <Counter
                    key={ctr.id}
                    counter={ctr}
                    onDelete={(id) => onDelete(id)}
                    onChangeValue={(ctr, val) => onChangeValue(ctr, val)}
                />
            ))}
        </div>
    )
}

export default Counters //export default can't be put in front of SFC declaration

/*
Note: New way doesn't require this keyword with props
Also, we can destructor props to directly deal with the properties that we want. For eg.
const Counters = ({counters}) => {
    return (
        <div>{counters}</div>  //note we are not using any this or props keyword here
    );
}
*/
