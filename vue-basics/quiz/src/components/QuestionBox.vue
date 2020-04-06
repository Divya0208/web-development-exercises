<template>
  <div>
    <b-jumbotron>
      <template v-slot:lead>
        {{ questionObject.question }}
      </template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          v-for="(option, index) in shuffledOptions"
          :key="index"
          @click.prevent="selectAnswer(index)"
          :class="answeredClass(index)"
        >
          {{ option }}
        </b-list-group-item>
      </b-list-group>

      <b-button
        variant="primary"
        @click="submitAnswer"
        :disabled="selectedIndex === null || answered"
      >
        Submit
      </b-button>

      <b-button variant="success" @click="next">
        Next
      </b-button>
    </b-jumbotron>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    questionObject: Object,
    next: Function,
    increment: Function
  },

  data: function() {
    return {
      selectedIndex: null,
      shuffledOptions: null,
      answered: false
    };
  },

  watch: {
    questionObject: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.shuffleOptions();
        this.answered = false;
      }
    }
  },

  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },

    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.increment(isCorrect);
      this.answered = true;
    },

    shuffleOptions() {
      let options = [...this.questionObject.incorrect_answers];
      options.push(this.questionObject.correct_answer);
      this.shuffledOptions = _.shuffle(options);
      this.correctIndex = this.shuffledOptions.indexOf(
        this.questionObject.correct_answer
      );
    },

    answeredClass(index) {
      let answerClass = "";

      if (!this.answered && this.selectedIndex === index) {
        answerClass = "selected-option";
      } else if (this.answered && this.correctIndex === index) {
        answerClass = "correct-option";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = "wrong-option";
      }
      return answerClass;
    }
  }
};
</script>

<style scoped>
.list-group {
  margin-bottom: 16px;
}

.btn {
  margin: 0 5px;
}

.selected-option {
  background: lightblue;
}

.correct-option {
  background: rgb(109, 231, 109);
}

.wrong-option {
  background: rgb(245, 104, 104);
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
</style>
