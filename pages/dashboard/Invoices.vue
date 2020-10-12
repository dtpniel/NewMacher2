<!-- Invoice.vue -->

<template>
  <div id="invoice-page">

  </div>
</template>

<script>

export default {
  data() {
    return {
      mailTo: "",
      companyDetails: {
        name: 'Microsion Technologies Pvt. Ltd.',
        addressLine1: '9 N. Sherwood Court',
        addressLine2: 'Elyria, OH',
        zipcode: '94203',
        mailId: 'hello@pixinvent.net',
        mobile: '+91 999 999 9999',
      },
      recipientDetails: {
        fullName: 'Peter Stark',
        addressLine1: '8577 West West Drive ',
        addressLine2: 'Holbrook, NY',
        zipcode: '90001',
        mailId: 'peter@mail.com',
        mobile: '+91 988 888 8888',
      },
      invoiceDetails: {
        invoiceNo: '001/2019',
        invoiceDate: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
      },
      invoiceData: {
        tasks: [
          {
            id: 1,
            task: 'Website Redesign',
            hours: 60,
            rate: 15,
            amount: 90000,
          },
          {
            id: 2,
            task: 'Newsletter template design',
            hours: 20,
            rate: 12,
            amount: 24000,
          },
        ],
        subtotal: 114000,
        discountPercentage: 5,
        discountedAmount: 5700,
        total: 108300,
      }
    }
  },
  computed: {},
  methods: {
    printInvoice() {
      window.print()
    }
  },
  components: {},
  mounted() {
    this.$emit("setAppClasses", "invoice-page")
  }
}
</script>

<style scoped>
@media print {
  .invoice-page {

  * {
    visibility: hidden;
  }

  #content-area {
    margin: 0 !important;
  }

  #invoice-container,
  #invoice-container * {
    visibility: visible;
  }

  #invoice-container {
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: none;
  }
}

}
</style>
