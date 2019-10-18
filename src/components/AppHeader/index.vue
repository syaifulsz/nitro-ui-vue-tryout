<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">@nitro-ui-vue-tryout</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#app-nav-mobile" aria-controls="app-nav-mobile" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="app-nav-mobile">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" :class="( $route.name === 'home' ? 'active' : '' )">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item" :class="( $route.name === 'about-us' ? 'active' : '' )">
                        <router-link to="/about-us" class="nav-link">About Us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'AppHeader'
}
</script>
