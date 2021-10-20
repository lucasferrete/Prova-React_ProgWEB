import React from 'react';
import styles from './meucss.module.css';

class Calculadora extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: '',
    };

  }

  defineNum1 = num1 =>{
      this.setState({numero1: num1.target.value});
  }

  defineNum2 = num2 =>{
      this.setState({numero2: num2.target.value});
  }

  calcular = evento =>{
    var result = 0;

    switch (evento.target.value) {
        case 'Adição':
           result = parseFloat(this.state.numero1) + parseFloat(this.state.numero2);
            break;
        case 'Subtração':
           result = parseFloat(this.state.numero1) - parseFloat(this.state.numero2);
            break;
        case 'Multiplicação':
           result = parseFloat(this.state.numero1) * parseFloat(this.state.numero2);
            break;
        case 'Divisão':
           result = parseFloat(this.state.numero1) / parseFloat(this.state.numero2);
            break;
    }

    this.setState({ resultado: '' + result });
  }
 
  render(){
    return (
      <div className="container-fluid">
        <h1>Calculadora</h1>
        <div className={styles.formgroup}>
          <form>
            <div className="row">
              <div className="col">
                <div className="numeros">
                  <label class="form-label">Número 1: </label>
                  <input type="text" class="form-control" name={"num1"} onChange={this.defineNum1} />

                  <label class="form-label">Número 2: </label>
                  <input type="text" class="form-control" name={"num2"} onChange={this.defineNum2} />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div>
                  <label>Escolha a operação desejada:</label>
                  <div class="form-check">
                    <fieldset className={styles.opcoes}>
                      <div>
                        <input type="radio" class="form-check-input" name="opcao" value="Adição" onChange={this.calcular}/>
                        <label class="form-check-label">Adição</label>
                      </div>
                      <div>
                        <input type="radio" class="form-check-input" name="opcao" value="Subtração" onChange={this.calcular}/>
                        <label class="form-check-label">Subtração</label>
                      </div>
                      <div>
                        <input type="radio" class="form-check-input" name="opcao" value="Multiplicação" onChange={this.calcular}/>
                        <label class="form-check-label">Multiplicação</label>
                      </div>
                      <div>
                        <input type="radio" class="form-check-input" name="opcao" value="Divisão" onChange={this.calcular}/>
                        <label class="form-check-label">Divisão</label>
                      </div>
                    </fieldset>
                  </div>
                </div>    
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label class="form-label">Resultado: </label>
                <input type="text" class="form-control" value={this.state.resultado} disabled="disabled" />
              </div>
            </div>    
          </form>
        </div>
      </div>
    );
  }
}

export default Calculadora;