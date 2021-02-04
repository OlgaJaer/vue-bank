import { computed, watch } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()

  const { handleSubmit, isSubmitting, submitCount } = useForm()
  const MIN_LENGTH = 6

  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Please add email')
      .email('Require correct email')
  )

  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Please add password')
      .min(MIN_LENGTH, `Password cant be less than ${MIN_LENGTH} characters`)
  )

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log(values)
      await store.dispatch('auth/login', values)
      router.push('/')
    } catch (error) {}
  })

  const isTooManyAttempts = computed(() => {
    return submitCount.value >= 3
  })

  watch(isTooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 2000)
    }
  })

  return {
    email,
    eError,
    eBlur,
    password,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts,
  }
}
