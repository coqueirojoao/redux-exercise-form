const PROFESSIONAL_ACTION = 'PROFESSIONAL_ACTION';

const professionalActionState = (action) => ({
  type: PROFESSIONAL_ACTION,
  professionalInfos: action,
});

export default professionalActionState;
