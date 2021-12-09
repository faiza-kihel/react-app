import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  render() {
    const { counters, onIncrement, onDelete , onDecrement} = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
