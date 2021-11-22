<template>
  <div class="section">
    <div class="listheader">
      <p class="section-title new-section-title">{{ title }}</p>
      <div class="deleteSection" @click="deleteSectionI">×</div>
    </div>
    <!-- draggableコンポーネントはpropsの1つとして、listプロパティを受け取り、listプロパティはコンポーネントがドラッグ&ドロップされるたびに定義されたtasksのデータを更新してくれます。 -->
    <!-- endイベントはドラッグ&ドロップの操作が終わったあと、最後に発生するイベントです。 -->
    <draggable group="tasks" :list="tasks" @end="$emit('change')">
      <!-- props data -- Section -> Task (content, taskIndex, sectionIndex) -->
      <Task v-for="(task, index) in tasks" :key="task.id" :task="task" :taskIndex="index" :sectionIndex="sectionIndex"/>
      <!-- props data -- Section -> TaskCreate (sectionIndex) -->
      <TaskCreate :sectionIndex="sectionIndex"/>
    </draggable>
  </div>
</template>

<script>

import TaskCreate from './TaskCreate.vue'
import Task from './Task.vue'
import draggable from 'vuedraggable'
import { mapActions } from 'vuex'

export default{
  components: {
    TaskCreate,
    Task,
    draggable,
  },
  // Boardからのデータ -> sectionIndex, title, , tasks
  props: {
    title: {
      type: String,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    },
    sectionIndex: {
      type: Number,
      required: true
    },
  },
  methods: {
    ...mapActions(["deleteSection"]),
    deleteSectionI(){
      this.deleteSection({sectionIndex: this.sectionIndex});
    },
  }
}
</script>