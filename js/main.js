const { createApp } = Vue;

createApp({
  data() {
    return {
      EmailList: [],
      Email: "",
    };
  },
  methods: {},
  mounted() {
for (let index = 0; index < 10; index++) {
   axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((email) => {
        const result = email.data;
        console.log(result);
        this.Email = result.response;
        this.EmailList.push(this.Email);
        console.log(this.Email);
        console.log(this.EmailList);
      }); 
    
}
    

  },
}).mount("#container");
