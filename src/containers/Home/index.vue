<template>
    <div>
        <div class="display-4 py-3">
            Tryout
        </div>
        <p class="text-muted">
            This is a tryout Vue project that uses <strong>@nitro-ui/vue-framework</strong>.<br />
            Or, it can a be a good skeleton Vue project with Webpack + <strong>@nitro-ui/vue-framework</strong>.
        </p>
        <nitro-button>Nitro Button</nitro-button>
    </div>
</template>

<script>

import { Button as NitroButton } from '@nitro-ui/vue-framework';
export default {
    name: 'HomePage',
    components: {
        NitroButton
    }
}
</script>
