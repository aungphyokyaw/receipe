<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <v-card>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row no-gutters>
                <v-col cols="7" class="text-center px-5">
                  <v-card-title class="headline d-block"> Sign In </v-card-title>
                  <v-card-text>
                    <v-btn fab color="orange" outlined>
                      <v-icon>mdi-google</v-icon>
                    </v-btn>
                    <v-card-subtitle>
                      Ensure Email For Your Registeration!
                    </v-card-subtitle>
                    <v-divider class="my-3"></v-divider>
                    <v-text-field label="Email" prepend-icon="mdi-mail"> </v-text-field>
                    <v-text-field
                      v-model="password"
                      prepend-inner-icon="mdi-fingerprint"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :rules="[rules.required, rules.min]"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Password"
                      hint="At least 6 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-card-actions class="d-block">
                      <v-btn color="orange" outlined> Sign In </v-btn>
                    </v-card-actions>
                  </v-card-text>
                </v-col>
                <v-col cols="5" class="orange text-center d-flex align-center">
                  <div style="width: 100%">
                    <v-card-title class="white--text headline d-block">
                      Hello Friends!
                    </v-card-title>
                    <v-card-subtitle class="white--text">
                      Enter your personal details and start journey with
                    </v-card-subtitle>
                    <v-card-actions class="d-block">
                      <v-btn color="white" outlined rounded @click="step++">
                        Sign Up
                      </v-btn>
                    </v-card-actions>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>

            <v-window-item :value="2">
              <v-row class="flex-row-reverse" no-gutters>
                <v-col cols="7" class="text-center px-5">
                  <v-card-title class="headline d-block"> Create Account </v-card-title>
                  <v-form ref="signupForm" @submit.prevent="signUp">
                    <v-card-text>
                      <v-btn fab color="orange" outlined>
                        <v-icon>mdi-google</v-icon>
                      </v-btn>
                      <v-card-subtitle>
                        Ensure Email For Your Registeration!
                      </v-card-subtitle>
                      <v-divider class="my-2"></v-divider>
                      <v-text-field label="Username" :rules="[rules.required, v => v.length >= 4 || 'Min 4 Characters']" v-model="signup.name" prepend-icon="mdi-account">
                      </v-text-field>
                      <v-text-field label="Email" :rules="[rules.required, rules.email]" v-model="signup.email" prepend-icon="mdi-mail"> </v-text-field>
                      <v-text-field
                        v-model="signup.password"
                        prepend-inner-icon="mdi-fingerprint"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password"
                        hint="At least 6 characters"
                        counter
                        @click:append="show1 = !show1"
                      ></v-text-field>
                      <v-text-field
                        v-model="signup.confirmPassword"
                        prepend-inner-icon="mdi-fingerprint"
                        :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required,passwordMatch]"
                        :type="show2 ? 'text' : 'password'"
                        name="input-10-1"
                        label="Password Confirm"
                        counter
                        @click:append="show2 = !show2"
                      ></v-text-field>
                    </v-card-text>
                    <v-card-actions class="d-block">
                      <v-btn color="orange" outlined type="submit"> Sign Up </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-col>
                <v-col cols="5" class="orange text-center d-flex align-center">
                  <div style="width: 100%">
                    <v-card-title class="white--text headline d-block">
                      Welcome Back!
                    </v-card-title>
                    <v-card-subtitle class="white--text">
                      To keep connected with us please login with personal details
                    </v-card-subtitle>
                    <v-card-actions class="d-block">
                      <v-btn color="white" outlined rounded @click="step--">
                        Sign In
                      </v-btn>
                    </v-card-actions>
                  </div>
                </v-col>
              </v-row>
              <!-- <v-card-text>
                <v-text-field label="Password" type="password"></v-text-field>
                <v-text-field label="Confirm Password" type="password"></v-text-field>
                <span class="caption grey--text text--darken-1">
                  Please enter a password for your account
                </span>
              </v-card-text> -->
            </v-window-item>
          </v-window>

          <v-divider></v-divider>

          <!-- <v-card-actions>
            <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
            <v-spacer></v-spacer>
            <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
              Next
            </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<
<script>
export default {
  data() {
    return {
      step: 1,
      show1: false,
      show2: false,
      password: '123456',
      signup: {
        name:'User',
        email:'@gmail.com',
        password:'123456',
        confirmPassword:'123456'
      },
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 6 || "Min 6 characters",
        emailMatch: () => `The email and password you entered don't match`,
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
      },
    };
  },
  computed: {
    passwordMatch(){
      return this.signup.password === this.signup.confirmPassword ? true : "Password do not match! "
    }
  },
  methods:{
    signUp(){
      console.log('df');  
    }
  },
};
</script>

<style></style>
