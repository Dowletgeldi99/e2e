export default{
  createSection(context, payload){
    context.commit('createSection', payload);
  },
  deleteSection(context, payload){
    context.commit('deleteSection', payload);
  },
  createTaskInSection(context, payload){
    context.commit('createTaskInSection', payload);
  },
  deleteTask(context, payload){
    context.commit('deleteTask', payload);
  },
  updateTask(context, payload){
    context.commit('updateTask', payload);
  },
  saveSections(context, payload){
    context.commit('saveSections', payload);
  }
}