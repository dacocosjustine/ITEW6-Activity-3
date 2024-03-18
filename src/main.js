import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LoginPage from './views/LoginPage.vue';
import BrowseView from './views/BrowseView.vue';
import ProductListing from './components/ProductListing.vue';
import ShoppingCart from './components/ShoppingCart.vue';

const app = createApp(App);

app.component('LoginPage', LoginPage);
app.component('BrowseView', BrowseView);
app.component('ProductListing', ProductListing);
app.component('ShoppingCart', ShoppingCart);

createApp(App).use(router).mount('#app')
