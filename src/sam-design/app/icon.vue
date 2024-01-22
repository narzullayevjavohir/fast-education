<template>
 <i class="s-icon-wrapper"  v-if="wrapped">
        <component class="s-icon"  />
    </i>
    <component class="s-icon" :class="`t-icon-${size}`" v-else  :is="icon" 
        :fill="MixinGetColor(colorFill)" />
</template>

<script setup lang="ts">
import { TypeIconSize } from "../../utils/types"
const props = defineProps({
    name:{
        default:"",
        type:String
    },
    size: {
        type: String as PropType<TypeIconSize>,
        default: "lg"
    },
    wrapped: {
        type: Boolean,
        default: false
    },
    colorFill: {
        type: String,
        default: "black4"
    },
})

import { MixinGetColor } from "@/utils/mixins"
import { defineAsyncComponent, PropType } from 'vue';

const icon = defineAsyncComponent(
    () => import(`../../assets/svg/${props.name}.svg`)
);
</script>

<style lang="scss">
.s-icon-wrapper{
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &.xxl {
        width: 40px;
        height: 40px;

        .s-icon {
            width: 22px;
            height: 22px;
        }
    }

    &.xl {
        min-width: 36px;
        height: 36px;
        border-radius: 8px;

        .s-icon {
            width: 22px;
            height: 22px;
        }
    }

    &.lg {
        min-width: 32px;
        height: 32px;
        border-radius: 8px;

        .s-icon {
            width: 22px;
            height: 22px;
        }
    }

    &.md {
        min-width: 24px;
        height: 24px;
        border-radius: 4px;

        .s-icon {
            width: 18px;
            height: 18px;
        }
    }
}

.s-icon {
    display: block;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &-xl {
        width: 24px;
        height: 24px;
    }

    &-lg {
        width: 22px;
        height: 22px;
    }

    &-md {
        width: 20px;
        height: 20px;
    }

    &-sm {
        width: 18px;
        height: 18px;
    }

    &-xs {
        width: 16px;
        height: 16px;
    }
}
</style>