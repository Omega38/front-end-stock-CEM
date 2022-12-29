import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        designation: [],
        type_fourniture: []
    };
  },
  async mounted() {
    this.load()
    this.selectFouniture()
    },
  methods: {
        async load() {
            try {
            const designation = await axios.get("http://localhost:3000/designation");
            this.designation = designation.data;
            } catch (e) {
            console.log(e);
            }
        },
        async deleteDesignation(id_designation) {
            let x = window.confirm("Supprimer?");
            if (x) {
              const designation = await axios.delete(
                "http://localhost:3000/designation/" + id_designation
              );
              console.log(designation);
              this.load()
            }
          },

        async selectFouniture() {
            try {
            const type_fourniture = await axios.get("http://localhost:3000/type_fourniture");
            this.type_fourniture = type_fourniture.data;
            } catch (e) {
            console.log(e);
            }
        },

        async ajoutDesignation() {
            try {
              const designation = await axios.post(
                "http://localhost:3000/designation",
                {
                  libelle_type_fourniture: this.type_fourniture.libelle_type_fourniture,
                  libelle_designation: this.article,  
                }
              );
              console.log(designation)
              this.load()
            } catch(e) {
              console.log(e);
            }
          },
        
        async modifDesignation() {
            try {
              const designation = await axios.put(
                "http://localhost:3000/designation/" + this.designation.id_designation,
                {
                  libelle_type_fourniture: this.designation.libelle_type_fourniture,
                  libelle_designation: this.designation.libelle_designation,
                }
              );
              console.log(designation.data);
              alert("Designation modifier!");
              this.load()
            } catch (e) {
                console.log(e);
            }
          },
        async getModifDesignation(designation){
            this.designation.libelle_type_fourniture = designation.libelle_type_fourniture
            this.designation.libelle_designation = designation.libelle_designation;
            this.designation.id_designation = designation.id_designation;
        }
    },
};