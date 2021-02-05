<template>
  <app-page title="Список Заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Create</button>
    </template>

    <request-table :requests="[requests]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>

  </app-page>

</template>

<script>
import {ref, computed} from 'vue'
import RequestTable from '../components/request/RequestTable.vue'
import AppPage from '../components/ui/AppPage'
import AppModal from '../components/ui/AppModal'
import RequestModal from '../components/request/RequestModal'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const modal = ref(false)

    const requests = computed(() => store.getters['request/requests'])

    return {
      modal
    }
  },
  components: { AppPage, RequestTable, AppModal, RequestModal }
}
</script>
