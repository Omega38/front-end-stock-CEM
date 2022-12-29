import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        consommation_departement: [],
    };
  },
  async mounted() {
    this.load()
    },
  methods: {
        async load() {
            try {
            const consommation_departement = await axios.get("http://localhost:3000/consommation_departement");
            this.consommation_departement = consommation_departement.data;
            } catch (e) {
            console.log(e);
            }   
        },

        async getConsoDepByDate() {  
          try {
          const consommation_departement = await axios.get("http://localhost:3000/consommation_departement/" + this.date_debut +"/"+ this.date_fin);
          this.consommation_departement = consommation_departement.data;
          } catch (e) {
          console.log(e);
          }
        },

    },
};