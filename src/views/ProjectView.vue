<template>
  <div class="about">
    <ul>
      <!-- 프로젝트 리스트 -->
      <li v-for="(v,i) in projectList" :key="i">
        {{v.name}}
        <ul>
          <!-- 환경 리스트 -->
          <li v-for="(v2,i2) in v.environment" :key="i2">
            {{v2}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        projectList : []
      }
    },
    async created() {
      const response = await fetch("https://notion-api.splitbee.io/v1/table/128fca3ed9694059a547211ebd67c2e0");
      const data = await response.json();
      console.log(data);
      this.projectList = data;
    },
    components: {
    }
  }
</script>