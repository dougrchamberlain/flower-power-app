import * as React from 'react';
const OZ = 28.3495;

interface amount {
  available: number;
  max: number;
  displayLabel: string;
  reupDate: string;
}

class BubbleDisplay extends React.Component<amount> {
  constructor(props) {
    super(props);
  }
  renderProgressBar({ available, max, displayLabel, reupDate }) {
    var percent = (available / max) * 100;
    return (
      <div className="BubbleDisplay--container">
        <label>{displayLabel}</label>
        <div className="progress">
          <div
            style={{
              width: `${percent}%`,
            }}
          >
            <div className="overlay-progress"></div>
          </div>
        </div>
        <label className="text--overlay">{percent.toFixed(2)}%</label>
        <label htmlFor="reupDate">
          {reupDate ? 'Amount set to increase after ' + reupDate : ''}
        </label>
      </div>
    );
  }

  render() {
    return this.renderProgressBar(this.props);
  }
}

export default BubbleDisplay;
