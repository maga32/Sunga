<template>
  <div class="">
    <table class="mx-auto my-4" data-aos="fade-left" data-aos-duration="1500">
      <tr class="border-bottom">
        <th class="py-2">
          Project
        </th>
        <th class="py-2">
          Environment
        </th>
        <th class="py-2 pe-3">
          Duration
        </th>
      </tr>
      <tr>
        <td colspan="3" v-bind:class="[selectedType === 'all' ? 'd-none' : '']">
          <div class="btn btn-success my-3 w-100" v-on:click="selectType('all')">
            전체보기
          </div>
        </td>
      </tr>
      <template v-for="(v,i) in projectList" :key="'PList'+i">
        <tr v-bind:class="[selectedType !== v.type && selectedType !== 'all' ? 'd-none' : ''] + [i%2 === 0 ? ' bg-light' : '']">
          <td rowspan="4" class="ps-3 pe-1">
            <div>
              <div :class="'pointer px-2 me-1 badge bg-light-subtle text-' + setTypeColor(v.type)" v-on:click="selectType(v.type)">
                {{v.type}}
              </div>
              <div class="fw-bold fs-5">
                <a :href="v.link" target="_blank">
                  {{v.name}}
                </a>
              </div>
            </div>
          </td>
          <td class="fromLeft pt-5 px-3 pb-2">
            <h5><div v-html="v.site_description" class="pb-2"></div></h5>
            <div v-if="v.git_link" class="pt-2 pb-1">
              <a :href="v.git_link" target="_blank" class="fs-bold btn btn-sm btn-outline-secondary">
                &lt; &gt; GitHub
              </a>
            </div>
            <div>
              <span class="fw-bold">- 역할 : </span>
              <span v-for="(v2,i2) in v.role" :key="'role'+i2" class="px-1 text-secondary">
                {{v2}}<span v-if="i2 !== v.role.length - 1">&nbsp;&nbsp;/</span>
              </span>
            </div>
          </td>
          <td rowspan="3" class="pe-3">
            <div class="text-nowrap">{{v.time_from}}</div>
            <div>~</div>
            <div class="text-nowrap">{{v.time_to}}</div>
          </td>
        </tr>
        <tr v-bind:class="[selectedType != v.type && selectedType != 'all' ? 'd-none' : ''] + [i%2 == 0 ? ' bg-light' : '']">
          <td class="fromLeft px-3">
            <span v-for="(v2,i2) in v.environment" :key="i2"
                :class="'px-2 me-2 badge rounded-pill text-bg-' + setEnvColor(v2)[0]">
              {{setEnvColor(v2)[1]}}
            </span>
          </td>
        </tr>
        <tr v-bind:class="[selectedType !== v.type && selectedType !== 'all' ? 'd-none' : ''] + [i%2 === 0 ? ' bg-light' : '']">
          <td class="fromLeft pt-2 pb-4">
            <button class="btn btn-sm text-secondary" type="button" data-bs-toggle="collapse"
                :data-bs-target="'#developDescription_' + i" aria-expanded="false" :aria-controls="'developDescription_' + i">
              ▼Description
            </button>
          </td>
        </tr>
        <tr v-bind:class="[selectedType !== v.type && selectedType !== 'all' ? 'd-none' : 'border-bottom'] + [i%2 === 0 ? ' bg-light' : '']">
          <td colspan="2" class="pb-2">
            <div class="collapse px-3 pb-3 mb-4" :id="'developDescription_' + i">
              <div v-html="v.develop_description" class="card card-body fromLeft bg-light text-secondary">
              </div>
            </div>
          </td>
        </tr>
      </template>
      <tr>
        <td colspan="3" v-bind:class="[selectedType === 'all' ? 'd-none' : '']">
          <div class="btn btn-success my-3 w-100" v-on:click="selectType('all')">
            전체보기
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import AOS from 'aos'
export default {
  name: 'App',
  data() {
    return {
      projectList: [],
      selectedType: 'all',
    }
  },
  async created() {
    AOS.init();
    const response = await fetch('https://notion-api.splitbee.io/v1/table/ff85b851c58f427fb9f636f924d7b6c8');
    const data = await response.json();
    console.log(data);
    this.projectList = data;
  },
  methods: {
    setEnvColor(text) {
      let result = text.split(" : ");
      result[0] = colors[result[0]];
      return result;
    },
    setTypeColor(text) {
      return colors[text];
    },
    selectType(type) {
      this.selectedType = type;
    }
  }
}

const colors = {
  Backend:    "primary",
  Frontend:   "success",
  Framework:  "danger",
  Library:    "danger",
  Database:   "secondary",
  CMS:        "light",
  Server:     "warning",
  WAS:        "warning",
  SCM:        "info",
  CICD:       "info",
  SSL:        "light",
  OS:         "dark",
  기타:        "secondary",

  개인:       "primary",
  팀:        "warning",
  회사:       "danger",
  외주:       "success",
}
</script>

<style>

</style>