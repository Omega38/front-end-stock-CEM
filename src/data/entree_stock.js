import axios from "axios";
import moment from "moment";
export default {
  name: "app",
  data() {
    return {
        entree_stock: [],
        designation: [],
        entree_stock_montant: [],
        rowButtonDisabled:[false],
    };
  },
  async mounted() {
    this.load()
    this.selectDesignation()
    },
  methods: {
        getDate : function (date) {
            return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        },
        
        async load() {
            try {
            const entree_stock = await axios.get("http://localhost:3000/entree_stock");
            this.entree_stock = entree_stock.data;

            const entree_stock_montant = await axios.get("http://localhost:3000/entree_stock_montant");
            this.entree_stock_montant = entree_stock_montant.data;

            } catch (e) {
            console.log(e);
            }   
        },

        async getEntreeStockByDate() {  
          try {
          const entree_stock = await axios.get("http://localhost:3000/entree_stock/" + this.date_debut +"/"+ this.date_fin);
          this.entree_stock = entree_stock.data;

          const entree_stock_montant = await axios.get("http://localhost:3000/entree_stock_montant/" + this.date_debut +"/"+ this.date_fin);
          this.entree_stock_montant = entree_stock_montant.data;
          } catch (e) {
          console.log(e);
          }
        },

        async deleteEntreeStock(id_entree) {
            let x = window.confirm("Supprimer?");
            if (x) {
              const entree_stock = await axios.delete(
                "http://localhost:3000/entree_stock/" + id_entree
              );
              console.log(entree_stock);
              this.load()
            }
          },

        async selectDesignation() {
            try {
            const designation = await axios.get("http://localhost:3000/designation");
            this.designation = designation.data;
            } catch (e) {
            console.log(e);
            }
        },

        async ajoutEntreeStock() {
            try {
              const entree_stock = await axios.post(
                "http://localhost:3000/entree_stock",
                {
                  libelle_designation: this.designation.libelle_designation,
                  quantite_entree: this.quantite,
                  pu_entree: this.pu,
                  date_entree: this.date
                }
              );
              console.log(entree_stock);
              this.load()
            } catch(e) {
              console.log(e);
            }
          },

          async ajoutStock(entree_stock) {
            try {
              const stock = await axios.post(
                "http://localhost:3000/stock",
                {
                  libelle_designation: entree_stock.libelle_designation,
                  quantite_stock: entree_stock.quantite_entree,
                  pu_stock: entree_stock.pu_entree,
                  date_stock: entree_stock.date_entree
                }
              );
              console.log(stock)
              
              // entree_stock.item.name = "Dave";
              // this.rowButtonDisabled[entree_stock.id_entree]  = true

              // $("lala").prop('disabled', true);
            } catch(e) {
              console.log(e);
            }
               
        },
        
        async modifEntreeStock() {
            try {
              const entree_stock = await axios.put(
                "http://localhost:3000/entree_stock/" + this.entree_stock.id_entree,
                {
                  libelle_designation: this.entree_stock.libelle_designation,
                  quantite_entree: this.entree_stock.quantite_entree,
                  pu_entree: this.entree_stock.pu_entree,
                  date_entree: this.entree_stock.date_entree
                }
              );
              console.log(entree_stock.data);
              this.load()
            } catch (e) {
                console.log(e);
            }
          },
        async getModifEntreeStock(entree_stock){
            this.entree_stock.libelle_designation = entree_stock.libelle_designation;
            this.entree_stock.quantite_entree = entree_stock.quantite_entree;
            this.entree_stock.pu_entree = entree_stock.pu_entree;
            this.entree_stock.date_entree = entree_stock.date_entree;
            this.entree_stock.date_entree = entree_stock.date_entree;
            this.entree_stock.id_entree = entree_stock.id_entree
        }
    },
};