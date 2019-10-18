import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

// containers
import App from './containers/App';
import Home from './containers/Home';
import AboutUsPage from './containers/AboutUsPage';

Vue.config.productionTip = false;
Vue.use( VueRouter );
Vue.use( Vuex );

const store = new Vuex.Store( {
    debug: true,
    state: {
        message: 'Hello Vuex!',
        count: 0
    }
} );

const router = new VueRouter( {
    mode: 'history',
    base: __dirname,
    routes: [
        {
            name: 'home',
            path: '/',
            component: Home
        },
        {
            name: 'about-us',
            path: '/about-us',
            component: AboutUsPage
        },
    ]
} );

const BaseVue = Vue.extend( { router } );

new BaseVue( {
    el: '#app',
    store,
    render: h => h( App )
} );
