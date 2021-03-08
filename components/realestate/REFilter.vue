<template>
	<div class="full-page-sidebar">
		<div class="full-page-sidebar-inner" data-simplebar>

			<div class="sidebar-container">

				<!-- Location -->
				<div class="sidebar-widget">
					<h3>Location</h3>
					<div class="input-with-icon">
						<div id="autocomplete-container">
							<input id="autocomplete-input" type="text" placeholder="Location">
						</div>
						<i class="icon-material-outline-location-on"></i>
					</div>
				</div>

				<!-- Keywords -->
				<div class="sidebar-widget">
					<h3>Keywords</h3>
					<div class="keywords-container">
						<div class="keyword-input-container">
							<input type="text" class="keyword-input" placeholder="e.g. job title"/>
							<button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
						</div>
						<div class="keywords-list"><!-- keywords go here --></div>
						<div class="clearfix"></div>
					</div>
				</div>
				
				<!-- Category -->
				<div class="sidebar-widget">
					<h3>Category</h3>
					<select class="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="All Categories" >
						<option>Admin Support</option>
						<option>Customer Service</option>
						<option>Data Analytics</option>
						<option>Design & Creative</option>
						<option>Legal</option>
						<option>Software Developing</option>
						<option>IT & Networking</option>
						<option>Writing</option>
						<option>Translation</option>
						<option>Sales & Marketing</option>
					</select>
				</div>
				
				<!-- Job Types -->
				<div class="sidebar-widget">
					<h3>Job Type</h3>

					<div class="switches-list">
						<div class="switch-container">
							<label class="switch"><input type="checkbox"><span class="switch-button"></span> Freelance</label>
						</div>

						<div class="switch-container">
							<label class="switch"><input type="checkbox"><span class="switch-button"></span> Full Time</label>
						</div>

						<div class="switch-container">
							<label class="switch"><input type="checkbox"><span class="switch-button"></span> Part Time</label>
						</div>

						<div class="switch-container">
							<label class="switch"><input type="checkbox"><span class="switch-button"></span> Internship</label>
						</div>
						<div class="switch-container">
							<label class="switch"><input type="checkbox"><span class="switch-button"></span> Temporary</label>
						</div>
					</div>

				</div>

				<!-- Salary -->
				<div class="sidebar-widget">
					<h3>Salary</h3>
					<div class="margin-top-55"></div>

					<!-- Range Slider -->
					<input class="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" data-slider-step="100" data-slider-value="[1500,15000]"/>
				</div>

				<!-- Tags -->
				<div class="sidebar-widget">
					<h3>Tags</h3>

					<div class="tags-container">
						<div class="tag">
							<input type="checkbox" id="tag1"/>
							<label for="tag1">front-end dev</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag2"/>
							<label for="tag2">angular</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag3"/>
							<label for="tag3">react</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag4"/>
							<label for="tag4">vue js</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag5"/>
							<label for="tag5">web apps</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag6"/>
							<label for="tag6">design</label>
						</div>
						<div class="tag">
							<input type="checkbox" id="tag7"/>
							<label for="tag7">wordpress</label>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>

			</div>
			<!-- Sidebar Container / End -->

			<!-- Search Button -->
			<div class="sidebar-search-button-container">
				<button class="button ripple-effect">Search</button>
			</div>
			<!-- Search Button / End-->

		</div>
	</div>
  <!-- Sidebar Container / End -->
</template>

<script>
import FilterItems from "~/components/realestate/REFilterItems";
import { createNamespacedHelpers } from "vuex";

import { mapMutations, mapActions, mapState } from "vuex";
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "getFilter",
  mutationType: "updateFilter",
});

