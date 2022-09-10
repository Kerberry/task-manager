<template>
  <table>
    <thead>
      <Head
        :year="year"
        :months="months"
        :month="month"
        :dayNames="dayNames"
        @changeMonth="changeMonth"
        @changeYear="changeYear"
      />
    </thead>
    <tbody>
      <Day
        :days="days"
        @saveTask="saveTask"
        @addTask="addTask"
        @changeStorage="changeStorage"
      />
    </tbody>
  </table>
</template>

<script>
import Head from "./components/Head";
import Day from "./components/Day";
export default {
  name: "App",
  components: {
    Head,
    Day,
  },
  data() {
    return {
      id: 0,
      days: [],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      today: new Date(),
      week: 0,
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    };
  },
  methods: {
    getCalendar() {
      let monthLastDay = new Date(this.year, this.month + 1, 0).getDate();
      this.days[this.week] = [];
      for (let i = 1; i <= monthLastDay; i++) {
        let weekDay = new Date(this.year, this.month, i).getDay();
        if (weekDay === 1 && i !== 1) {
          this.week++;
          this.days[this.week] = [];
        }
        this.days[this.week].push({
          id: i - 1,
          day: i,
          tasks: [],
          isAdd: false,
        });
      }
      while (this.days[0].length < 7) {
        this.days[0].unshift(null);
      }
    },
    changeMonth(j) {
      this.days = [];
      this.week = 0;
      if (this.month === 0 && j === "-") {
        this.year -= 1;
        this.month = 11;
      } else if (this.month === 11 && j === "+") {
        this.year += 1;
        this.month = 0;
      } else {
        this.month += j === "-" ? -1 : 1;
      }
      this.getCalendar();
      this.checkStorage();
    },
    changeYear(j){
      this.days=[];
      this.week=0;
      this.year += j === "-" ? -1 : 1;
      this.getCalendar();
      this.checkStorage();
    },
    addTask(id) {
      for (let day of this.days) {
        day.forEach((d) => {
          if(d){
            if (d.id === id) {
              d.isAdd = true;
            } else {
            d.isAdd = false;
            }
            d.tasks.map((task)=>task.isFocus=false)
          }
        });
      }
    },
    saveTask(id, task) {
      for (let day of this.days) {
        day.forEach((d) => {
          if (d && d.id === id && d.isAdd) {
            d.isAdd = false;
            let id = d.tasks.length;
            d.tasks.push({ id: id, name: task, isEdit: false, isFocus: false });
          }
        });
      }
      this.changeStorage();
    },
    changeStorage() {
      window.localStorage.setItem(
        JSON.stringify([this.year, this.month]),
        JSON.stringify(this.days)
      );
    },
    checkStorage() {
      if (
        window.localStorage.getItem(JSON.stringify([this.year, this.month]))
      ) {
        this.days = JSON.parse(
          window.localStorage.getItem(JSON.stringify([this.year, this.month]))
        );
      }
    },
  },
  created: function () {
    this.getCalendar();
    this.checkStorage();
  },
};
</script>

<style>
:root {
  --lilac: #a888dd;
  --hover: #490a52;
}
* {
  margin: 0;
  padding: 0;
  font-size:10px;
}
body {
  background-color: var(--lilac);
}
table {
  margin: 1rem;
  border-collapse: collapse;
}
td {
  width: 14vw;
}
tbody td {
  height: 17vh;
  border: 1px solid #a19ca7;
  vertical-align: top;
  background-color: white;
}
</style>