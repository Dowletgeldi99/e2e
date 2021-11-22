export default{
  createSection(state, payload){
    state.sections.push( { title: payload.title, tasks: [] });
  },
  deleteSection(state, payload){
    state.sections.splice(payload.sectionIndex, 1);
  },
  createTaskInSection(state, payload){
    state.sections[payload.sectionIndex].tasks.push({ content: payload.content });
  },
  deleteTask(state, payload){
    state.sections[payload.sectionIndex].tasks.splice(payload.taskIndex, 1);
  },
  updateTask(state, payload){
    let index = state.sections[payload.sectionIndex].tasks.findIndex(t => t.id == payload.id);
    if(index != -1){
      state.sections[payload.sectionIndex].tasks[index] = payload;
    }
  },
  saveSections(state, payload){
    state.sections = payload.sections;
  }
}