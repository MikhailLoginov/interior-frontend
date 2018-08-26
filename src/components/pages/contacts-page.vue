<template lang="pug">
#contacts
  ContactForm
  Contacts
</template>

<script>
import Contacts from '../blocks/contacts.vue'
import ContactForm from '../blocks/contact-form.vue'

export default {
  name: 'ContactsPage',
  components: {
    Contacts,
    ContactForm
  }
}
</script>