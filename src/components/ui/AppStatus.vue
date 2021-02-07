<template>
  <span :class="['badge', className]">{{text}}</span>
</template>

<script>
import { ref, watch } from 'vue'
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

    watch(props, val => {
      className.value = classMap[val.status]
      text.value = textMap[val.status]
    })

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