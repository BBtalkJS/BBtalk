<template>
  <div id="bbtalk"></div>
</template>

<script>
export default {
  mounted() {
    function addScript(url) {
      var s = document.createElement("script");
      url.indexOf("appId") == -1 ? (s.src = url) : (s.innerHTML = url);
      document.body.appendChild(s);
    }
    addScript('https://cdn.jsdelivr.net/npm/bbtalk@0.1.5/dist/bbtalk.min.js')
    addScript(`
    bbtalk.init({
      appId: "0KzOX4vC7Jsk6vzUGNeEiUaI-gzGzoHsz",
      appKey: "HwCiWuxfpvKiLm4teCUgTIba",
      serverURLs: 'https://bbapi.heson10.com'

    })
    `);
  }
};
</script>