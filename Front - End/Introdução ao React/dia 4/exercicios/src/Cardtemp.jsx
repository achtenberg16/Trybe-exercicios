import react from "react";

class Cardtemp extends react.Component {
  render() {
    const { title, notice, author } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p>{notice}</p>
        <p>{(!author) ? '' :`author: ${author}`}</p>
      </div>
    );
  }
}

export default Cardtemp;
