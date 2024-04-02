<script setup>
import { ref, onMounted } from 'vue'

const output = ref('Pending…')


onMounted(async() => {
  const searchParams = new URLSearchParams(window.location.search)
  const test = searchParams.get('test')

  const response = await fetch(`/api/test-function?test=${test}`)
  output.value = await response.json()
})

</script>

<template>

  <h1>Output:</h1>
  <pre style="font-size: 30px;">{{ output.fish }}</pre>
</template>
