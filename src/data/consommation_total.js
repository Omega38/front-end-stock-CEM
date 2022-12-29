import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        consommation_total: [],
    };
  },
  async mounted() {
    this.load()
    },
  methods: {
        async load() {
            try {
            const consommation_total = await axios.get("http://localhost:3000/consommation_total");
            this.consommation_total = consommation_total.data;
            } catch (e) {
            console.log(e);
            }   
        },

        async getConsoTotByDate() {  
          try {
          const consommation_total = await axios.get("http://localhost:3000/consommation_total/" + this.date_debut +"/"+ this.date_fin);
          this.consommation_total = consommation_total.data;
          } catch (e) {
          console.log(e);
          }
        },

    },
};