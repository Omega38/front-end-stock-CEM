import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        type_fourniture: []
    };
  },
  async mounted() {
    this.load()
    },
  methods: {
        async load() {
            try {
            const type_fourniture = await axios.get("http://localhost:3000/type_fourniture");
            this.type_fourniture = type_fourniture.data;
            } catch (e) {
            console.log(e);
            }
        },
        async deleteFourniture(id_type_fourniture) {
            let x = window.confirm("Supprimer?");
            if (x) {
              const fourniture = await axios.delete(
                "http://localhost:3000/type_fourniture/" + id_type_fourniture
              );
              console.log(fourniture);
              this.load()
            }
          },
        async ajoutFourniture() {
            try {
              const fourniture = await axios.post(
                "http://localhost:3000/type_fourniture",
                {
                  libelle_type_fourniture: this.fourniture
                }
              );
              console.log(fourniture)
              this.load()
            } catch(e) {
              console.log(e);
            }
          },
        async modifFourniture() {
            try {
              const type_fourniture = await axios.put(
                "http://localhost:3000/type_fourniture/" + this.type_fourniture.id_type_fourniture,
                {
                //   id_type_fourniture: this.type_fourniture.id_type_fourniture,
                  libelle_type_fourniture: this.type_fourniture.libelle_type_fourniture,
                }
              );
              console.log(type_fourniture.data);
              alert("fourniture modifier!");
              this.load()
            } catch (e) {
                console.log(e);
            }
          },
        async getModifFourniture(type_fourniture){
            this.type_fourniture.libelle_type_fourniture = type_fourniture.libelle_type_fourniture;
            this.type_fourniture.id_type_fourniture = type_fourniture.id_type_fourniture;
        }
    },
};