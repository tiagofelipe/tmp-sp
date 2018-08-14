<script>
  export default {
    props: {
      filter: {
        type: String
      },
      name: {
        type: String,
        required: true
      }
    },
    methods: {
      filterEmails () {
        this.$router.push('/mensagens?filter=' + this.filter)
      }
    }
  }
</script>
