export default {
  changeDisplayContent: (state, displayContent) => {
    state.content.displayContent = displayContent;
  },

  changeResultContent: (state, resultContent) => {
    state.content.resultContent = resultContent;
  },

  changeOperator: (state, operator) => {
    state.content.operator = operator;
  },

  changeFlag: (state, flag) => {
    state.content.flag = flag;
  },

  changePreviousOperand: (state, previousOperand) => {
    state.content.previousOperand = previousOperand;
  }  
};
