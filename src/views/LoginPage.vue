<template>
    <div class="login">
        <h1>Login</h1>
        <div class ="login-form">
            <input type="text" v-model="username" placeholder="Username"> <br>
            <input type="password" v-model="password" placeholder="Password"> <br>
            <button @click="login">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data() {
            return {
                username: '',
                password: ''
            };
        },
        methods: {
            login() {
                if (this.password === 'admin') {
                    localStorage.setItem('password', this.password);
                    this.$router.push('/browse');
                } else {
                    alert('Incorrect password');
                }
            }
        }
    }
</script>

<style>
    .login {
        background-color: white;
        height: 300px;
        width: 500px;
        margin: auto;
        padding: 20px;
        border-radius: 10px;
    }

    .login-form input, button {
        margin: 10px;
    }

    .login-form input {
        height: 30px;
        width: 250px;
    }
</style>