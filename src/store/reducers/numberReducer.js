const initNr = { nr: 0 };

export default function mumberReducer(state= initNr, action) {
  switch (action.type) {
    case 'plus':
      return {
        ...state,
        nr: state.nr + 1
      }
      case 'minus':
        return {
          ...state,
          nr: state.nr - 1
        }
    default:
      return state;
  }
}