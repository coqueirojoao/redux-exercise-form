import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import professionalActions from '../store/actions/professionalActions';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleClick(event) {
    event.preventDefault();
    const { secondDispatch, history } = this.props;
    secondDispatch(this.state);
    return history.push('/formdisplay');
  }

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <form
        className="box column is-half is-offset-one-quarter"
        onSubmit={ () => console.log('Envia as informações para a store') }
      >
        <h1 className="title">Informações Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          type="submit"
          label="Enviar"
          moreClasses="is-fullwidth is-info"
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

ProfessionalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  secondDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  secondDispatch: (state) => dispatch(professionalActions(state)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
