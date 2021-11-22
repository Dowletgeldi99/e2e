<template>
  <div>
    <header>
      Task Management Board
    </header>
    <!-- key属性には、一意なsection.idを設定 -->
    <!-- changeイベントをBoard.vueで受け取る -->
    <draggable class="d-flex" :list="sections" @end="movingSections">
      <Section v-for="(section, index) in sections" :key="section.id" :title="section.title" :tasks="section.tasks" :sectionIndex="index" @change="movingTasks" />
      <SectionCreate/>
    </draggable>
  </div>
</template>

<script>

import SectionCreate from '../components/SectionCreate.vue'
import Section from '../components/Section.vue'
import draggable from 'vuedraggable'
import { mapState } from 'vuex'

export default {
  components: {
    SectionCreate,
    Section,
    draggable,
  },
  computed: {
    ...mapState(['sections']),
  },
  methods: {
    movingSections: function(){
      this.$store.dispatch('saveSections', { sections: this.sections })
    },
    movingTasks: function(){
      this.$store.dispatch('saveSections', { sections: this.sections })
    }
  }
};
</script>
