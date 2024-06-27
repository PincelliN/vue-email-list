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
        console.log( "1"+ result);
        this.Email = result.response;
         console.log("2"+this.Email);
        this.EmailList.push(this.Email);
       
        console.log( "3"+this.EmailList);
      }); 
    
}
    

  },
}).mount("#container");
