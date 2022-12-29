import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        departement: []
    };
  },
  async mounted() {
    this.load()
    },
  methods: {
        async load() {
            try {
            const departement = await axios.get("http://localhost:3000/departement");
            this.departement = departement.data;
            } catch (e) {
            console.log(e);
            }
        },
        async deleteDepartement(id_dep) {
            let x = window.confirm("Supprimer?");
            if (x) {
              const departement = await axios.delete(
                "http://localhost:3000/departement/" + id_dep
              );
              console.log(departement);
              this.load()
            }
          },
        async ajoutDepartement() {
            try {
              const departement = await axios.post(
                "http://localhost:3000/departement",
                {
                    nom_dep: this.nom_dep,
                    code_dep: this.code_dep,
                    emplacement_dep: this.emplacement_dep
                }
              );
              console.log(departement)
              this.load()
            } catch(e) {
              console.log(e);
            }
          },
        async modifDepartement() {
            try {
              const departement = await axios.put(
                "http://localhost:3000/departement/" + this.departement.id_dep,
                {
                    nom_dep: this.departement.nom_dep,
                    code_dep: this.departement.code_dep,
                    emplacement_dep: this.departement.emplacement_dep
                }
              );
              console.log(departement.data);
              alert("Departement modifier!");
              this.load()
            } catch (e) {
                console.log(e);
            }
          },
        async getModifDepartement(departement){
            this.departement.nom_dep = departement.nom_dep;
            this.departement.code_dep = departement.code_dep;
            this.departement.emplacement_dep = departement.emplacement_dep;
            this.departement.id_dep = departement.id_dep;
        }
    },
};