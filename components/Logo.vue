<template>
  <div>
    <h1 class="gap-y-2 gap-x-4 flex items-center font-bold" :class="[{ 'flex-col' : direction !== 'inline' }, { 'text-6xl' : size === 'small' }, { 'text-8xl' : size === 'big' }]">
      <span class="text-fire-opal drop-shadow-fire-opal" :class="{ 'text-philippine-brown drop-shadow-philippine-brown' : type === 'verite_selected' }">Action</span>
      <span class="text-bright-gray drop-shadow-bright-gray" :class="{ 'text-granite-gray drop-shadow-granite-gray' : type === 'verite_selected' || type === 'action_selected' }">ou</span>
      <span class="text-light-green drop-shadow-light-green" :class="{ 'text-deep-moss-green drop-shadow-deep-moss-green' : type === 'action_selected' }">Vérité</span>
    </h1>
  </div>
</template>
<script>
export default {
  name: 'Logo',
  props: ['type', 'direction', 'size'],
};
</script>