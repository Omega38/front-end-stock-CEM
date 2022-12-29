import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        utilisateur: [],
        compte_user: []
    };
  },
  async mounted() {
    this.load()
    this.selectCompteUser()
    },
  methods: {
        async load() {
            try {
            const utilisateur = await axios.get("http://localhost:3000/utilisateur");
            this.utilisateur = utilisateur.data;
            } catch (e) {
            console.log(e);
            }
        },
        async deleteUtilisateur(id_user) {
            let x = window.confirm("Supprimer?");
            if (x) {
              const utilisateur = await axios.delete(
                "http://localhost:3000/utilisateur/" + id_user
              );
              console.log(utilisateur);
              this.load()
            }
          },

        async selectCompteUser() {
            try {
            const compte_user = await axios.get("http://localhost:3000/compte_user");
            this.compte_user = compte_user.data;
            } catch (e) {
            console.log(e);
            }
        },

        async ajoutUtilisateur() {
            try {
              const utilisateur = await axios.post(
                "http://localhost:3000/utilisateur",
                {
                  num_compte: this.compte_user.num_compte,
                  nom_user: this.nom_user,
                  code_user: this.code_user,  
                  departement: this.departement,
                }
              );
              console.log(utilisateur)
              this.load()
            } catch(e) {
              console.log(e);
            }
          },
        
        async modifUtilisateur() {
            try {
              const utilisateur = await axios.put(
                "http://localhost:3000/utilisateur/" + this.utilisateur.id_user,
                {
                    nom_user: this.utilisateur.nom_user,
                    code_user: this.utilisateur.code_user,  
                    departement: this.utilisateur.departement, 
                }
              );
              console.log(utilisateur.data);
              alert("utilisateur modifier!");
              this.load()
            } catch (e) {
                console.log(e);
            }
          },
        async getModifUtilisateur(utilisateur){
            this.utilisateur.num_compte = utilisateur.num_compte
            this.utilisateur.nom_user = utilisateur.nom_user
            this.utilisateur.code_user = utilisateur.code_user
            this.utilisateur.departement = utilisateur.departement
            this.utilisateur.id_user = utilisateur.id_user
        }
    },
};