<template>
  <app-page back title="Помощь">
    <question-item 
      v-for="q in questions" 
      :key="q.title"
      :question='q' 
    >
    </question-item>
  </app-page>
</template>
<script>
import AppPage from '../components/ui/AppPage'
import QuestionItem from '../components/question/QuestionItem'

export default {
  components: {AppPage, QuestionItem},
  setup(){
    const questions= [
      {title: 'Оформление заявки', text: 'Возможность формировать заявки со статусом, менять статус, удалять заявку'},
      {title: 'Как работает авторизация', text: 'Все реализовано через Firebase'},
    ]

    return {questions, QuestionItem}
  }
}
</script>
