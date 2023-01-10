import axios from "axios";
import moment from "moment";
export default {
  name: "app",
  data() {
    return {
        demande: [],
        utilisateur: [],
        dep_demande: [],
        designation: [],
        stock: [],
    };
  },
  async mounted() {
    this.load()
    this.selectUtilisateur()
    this.selectDepartement()
    this.selectDesignation()
    },
  methods: {
        getDate : function (date) {
            return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
        },

        async load() {
            try {
            const demande = await axios.get("http://localhost:3000/demande");
            this.demande = demande.data;

            } catch (e) {
            console.log(e);
            }   
        },

        async getDemandeByDate() {  
          try {
          const demande = await axios.get("http://localhost:3000/demande/" + this.date_debut +"/"+ this.date_fin);
          this.demande = demande.data;
          } catch (e) {
          console.log(e);
          }
        },

        async deleteDemande(id_demande) {
            let x = window.confirm("Supprimer?");
            if (x) {
              const demande = await axios.delete(
                "http://localhost:3000/demande/" + id_demande
              );
              console.log(demande);
              this.load()
            }
          },

        async selectUtilisateur() {
            try {
            const utilisateur = await axios.get("http://localhost:3000/utilisateur");
            this.utilisateur = utilisateur.data;
            } catch (e) {
            console.log(e);
            }
        },
        async selectDepartement() {
            try {
            const dep_demande = await axios.get("http://localhost:3000/dep_demande");
            this.dep_demande = dep_demande.data;
            } catch (e) {
            console.log(e);
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

        async ajoutDemande() {
            try {
              const entree_stock = await axios.post(
                "http://localhost:3000/demande",
                {
                  nom_user: this.utilisateur.nom_user,
                  departement_demande: this.dep_demande.departement_demande,
                  libelle_designation: this.designation.libelle_designation,
                  quantite_demande: this.quantite,
                  description_demande: this.description,
                  date_demande: this.date
                }
              );
              console.log(entree_stock)
              this.load()
            } catch(e) {
              console.log(e);
            }
          },

          async ajoutConsoDep(demande) {
            const d = new Date(demande.date_demande);
            const mois = d.getMonth() + 1;
            try {
              const consodep = await axios.post(
                "http://localhost:3000/consommation_departement",
                {
                  nom_user_conso_dep: demande.nom_user,
                  nom_dep_conso_dep: demande.nom_dep +" "+ demande.code_dep +" "+ demande.emplacement_dep,
                  libelle_designation_conso_dep: demande.libelle_designation,
                  quantite_conso_dep: demande.quantite_demande,
                  date_conso_dep: demande.date_demande,
                  description_conso_dep: demande.description_demande,

                  quantite: demande.quantite_demande, 
                  designation: demande.libelle_designation, 
                  date: mois,
                }
              );
              console.log(consodep)

              // const d = new Date(demande.date_demande);
              // const mois = d.getMonth() + 1;

              // const stock = await axios.put(
              //   "http://localhost:3000/stock", + designation,
              //   {
              //     quantite: demande.quantite_demande, 
              //     designation: demande.libelle_designation, 
              //     date: mois,
              //   }
              // );
              // console.log(stock.data)
              
              // $("lala").prop('disabled', true);
            } catch(e) {
              console.log(e);
            }
        },
        
        async modifDemande() {
            try {
              const demande = await axios.put(
                "http://localhost:3000/demande/" + this.demande.id_demande,
                {
                    nom_user: this.demande.nom_user,
                    departement_demande: this.demande.departement_demande,
                    libelle_designation: this.demande.libelle_designation,
                    quantite_demande: this.demande.quantite_demande,
                    description_demande: this.demande.description_demande,
                    date_demande: this.demande.date_demande
                }
              );
              console.log(demande.data);
              alert("Entree stock modifier!");
              this.load()
            } catch (e) {
                console.log(e);
            }
          },

        async getModifDemande(demande){
            this.demande.nom_user = demande.nom_user;
            this.demande.departement_demande = demande.nom_dep +" "+ demande.code_dep +" "+ demande.emplacement_dep;
            this.demande.libelle_designation = demande.libelle_designation;
            this.demande.quantite_demande = demande.quantite_demande;
            this.demande.description_demande = demande.description_demande;
            this.demande.date_demande = demande.date_demande;
            this.demande.id_demande = demande.id_demande;
        }
    },
};