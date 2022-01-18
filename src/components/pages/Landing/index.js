import react, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Header from "../../Header";

export default class Landing extends Component {
/*
  save = (lead) => {
    const url = "http://localhost:8080/leads";
    let data = {
      nome: lead.nome,
      email: lead.email,
      observacoes: lead.observacoes,
    };
    const requestInfo = {
      method: "POST",
      body: "",
    };
    fetch(url, requestInfo);
  };
*/

constructor(props) {
  super(props)
  this.state = {
      message : this.props.state?this.props.state.message: '',
  };
}   

saveLead = () => {
  const url = "http://localhost:8080/leads";
  const data = {
      nome: this.nome,
      email: this.email,
      observacoes: this.observacoes,
  };
  const requestInfo = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
          'Content-Type': 'application/json'
      }),
  };
  fetch(url, requestInfo)
  .then(response => {
      if(!response.ok){
        throw new Error("Tem algo errado")
      }
          console.log("Anotamos, obrigado!!.")
  })
}

  render() {
    return (
      <div>
        <Header title="Landing Page" />
        <hr />
        <Form>
          <FormGroup>
            <Label for="nome"> Nome: </Label>
            <Input type="text" id="nome" onChange={e => this.nome = e.target.value} placeholder="Informe o seu nome" />
          </FormGroup>
          <FormGroup>
            <Label for="email"> Email: </Label>
            <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe o seu email" />
          </FormGroup>
          <FormGroup>
            <Label for="observacoes"> Observações: </Label>
            <Input
              type="text"
              id="observacoes"
              onChange={e => this.observacoes = e.target.value}
              placeholder="Digite alguma observação"
            />
          </FormGroup>
          <Button color="danger" block onClick={this.saveLead}>
            {" "}
            ENVIAR
          </Button>
        </Form>
      </div>
    );
  }
}
