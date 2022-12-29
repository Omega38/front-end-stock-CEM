import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        stock: [],
    };
  },
  async mounted() {
    this.load()
    },
  methods: {
        async load() {
            try {
            const stock = await axios.get("http://localhost:3000/stock");
            this.stock = stock.data;
            } catch (e) {
            console.log(e);
            }   
        },

        async getStockByDate() {  
          try {
          const stock = await axios.get("http://localhost:3000/stock/" + this.date_debut +"/"+ this.date_fin);
          this.stock = stock.data;
          } catch (e) {
          console.log(e);
          }
        },

    },
};