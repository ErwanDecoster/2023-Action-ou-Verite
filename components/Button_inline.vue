<template>
  <NuxtLink
    :to="link"
    class="rounded-2xl py-1 px-2 text-center w-full text-2xl block cursor-pointer duration-200 shadow-md" 
    :class="[
      { 'bg-fire-opal text-black hover:shadow-fire-opal' : button_style === 'primary' },
      { 'bg-dark-charcoal text-white hover:shadow-dark-charcoal' : button_style === 'secondary' }]">
    {{ content }}
  </NuxtLink>
</template>

<script>
export default {
    name: "Logo",
    props: ["content", "button_style", "link"],
};
</script>