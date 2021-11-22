<template>
  <form v-bind:class="classList" v-on:submit.prevent="createTaskInSectionI">
    <input v-model="content" type="text" class="input-text" placeholder="Add another task" v-on:focusin="startEditing" v-on:focusout="finishEditing"/>
    <button v-if="isActive || contentExists" type="submit" class="add-button">+ Add</button>
  </form>
</template>

<script>

import { mapActions } from 'vuex'

export default{
  props:{
    sectionIndex: {
      type: Number,
      required: true,
    }
  },
  data(){
    return {
      content: '',
      isActive: false,
    }
  },
  computed: {
    classList(){
      let classList = []
      if(this.isActive){
        classList.push('active')
      }
      return classList
    },
    contentExists(){
      return this.content.length > 0;
    },
  },
  methods:{
    ...mapActions(["createTaskInSection"]),
    createTaskInSectionI(){
      console.log(this.content);
      this.createTaskInSection({ content: this.content, sectionIndex: this.sectionIndex });
      this.content = '';
    },
    startEditing(){
      this.isActive = true;
    },
    finishEditing(){
      this.isActive = false;
    },
  },
}
</script>