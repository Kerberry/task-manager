<template>
    <input
      type="text"
      autofocus
      v-if="d.isAdd"
      v-model="newTask"
      @keyup.enter="save(d, newTask)"
    />
    <template v-for="task in d.tasks" :key="task.id">
      <template v-if="task.isEdit">
        <input
          v-model="edTask"
          autofocus
          @click.stop=""
          @keyup.enter="saveEdTask(task)"
        />
        <button class="task-button" @click.stop="saveEdTask(task)">save</button>
      </template>
  
      <div class="task-name" v-else @click.stop="task.isFocus = true">
        {{ task.name }}
        <template v-if="task.isFocus">
          <button class="task-button" @mousedown="editTask(task)">edit</button>
          <button class="task-button" @mousedown="$emit('del-task', d.id, task.id)">delete</button>
        </template>
      </div>
    </template>
  </template>
  <script>
  export default {
    name: "TaskU",
    props: ["d"],
    emits: ["save", "del-task"],
    data() {
      return {
        newTask: "",
        edTask: "",
      };
    },
    methods: {
      save() {
        this.$emit("save", this.d, this.newTask);
        this.newTask = "";
      },
      editTask(t) {
        t.isEdit = true;
        this.edTask = t.name;
      },
      saveEdTask(t) {
        t.name = this.edTask;
        t.isEdit = false;
        t.isFocus = false;
        this.$emit("save");
      },
    },
  };
  </script>
  
  <style>
    .task-button{
      background-color: var(--lilac);
      border:none;
      padding: 5px;
      color:aliceblue;
      margin-left: 5px;
      border-radius: 10%;
      cursor: pointer;
    }
    .task-button:hover{
      color:var(--hover);
    }
    .task-name{
      cursor:pointer;
      font-size:large;
      font-style: normal;
      font-weight: normal;
    }
  </style>