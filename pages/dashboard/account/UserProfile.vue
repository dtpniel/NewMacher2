<template>
  <div class="col-xl-12">
    <div class="dashboard-box">

      <!-- Headline -->
      <div class="headline">
        <h3><i class="icon-material-outline-face"></i> My Profile</h3>
      </div>

      <div class="content">
        <ul class="fields-ul">
          <li>
            <div class="row">
              <div class="col-xl-6">
                <div class="submit-field">
                  <h5>Tagline</h5>
                  <input type="text" class="with-border" value="iOS Expert + Node Dev">
                </div>
              </div>

              <div class="col-xl-6">
                <div class="submit-field">
                  <h5>Nationality</h5>
                  <div class="btn-group bootstrap-select with-border">
                    <select class="selectpicker with-border" data-size="7" title="Select Job Type"
                            data-live-search="true" tabindex="-98">
                      <option class="bs-title-option" value="">Select Job Type</option>
                      <option value="AR">Argentina</option>
                      <option value="US" selected="">United States</option>
                      <option value="UY">Uruguay</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="col-xl-12">
                <div class="submit-field">
                  <h5>Introduce Yourself</h5>
                  <textarea cols="30" rows="5" class="with-border">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</textarea>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    }
  },
  computed: {
    activeUserInfo() {
    },
  }
}
</script>
