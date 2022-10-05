const initialState = {
  user: {},
  patients: [],
  appointments: [],
  patientForAppointment: {},
  appointment: {},
  medicines: {},
  frequencies: {},
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
        user: action.user,

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
    case "appointments/current":
      return {
        ...state,
        appointment: action.appointment,
      };
    case "medicines/save":
      return {
        ...state,
        medicines: action.medicines,
      };
      case "frequencies/save":
      return {
        ...state,
        frequencies: action.frequencies,
      };
    default:
      return state;
  }
}

export default counterReducer;
