function equate(context, input) {
  context.state.content.previousOperand = Number(context.state.content.previousOperand);
  let output = 0;
  if (context.state.content.operator == "multiply") {
    output = context.state.content.previousOperand * Number(input);
  } else if (context.state.content.operator == "plus") {
    output = context.state.content.previousOperand + Number(input);
  } else if (context.state.content.operator == "minus") {
    output = context.state.content.previousOperand - Number(input);
  } else if (context.state.content.operator == "divide") {
    if (input == "0") {
      output = "infinity";
    } else {
      output = context.state.content.previousOperand / Number(input);
    }
  } else if (context.state.content.operator == "") {
    output = input;
  } else {
    alert("Something is wrong!");
  }
  context.commit("changeOperator", "");
  output = String(Number(Number(output).toFixed(10)));
  context.commit("changePreviousOperand", output);
  return output;
}

function readButton( context, button){
  let output = 0,
    input = String(context.state.content.displayContent);
  if (button == "clear") {
    output = 0;
    context.commit("changePreviousOperand", 0);
    context.commit("changeResultContent", 0);
    context.commit("changeFlag", 0);
    context.commit("changeOperator", "");
    context.commit("changeDisplayContent", output);
  } else if (button == "negate") {
    if (context.state.content.operator == "") {
      output = -1 * Number(input);
    } else {
      output = equate(context, input);
      output = -1 * Number(output);
      console.log(output);
    }
    output = String(Number(Number(output).toFixed(10)));
    context.commit("changeDisplayContent", output);
  } else if (button == "percentage") {
    if (context.state.operator == "") {
      output = Number(input) / 100;
    } else {
      output = equate(context, input);
      output = Number(output) / 100;
    }
    output = String(Number(Number(output).toFixed(10)));
    context.commit("changeDisplayContent", output);
  } else if (
    button == "divide" ||
    button == "multiply" ||
    button == "plus" ||
    button == "minus"
  ) {
    if (context.state.content.operator == "") {
      output = input;
    } else {
      output = equate(context, input);
    }
    context.commit("changePreviousOperand", output);
    context.commit("changeFlag", 1);
    context.commit("changeOperator", button);
    context.commit("changeDisplayContent", output);
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
    if (context.state.content.flag == 0) {
      if (input.includes(".")) {
        context.commit("changeResultContent", Number(input + button));
      } else {
        context.commit(
          "changeResultContent",
          10 * context.state.content.resultContent + Number(button)
        );
      }

      output = context.state.content.resultContent;
      context.commit("changeDisplayContent", output);
    } else {
      context.commit("changeResultContent", Number(button));
      output = Number(button);
      context.commit("changeDisplayContent", output);
      context.state.content.flag = 0;
    }
  } else if (button == ".") {
    if (!input.includes(".")) {
      output = input + ".";
      context.commit("changeDisplayContent", output);
    }
  } else if (button == "equals") {
    output = equate(context, input);
    context.commit("changeDisplayContent", output);
    context.commit("changeResultContent", 0);
  }
}

export default {
  read_Button: ( context, button) => {
    readButton(context, button);
  }
};
