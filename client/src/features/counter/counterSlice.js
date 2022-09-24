const initialState = {
  user: {},
  patients: [],
  appointments: [],
  patientForAppointment: {},
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "user/login":
      return {
        ...state,
        user: action.user,
      };
    case "user/logout":
      return {
        ...state,
        user: {},
        patients: [],
      };
    case "patients/save":
      return {
        ...state,
        patients: action.patients,
      };
      case "patients/appointment":
      return {
        ...state,
        patientForAppointment: action.patient,
      };
    case "appointments/save":
      return {
        ...state,
        appointments: action.appointments,
      };
    default:
      return state;
  }
}

export default counterReducer;
