<template>
  <div :class="classList">
    <button class="delete-button" @click="deleteTaskI">×</button>
    <button class="edit-button" @click="updateTaskI" >{{ isEditing ? 'Update' : 'Edit' }}</button>
    <h3 v-if="!isEditing">{{ this.task.content }}</h3>
    <div v-else>
      <input :value="newContent" @change="taskContentChange" type="text" class="input-task"/>
    </div>
    
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default{
  // Board -> Section -> sectionIndex / Section -> task, taskIndex
  props: {
    sectionIndex: {
      type: Number,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    },
    task: {
      type: Object,
      required: true
    },
  },
  data(){
    return {
      newContent: "",
      isEditing: false,
    }
  },
  computed: {
    classList(){
      const classList = ['task']
      return classList;
    },
  },
  methods:{
    ...mapActions(['deleteTask', 'updateTask']),
    deleteTaskI(){
      this.deleteTask({ taskIndex: this.taskIndex, sectionIndex: this.sectionIndex })
    },
    taskContentChange(e){
      this.newContent = e.target.value;
    },
    updateTaskI(){
      console.log(this.task.content);
      this.isEditing = this.isEditing == true ? false : true;
      if(this.isEditing){
        this.newContent = this.task.content;
        this.updateTask(this.task);
      }
      else{
        this.task.content = this.newContent;
      }
    }
  },
}
</script>
