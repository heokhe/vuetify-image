# vuetify-image
Image component for Vuetify.js
## Features
- built on top of Material Design and [Vuetify.js](https://vuetifyjs.com/en)
- can show you loading and errors
- highly customizable
## Example
To create an image with loader and error indicator, just use this piece of code:
```vue
<v-image :src='url' />
```
## Props
- `src`: Image Source (required)
- `errorIcon`: Icon to show in error indicator (default: `broken_image`)
- `errorColor`: Color of error indicator (default: `error`)
- `loadingColor`: Color of loading indicator (default: `primary lighten-5`)
- `spinnerColor`: Color of loading spinner (default: `primary lighten-1`)