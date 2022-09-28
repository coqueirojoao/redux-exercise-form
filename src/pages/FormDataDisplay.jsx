import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { list } = this.props;
    const { personalInfos, professionalInfos } = list;
    return (
      <section className="box column is-half is-offset-one-quarter">
        <h1 className="title">Dados Enviados</h1>
        <div>
          Nome:
          {' '}
          {personalInfos.name}
        </div>
        <div>
          Email:
          {' '}
          {personalInfos.email}
        </div>
        <div>
          CPF:
          {' '}
          {personalInfos.cpf}
        </div>
        <div>
          Endereço:
          {' '}
          {personalInfos.address}
        </div>
        <div>
          Cidade:
          {' '}
          {personalInfos.city}
        </div>
        <div>
          Estado:
          {' '}
          {personalInfos.uf}
        </div>
        <div>
          Currículo:
          {' '}
          {professionalInfos.curriculum}
        </div>
        <div>
          Cargo:
          {' '}
          {professionalInfos.job}
        </div>
        <div>
          Descrição do cargo:
          {' '}
          {professionalInfos.description}
        </div>
      </section>
    );
  }
}

FormDataDisplay.propTypes = {
  list: PropTypes.shape({
    personalInfos: PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      cpf: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
      uf: PropTypes.string,
    }).isRequired,
    professionalInfos: PropTypes.shape({
      curriculum: PropTypes.string,
      description: PropTypes.string,
      job: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

// FormDataDisplay.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   job: PropTypes.string.isRequired,
//   curriculum: PropTypes.string.isRequired,
//   uf: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  list: state.formReducer,
});
export default connect(mapStateToProps, null)(FormDataDisplay);
