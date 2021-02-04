import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(fn) {
  const { handleSubmit, isSubmitting } = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField(
    'fio',
    yup
      .string()
      .trim()
      .required('Please add FIO')
  )

  const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
    'phone',
    yup
      .string()
      .trim()
      .required('Please add phone')
  )

  const { value: sum, errorMessage: sError, handleBlur: sBlur } = useField(
    'sum',
    yup
      .number()
      .required('Please add sum')
      .min(0, 'Сумма не может быть меньше 0')
  )

  const { value: status } = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
    status,
    fio,
    fError,
    fBlur,
    phone,
    pError,
    pBlur,
    sum,
    sError,
    sBlur,
    isSubmitting,
    onSubmit,
  }
}
