import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        compte_user: [],
        roles: []
    };
  },
  async mounted() {
    this.load()
    this.selectRole()
    },
  methods: {
        async load() {
            try {
            const compte_user = await axios.get("http://localhost:3000/compte_user");
            this.compte_user = compte_user.data;
            } catch (e) {
            console.log(e);
            }
        },
        async deleteCompteUser(num_compte) {
            let x = window.confirm("Supprimer?");
            if (x) {
              const compte_user = await axios.delete(
                "http://localhost:3000/compte_user/" + num_compte
              );
              console.log(compte_user);
              this.load()
            }
          },

        async selectRole() {
            try {
            const roles = await axios.get("http://localhost:3000/roles");
            this.roles = roles.data;
            } catch (e) {
            console.log(e);
            }
        },

        async ajoutCompteUser() {
            try {
              const compte_user = await axios.post(
                "http://localhost:3000/compte_user",
                {
                  nom_role: this.roles.nom_role,
                  username: this.username,  
                  mdp_user: this.mdp_user
                }
              );
              console.log(compte_user)
              this.load()
            } catch(e) {
              console.log(e);
            }
          },
        
        async modifCompteUser() {
            try {
              const compte_user = await axios.put(
                "http://localhost:3000/compte_user/" + this.compte_user.num_compte,
                {
                    nom_role: this.compte_user.nom_role,
                    username: this.compte_user.username,  
                    mdp_user: this.compte_user.mdp_user,
                }
              );
              console.log(compte_user.data);
              alert("Compte_user modifier!");
              this.load()
            } catch (e) {
                console.log(e);
            }
          },
        async getModifCompteUser(compte_user){
            this.compte_user.nom_role = compte_user.nom_role
            this.compte_user.username = compte_user.username
            this.compte_user.mdp_user = compte_user.mdp_user
            this.compte_user.num_compte = compte_user.num_compte
        }
    },
};