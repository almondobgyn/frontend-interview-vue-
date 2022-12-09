import { createApp } from "vue";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Avatar from "primevue/avatar";

import App from "./App.vue";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.component("InputText", InputText);
app.component("PrimeButton", Button);
app.component("PrimeToast", Toast);
app.component("PrimeAvatar", Avatar);

app.mount("#app");
