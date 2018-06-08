<script>

export default {
  name: 'account-edit',
  data () {
    return {
      sub_title: 'Editando conta',
      account: this.$store.state.account.accountView
    }
  },
  template: require('./form.html'),
  methods: {
    save () {
      this.$store.dispatch('updateAccount', this.account).then(() => {
        this.$router.push('/contas')
      })
    }
  },
  computed: {
    banks () {
      return this.$store.state.bank.bankList
    }
  },
  created () {
    this.$store.dispatch('getBanks')
    this.$store.dispatch('getAccount', this.$route.params.id)
  }
}
</script>
