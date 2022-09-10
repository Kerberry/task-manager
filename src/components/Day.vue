<template>
  <tr v-for="day in days" :key="day.id">
    <template v-for="d in day" :key="d">
      <td v-if="d" class="day-number" @click="$emit('add-task', d.id)">
        {{ d.day }}
        <Task :d="d" @save="save" @del-task="delTask" />
      </td>
      <td v-else class="empty">{{ d }}</td>
    </template>
  </tr>
</template>
<script>
import Task from "./Task";
export default {
  name: "DayU",
  components: {
    Task,
  },
  emits: ["add-task", "save-task", "change-storage"],
  props: ["days"],
  data() {
    return {};
  },
  methods: {
    save(d, task) {
      if (d) {
        this.$emit("save-task", d.id, task);
      } else {
        this.$emit("save-task");
      }
    },
    delTask(di, ti) {
      this.days.map((day) => {
        day.forEach((d) => {
          if (d && d.id === di) {
            d.tasks = d.tasks.filter((task) => task.id !== ti);
          }
        });
      });
      this.$emit("change-storage");
    },
  },
};
</script>
<style>
.empty {
  border: none;
  background-color: var(--lilac);
}
.day-number {
  font-size: 2.5rem;
  font-weight: 800;
  font-style: italic;
  padding: 0.5rem;
}

@media (max-width:600px){
  .day-number{
    font-size: 1.5rem;
  }
}
</style>