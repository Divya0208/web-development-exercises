function writeOutput(state, output) {
  state.content.displayContent = output;
}

function readInput(state) {
  let input = state.content.displayContent;
  return input;
}

function equate(state, input){
  state.content.previousOperand = Number(state.content.previousOperand);
  let output = 0;
  if (state.content.operator == "multiply") {
    output = state.content.previousOperand * Number(input);
  } else if (state.content.operator == "plus") {
    output = state.content.previousOperand + Number(input);
  } else if (state.content.operator == "minus") {
    output = state.content.previousOperand - Number(input);
  } else if (state.content.operator == "divide") {
    if (input == "0") {
      output = "infinity";
    } else {
      
      output = state.content.previousOperand / Number(input);
    }
  } else if (state.content.operator == "") {
    output = input;
  } else {
    alert("Something is wrong!");
  }
  state.content.operator = "";
  state.content.previousOperand = output;
  output = String(Number(Number(output).toFixed(10)));
  return output;
}

function readButton(state, button){
  let output = 0,
  input = String(readInput(state));
  if (button == "clear") {
  output = 0;
  state.content.previousOperand = 0;
  state.content.resultContent = 0;
  state.content.flag = 0;
  state.content.operator = "";
  writeOutput(state,output);
} else if (button == "negate") {
  if (state.content.operator == "") {
    output = -1 * Number(input);
  } else {
    output = equate(state,input);
    output = -1 * Number(output);
    console.log(output);
  }
  output = String(Number(Number(output).toFixed(10)));
  writeOutput(state,output);
} else if (button == "percentage") {
  if (state.operator == "") {
    output = Number(input) / 100;
  } else {
    output = equate(state,input);
    output = Number(output) / 100;
    console.log(output);
  }
  output = String(Number(Number(output).toFixed(10)));
  writeOutput(state,output);
} else if (
  button == "divide" ||
  button == "multiply" ||
  button == "plus" ||
  button == "minus"
) {
  if (state.content.operator == "") {
    output = input;
  } else {
    output = equate(state,input);
  }
  state.content.previousOperand = output;
  state.content.operator = button;
  state.content.flag = 1;
  writeOutput(state,output);
} else if (
  button == "0" ||
  button == "1" ||
  button == "2" ||
  button == "3" ||
  button == "4" ||
  button == "5" ||
  button == "6" ||
  button == "7" ||
  button == "8" ||
  button == "9"
) {
  if (state.content.flag == 0) {
    if (input.includes('.')) {
      state.content.resultContent = Number(input + button);
    } else {
      state.content.resultContent = 10 * state.content.resultContent + Number(button);
    }

    output = state.content.resultContent;
    writeOutput(state,output);
  } else {
    state.content.resultContent = Number(button);
    output = state.content.resultContent;
    writeOutput(state,output);
    state.content.flag = 0;
  }
} else if (button == ".") {
  if (!input.includes(".")) {
    output = input + ".";
    writeOutput(state,output);
  }
} else if (button == "equals") {
  output = equate(state,input);
  writeOutput(state,output);
  state.content.resultContent = 0;
}
}

export default {
    read_Button: (state, button) => {
      readButton(state, button);
    }
    
};