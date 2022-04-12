import React from "react";
import Cardtemp from "./Cardtemp";
import Input from "./Input";

class Form extends React.Component {
  constructor() {
    super();

    this.initialState = {
      title: "",
      notice: "",
      author: "",
    };

    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { value, name: nomeDoForm } = event.target;
    this.setState({
      [nomeDoForm]: value,
    });
  }

  render() {
    const { title, notice, author } = this.state;
    const { envia } = this.props;
    return (
      <>
        <form>
          <Input
            name='title'
            type='text'
            value={title}
            handleChange={this.handleChange}
          ></Input>
          <Input
            name='notice'
            type='text'
            value={notice}
            handleChange={this.handleChange}
          ></Input>
          <Input
            name='author'
            type='text'
            value={author}
            handleChange={this.handleChange}
          ></Input>

          <Cardtemp title={title} notice={notice} author={author} />
        </form>
        <button
          onClick={() => {
            envia(this.state);
            this.setState(this.initialState);
          }}
          type='click'
        >
          Enviar
        </button>
      </>
    );
  }
}

export default Form;
