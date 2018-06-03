<template>
    <div :class="className" class="vue-image__container my-3" :style='{height: heightCSS}'>
        <div v-if='!loaded'>
            <v-progress-circular v-if='mounted' indeterminate :color='this.spinnerColor' :size='spinnerSize' :width="spinnerSize / 12"></v-progress-circular>
            <!-- <slot name="loading">
                
            </slot> -->
        </div>
        <div v-else-if='loaded && error'>
            <v-icon :size='elementWidth / 10'>{{this.errorIcon}}</v-icon>
            <!-- <slot name='error'>
            </slot> -->
        </div>
        <img :src="this.src" v-show='imageReady' @error="loaded = true; error = true" @load="loaded = true">
    </div>
</template>

<script>
export default {
    name: 'v-image',
    data(){
        return {
            mounted: false,
            loaded: false,
            error: false
        }
    },
    mounted(){
        this.mounted = true
    },
    props: {
        src: {
            type: String,
            required: true
        },
        errorColor: { 
            type: String,
            default: 'error'
        },
        loadingColor: {
            type: String,
            default: 'primary lighten-5'
        },
        spinnerColor: {
            type: String,
            default: 'primary lighten-1'
        },
        errorIcon: {
            type: String,
            default: 'broken_image'
        },
        aspectRatio: {
            type: String,
            default: '16:9',
            validator: e => !!e.match(/^\d+:\d+$/)
        }
    },
    computed: {
        parsedAspectRatio(){
            const [, x, y] = this.aspectRatio.match(/^(\d+):(\d+)$/)

            return y/x
        },
        className(){
            return {
                [this.errorColor]: this.loaded && this.error,
                [this.loadingColor]: !this.loaded
            }
        },
        imageReady(){
            return this.loaded && !this.error
        },
        elementWidth(){
            return this.mounted ? this.$el.offsetWidth : 0
        },
        elementHeight(){
            return this.elementWidth * this.parsedAspectRatio
        },
        spinnerSize(){
            return Math.round(this.elementHeight / 8)
        },
        heightCSS(){
            return this.imageReady ? 'auto' : this.elementHeight + 'px'
        }
    }
}
</script>

<style lang="scss">
.vue-image__container{
    display: flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    transition: .2s cubic-bezier(.2,0,.4,1);
    transition-property: background-color;
    overflow: hidden;
    > img {
        width: 100%
    }
}
</style>