export default {
  name: "REFilter",

  // data: function () {
  //   return {
  //     title: "Jobs",
  //     filterItems: [],
  //     autocomplete: {},
  //   };
  // },
  // computed: {
  //   ...mapState("jobs", {
  //     mainCategoryIdData: (state) => state.mainCategoryIdData,
  //     categoryIdData: (state) => state.categoryIdData,
  //     freelanceData: (state) => state.freelanceData,
  //     fromHomeData: (state) => state.fromHomeData,
  //     partTimeData: (state) => state.partTimeData,
  //     internshipData: (state) => state.internshipData,
  //     temporaryData: (state) => state.temporaryData,
  //     topLocationsData: (state) => state.topLocationsData,
  //     locationData: (state) => state.locationData,
  //     filterDefinition: (state) => state.filterDefinition,
  //   }),
  //   ...mapFields("jobs", [
  //     // "stateId",
  //     // "cityId",
  //     "mainCategoryId",
  //     "categoryId",
  //     "freelance",
  //     "partTime",
  //     "temporary",
  //     "fromHome",
  //     "internship",
  //     "freeText",
  //     "radius",
  //     "location",
  //   ]),
  // },

  components: {
    FilterItems,
  },

  methods: {
    removeFilterItem: function (item) {
      var arr = this.filterItems;
      var name = item.name;
      //remove filter item
      const index = arr.findIndex(
        (x) => x.id == item.id && x.name == item.name
      );
      if (index > -1) arr.splice(index, 1);
      if (item.name == "location") this.removeLocationItem();

      //remove filter id
      var filterItem = this[item.name];
      if (filterItem.constructor == Array) {
        {
          const i = filterItem.findIndex((x) => x == item.id);
          if (i > -1) {
            var newFilterItem = filterItem.slice();
            newFilterItem.splice(i, 1);
            this.updateFilter({ [name]: newFilterItem });
          }
        }
      } else if (filterItem.constructor == Number) {
        {
          this.updateFilter({ [name]: 0 });
        }
      } else {
        {
          this.updateFilter({ [name]: "" });
        }
      }

      //search again based on new filter
      this.setFilter(undefined, item.name);
    },
    removeLocationItem() {
      var input = document.getElementById("autocomplete-input");
      input.placeholder = "City, State or ZIP";
      input.value = "";
      this.location = 0;
    },

    addSingleFilterItem: function (id, name) {
      //don't add item when it's undefined
      if (!id) return;

      var arr = this[name + "Data"];

      var selected = arr ? arr.filter((x) => x.id == id)[0] : undefined;

      var text = selected ? selected.name : "";
      if (name == "freeText") text = id;

      if (!text) return;

      var item = {
        id: id,
        text: text,
        name: name,
      };
      this.filterItems.push(item);
    },

    reset: function () {
      this.filterItems = [];
      this.resetFilter();
      this.removeLocationItem();
      $nuxt.$root.$loading.start();
      this.search().then(() => {
        $nuxt.$root.$loading.finish();
      });
    },

    addFilterItem: function (filterItemDef) {
      if (!filterItemDef.multiple) {
        var id = this[filterItemDef.name];
        var arr = this.filterItems;
        //remove existing filter item
        this.filterItems = arr.filter((x) => x.name !== filterItemDef.name);
        if (filterItemDef.name == "location" && id) id = 1;

        this.addSingleFilterItem(id, filterItemDef.name);
      } else {
        var ids = this[filterItemDef.name];
        var arr = this.filterItems.filter((x) => x.name == filterItemDef.name);

        ids.forEach((id) => {
          var index = arr.findIndex((x) => x.id == id);

          //add filter item that is not existed yet on filter items
          if (index == -1) this.addSingleFilterItem(id, filterItemDef.name);
        });

        //remove filter item when it's not exist on filter ids (when unselect)
        arr.forEach((x) => {
          var index = ids.findIndex((id) => id == x.id);
          if (index == -1) this.removeFilterItem(x);
        });
      }
    },
    setFilter: function ($event, name) {
      //if ($event && !$event.currentTarget.value) return;
      var self = this;
      var name = $event && $event.target.id ? $event.target.id : name;
      var filterItemDef = this.filterDefinition.find((x) => x.name == name);

      //reset sub category id and city id when main category or state is selected
      if (filterItemDef.resetSubCategory) {
        this[filterItemDef.subCategory] = [];
        var item = this.filterDefinition.find(
          (x) => x.name == filterItemDef.subCategory
        );
        this.addFilterItem(item);
      }

      this.addFilterItem(filterItemDef);
      if (filterItemDef.server) {
        $nuxt.$root.$loading.start();
        this.search().then(() => {
          $nuxt.$root.$loading.finish();
        });
      }
    },
    qstringPrefix() {
      if (this.$route.query) return "&";
      else return "?";
    },
    // ...mapActions("jobs", {
    //   search: "getJobs",
    //   resetFilter: "resetFilter",
    // }),
    // ...mapMutations("jobs", { updateFilter: "setFilter" }),

    locationChanged() {
      this.setLocation();
    },
    async setLocation() {
      $nuxt.$root.$loading.start();
      const place = this.autocomplete.getPlace();

      var input = document.getElementById("autocomplete-input");
      if (place.address_components)
        var city =
          (place.address_components[0] &&
            place.address_components[0].long_name) ||
          "";

      input.blur();
      setTimeout(function () {
        input.value = city;
      }, 500);

      var locationData = [{ name: city, id: 1 }];

      this.$store.commit("jobs/setLocationData", locationData);

      var address = place.formatted_address;

      this.location = await this.$global.getLocationPolygon(
        address,
        this.radius
      );

      this.setFilter(undefined, "location");
      $nuxt.$root.$loading.finish();
    },
  },

  updated: function () {
    this.$nextTick(function () {
      require("bootstrap-select");
      $(this.$el).find(".selectpicker").selectpicker("refresh");
      //$(".selectpicker").selectpicker("refresh");
    });
  },
  mounted() {
    if (process.browser) {
      require("bootstrap-select");
      $(".selectpicker").selectpicker("refresh");
    }
    // if (this.mainCategoryId > 0) {
    //   $("#mainCategoryId").val(this.mainCategoryId);
    //   this.addSingleFilterItem(this.mainCategoryId, "mainCategoryId");
    // }

    // if (this.categoryId > 0) {
    //   $("#categoryId").val(this.categoryId);
    //   this.addSingleFilterItem(this.categoryId, "categoryId");
    // }

    // if (
    //   this.location &&
    //   this.location.length > 0 &&
    //   this.locationData.length > 0
    // ) {
    //   var id = this.locationData.length > 0 ? this.locationData[0].id : 0;
    //   var input = document.getElementById("autocomplete-input");
    //   input.value = this.locationData[0].name;

    //   this.addSingleFilterItem(id, "location");
    // }

    // // if (this.cityId > 0) {
    // //   $("#cityId").val(this.cityId);
    // //   this.addSingleFilterItem(this.cityId, "cityId");
    // // }
    // var options = {
    //   types: ["geocode"],
    //   language: "en",
    //   componentRestrictions: { country: ["us", "il"] },
    // };

    // var input = document.getElementById("autocomplete-input");
    // this.autocomplete = new google.maps.places.Autocomplete(input, options);
    // this.autocomplete.setFields([
    //   "geometry,formatted_address,address_component",
    // ]);
    // this.autocomplete.addListener("place_changed", this.locationChanged);
  },
};
</script>
