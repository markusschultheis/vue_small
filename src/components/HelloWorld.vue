<template>
    <div id="NavBar">
        <img align="center" src="https://www.computer-barssel.de/logo.png">
        <h1>Something called "Interpolation"</h1>

        <p align="center">{{ name }}</p>
        <div align="center">
           {{ btnState ? 'the button is disabled' : 'the button is active' }}
        </div>

        <div align="center">
            <button v-bind:disabled="btnState">Change Name</button>
            <form @submit.prevent="addSkill">
                <input type="text" placeholder="Enter a skill you have..." v-model="mySkills" v-validate="'min:5'" name="mySkills">

                <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
                  <div class="validateAlert" v-if="errors.has('mySkills')">{{ errors.first('mySkills')}}</div>
                </transition>
                <input type="checkbox" id="checkbox" v-model="checked">

            </form>
        </div>



        <div id="skills">
            <ul>
                <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                  <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}</li>
                </transition-group>
            </ul>

            <p v-if="skills.length >= 1">You have more than 1 skills</p>
            <p v-else>You have less than or equal to 1 skill</p>
            <div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div>
            <div v-bind:class="alertObject"></div>
            <p>These are the skills that you possess.</p>



        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                name: 'My first Component',
                btnState: true,
                skills: [
                    {"skill": "Vue.js"},
                    {"skill": "Frontend Developer"}
                ],
                showAlert: false,
                showClass: false,

                alertObject: [
                        { alert: true },
                        { 'another-class': true },
                ],


                mySkills: '',
                checked: false
            }
        },
        methods: {
            addSkill(){
                this.$validator.validateAll().then((result) =>
                {
                    if (result) {
                        this.skills.push({skill: this.mySkills})
                        this.mySkills = '';
                        console.log('Checkbox Value is', this.checked);
                    } else {
                        console.log('not a valid input');
                    }
                })


            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Monserrat:400,700');
    @import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.1');

    body {
        background-color: #EEEEEE;
        font-family: 'Monserrat', sans-serif;
        display: grid;
        grid-template-rows: auto;
        justify-items: center;
        align-items: center;
    }

    body, html {
        margin: 0;
        height: 100%;
    }

    ul li {
        padding: 20px;
        font-size: 1.3em;
        background-colour: #E0EDF4;
        border-left: 5px solid #3EB3F6;
        margin-bottom: 2px;
        color: #3E5252;
    }

    li {
        list-style: none;
        text-align: none;
    }

    h1 {
        text-align: center;
        width: 100%;
        color: #000eee;
    }

    .alert{
        margin: 0% 25% 0;
        background-color: #213ee3;
        width: 50%;
        height: 10px;
    }

    .another-class {
        border: 5px solid black;
    }

    p {
        color: gray;
    }

    .container {
        box-shadow: 0px 0px 40px lightgray;
    }

    div button {
        text-align: right;
        color: red;
    }
    #app {
        width: 50%;
    }

    .validateAlert {
        width: 100%;
        height: 20px;
        background-color: red;
    }

    input {
        width: calc(100%-40%);
        border: 0;
        padding: 20px;
        font-size: 1.3em;
        background-colour: #E23333;
        color: #687F7F;
    }

    .alert-in-enter-active {
        animation: bounce-in .5s;
    }

    .alert-in-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

</style>