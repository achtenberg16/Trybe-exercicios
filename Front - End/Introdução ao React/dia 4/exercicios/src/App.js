import React from "react";
import Form from "./Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notice: [],
    };
  }

  handleSubmitState = (obj) => {
    const { notice } = this.state;
    this.setState({
      notice: [...notice, obj],
    });
  };

  render() {
    const { notice } = this.state;
    return (
      <>
        <Form envia={this.handleSubmitState} />
        <div>
          {notice.length
            ? notice.map(({ title, notice, author }) => {
                return (
                  <div key={title}>
                    <p>{title}</p> <p>{notice}</p> <p>{author}</p>{" "}
                  </div>
                );
              })
            : ""}
        </div>
      </>
    );
  }
}

export default App;
