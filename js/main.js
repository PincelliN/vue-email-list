const { createApp } = Vue;

createApp({
  data() {
    return {
      EmailList: [],
    };
  },
  methods: {},
  mounted() {
for (let index = 0; index < 10; index++) {
   axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((email) => {
        const result = email.data;
       
        this.EmailList.push(result.response);
       
        console.log( "3"+this.EmailList);
      }); 
}
    

  },
}).mount("#container");

