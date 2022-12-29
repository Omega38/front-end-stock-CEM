import axios from "axios";
export default {
  name: "app",
  data() {
    return {
        roles: []
    };
  },
  async mounted() {
    this.load()
    },
  methods: {
        async load() {
            try {
            const roles = await axios.get("http://localhost:3000/roles");
            this.roles = roles.data;
            } catch (e) {
            console.log(e);
            }
        },
        async ajoutRole() {
            try {
              const roles = await axios.post(
                "http://localhost:3000/roles",
                {
                  nom_role: this.role
                }
              );
              console.log(roles)
              this.load()
            } catch(e) {
              console.log(e);
            }
          },
    },
};