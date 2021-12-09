import React from "react";
class Counter extends React.Component {
  formatCount() {
    let bgColor;
    return this.props.counter.value === 0
      ? bgColor + " badge bg-warning badge-sm"
      : bgColor + " badge bg-primary badge-sm";
  }
  getValue() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
  render() {
    return (
      <div className="m-4">
        <span className={this.formatCount()}>{this.getValue()}</span>

        <button
          className="button btn-secondary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="button btn-secondary btn-sm m-2"
          disabled={this.props.counter.value === 0 ? true : false}
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>
        <button
          className="button btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          x
        </button>
      </div>
    );
  }
}

export default Counter;
