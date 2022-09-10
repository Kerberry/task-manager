<template>
    <tr>
        <td colspan="7">
        <h2>{{ year }}</h2>
        </td>
    </tr>
    <tr>
        <td @click="$emit('change-year', '-')">
            <button class="fa fa-angle-double-left" aria-hidden="true"></button>
        </td>
        <td @click="$emit('change-month', '-')">
            <button class="fa fa-chevron-left" aria-hidden="true"></button>
        </td>
        <td colspan="3">
            <h1>{{ months[month] }}</h1>
        </td>
        <td @click="$emit('change-month', '+')">
            <button class="fa fa-chevron-right" aria-hidden="true"></button>
        </td>
        <td @click="$emit('change-year', '+')">
            <button class="fa fa-angle-double-right" aria-hidden="true"></button>
        </td>
    </tr>
    <tr>
        <td v-for="name in dayNames" :key="name.id">{{ name }}</td>
    </tr>
</template>

<script>
    export default {
        name: "HeadU",
        emits: ["change-month", "change-year"],
        props: {
            months: Array,
            year: Number,
            month: Number,
            dayNames: Array,
            changeMonth: Function,
        },
    };
</script>

<style>
    h1{
        font-size:5rem;
        margin-bottom: 1.2rem;
    }
    h2 {
        margin-top: 1rem;
        font-size:3rem;
    }
    thead{
        background: linear-gradient(to right, var(--lilac), #000000, var(--lilac)); 
    }
    thead td {  
        text-align: center;
        vertical-align: center;
        color: aliceblue;
    }
    svg{
        cursor:pointer;
    }
    svg:hover{
        color:var(--hover);
    }

    @media (max-width:600px){
        h1{
            font-size: 3rem;
        }
    }
    
</style>