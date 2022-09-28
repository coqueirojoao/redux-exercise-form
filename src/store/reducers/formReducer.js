const INITIAL_STATE = {
  personalInfos: {},
  professionalInfos: {},
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'PERSONAL_ACTION':
    return {
      ...state,
      personalInfos: action.personalInfos,
    };
  case 'PROFESSIONAL_ACTION':
    return {
      ...state,
      professionalInfos: action.professionalInfos,
    };
  default:
    return state;
  }
}
export default formReducer;
