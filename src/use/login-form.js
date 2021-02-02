import {computed, watch} from 'vue'
import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useLoginForm() {
  const { handleSubmit, isSubmitting, submitCount} = useForm()
    const MIN_LENGTH = 6

    const {value: email, errorMessage: eError, handleBlur: eBlur } = useField('email', yup.string().trim().required('Please add email').email('Require correct email'))

    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField('password', yup.string().trim().required('Please add password').min(MIN_LENGTH, `Password cant be less than ${MIN_LENGTH} characters`))

    const onSubmit = handleSubmit( (values) => {
      console.log(values)
    })

    const isTooManyAttempts = computed(() => {
      return submitCount.value >= 3;
    })

    watch(isTooManyAttempts, val => {
      if (val) {
        setTimeout( () => submitCount.value= 0 , 2000)
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
      isTooManyAttempts
    }
}