const{ createApp }= Vue;

createApp({
  data() {
    return {
        EmailList:[],

    };
  },
  methods: {

async CreaEmail(){
        await axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((email) => {
            const result = email.data;
            console.log(result);
            return result.response;
          }); 
    }
  },
 async mounted(){
    
    while (this.EmailList.length<10) {

      await this.EmailList.push(await this.CreaEmail());
        
    }
console.log(this.EmailList);
  },
}).mount("#container");