<template>
  <span :class="['badge', className]">{{text}}</span>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    status: {
      type: String,
      requered: true,
      validator(value) {
        return ['active', 'done', 'cancelled', 'pending'].includes(value)
      }
    }
    
  },
  setup(props) {
   
    const classMap = {
      active: "primary",
      done: "primary",
      pending: "warning",
      cancelled: "danger"
    }

    const textMap = {
      active: "Активен",
      done: "Завершен",
      pending: "Выполняется",
      cancelled: "Отменен"
    }

    const className = ref(classMap[props.status])
    const text = ref(textMap[props.status])

    return {
      className,
      text
    }
  }
}
</script>

<style>

</style>