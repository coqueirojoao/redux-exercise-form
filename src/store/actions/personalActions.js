const PERSONAL_ACTION = 'PERSONAL_ACTION';

const personalActionState = (action) => ({
  type: PERSONAL_ACTION,
  personalInfos: action,
});

export default personalActionState;
