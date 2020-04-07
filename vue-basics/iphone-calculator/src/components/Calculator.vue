<template>
  <div class="board">
    <table>
      <thead>
        <tr>
          <td class="result">
            <span>{{ getOutput }}</span>
          </td>
        </tr>
      </thead>

      <tbody>
        <tr class="row">
          <td class="button lightGray" @click="readButton('clear')">AC</td>
          <td class="button lightGray" @click="readButton('negate')">+/-</td>
          <td class="button lightGray" @click="readButton('percentage')">%</td>
          <td class="button yellow" @click="readButton('divide')">/</td>
        </tr>
        <tr class="row">
          <td class="button gray" @click="readButton('7')">7</td>
          <td class="button gray" @click="readButton('8')">8</td>
          <td class="button gray" @click="readButton('9')">9</td>
          <td class="button yellow" @click="readButton('multiply')">*</td>
        </tr>
        <tr class="row">
          <td class="button gray" @click="readButton('4')">4</td>
          <td class="button gray" @click="readButton('5')">5</td>
          <td class="button gray" @click="readButton('6')">6</td>
          <td class="button yellow" @click="readButton('minus')">-</td>
        </tr>
        <tr class="row">
          <td class="button gray" @click="readButton('1')">1</td>
          <td class="button gray" @click="readButton('2')">2</td>
          <td class="button gray" @click="readButton('3')">3</td>
          <td class="button yellow" @click="readButton('plus')">+</td>
        </tr>
        <tr class="row1">
          <td class="button gray zero" @click="readButton('0')">0</td>
          <td class="button gray" @click="readButton('.')">.</td>
          <td class="button yellow" @click="readButton('equals')">=</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.board {
  display: grid;
  padding-left: 10px;
  grid-template-rows: 20% 14.4% 14.4% 14.4% 14.4% 14.4%;
  background-color: black;
  border-radius: 2rem;
  height: 500px;
  width: 300px;
  justify-content: center;
  justify-self: center;
  box-shadow: 0 0 8px 8px gray;
}

.result {
  width: 270px;
  height: 140px;
  text-align: right;
  color: white;
  font-size: 2.5rem;
  position: relative;
}

.result span {
  position: absolute;
  bottom: 10px;
  right: 15px;
  width: 270px;
}

.row {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  width: 270px;
  margin-bottom: 8px;
}

.row1 {
  display: grid;
  grid-template-columns: 50% 25% 25%;
  text-align: center;
}

.button {
  border-radius: 28px;
  width: 56px;
  height: 56px;
  justify-content: center;
  justify-items: center;
  text-align: center;
  align-content: center;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 56px;
}

.button:hover {
  opacity: 70%;
}

.zero {
  width: 122px;
}

.zero:hover {
  opacity: 70%;
}

.lightGray {
  background-color: gray;
}

.gray {
  background-color: rgb(56, 54, 54);
  color: white;
}

.yellow {
  background-color: rgb(255, 174, 0);
  color: white;
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Calculator",
  methods: {
    ...mapActions(["read_Button"]),

    readButton(button) {
      this.read_Button(button);
    },
  },

  computed: {
    ...mapGetters(["getOutput"]),
  },
};
</script>
