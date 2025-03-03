<script setup lang="ts">
const head = useLocaleHead();
</script>

<template>
  <Head>
    <template v-for="link in head.link" :key="link.hid">
      <Link
        :id="link.hid"
        :rel="link.rel"
        :href="link.href"
        :hreflang="link.hreflang"
      />
    </template>
  </Head>

  <Body>
    <slot />
  </Body>
</template>
