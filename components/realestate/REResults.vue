<template>
  <!-- <div
    class="listings-container compact-list-layout margin-top-15 margin-bottom-35"
    :class="{ 'compact-list-layout-mobile': isMobile }"
  > -->
  
    <!-- <div
      v-if="!jobs.length"
      class="alert alert-danger"
      role="alert"
    >No results match your search criteria</div>
    <div class="job-listing-container" v-for="(item,index) in jobs" :key="item.id">
      <h4 v-if="((index)%perPage)==0||index==0" class="page-number">
        <span class="icon-feather-arrow-right"></span>
        Page {{Math.floor((index+1)/perPage)+1}}
      </h4> -->
	<div class="full-page-content-container" data-simplebar>
		<div class="full-page-content-inner">

			<h3 class="page-title">Search Results</h3>

			<div class="notify-box margin-top-15">
				<div class="switch-container">
					<label class="switch"><input type="checkbox"><span class="switch-button"></span><span class="switch-text">Turn on email alerts for this search</span></label>
				</div>

				<div class="sort-by">
					<span>Sort by:</span>
					<select class="selectpicker hide-tick">
						<option>Relevance</option>
						<option>Newest</option>
						<option>Oldest</option>
						<option>Random</option>
					</select>
				</div>
			</div>

			<div class="listings-container compact-list-layout margin-top-35 margin-bottom-25">
				
				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-01.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">Bilingual Event Support Specialist</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> Hexagon <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>	


				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-05.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">Competition Law Officer</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> Laxo</li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>
				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-02.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">Barista and Cashier</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> Coffee</li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>
				

				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-03.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">Restaurant General Manager</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> King <div class="verified-badge" title="Verified Employer" data-tippy-placement="top"></div></li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>

				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-05.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">International Marketing Coordinator</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> Skyist</li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>

				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-04.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">Administrative Assistant</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> Mates</li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>


				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-05.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">Construction Labourers</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> Podous</li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>

				<!-- Job Listing -->
				<a href="single-job-page.html" class="job-listing">

					<!-- Job Listing Details -->
					<div class="job-listing-details">

						<!-- Logo -->
						<div class="job-listing-company-logo">
							<img src="images/company-logo-06.png" alt="">
						</div>

						<!-- Details -->
						<div class="job-listing-description">
							<h3 class="job-listing-title">Human Resources Consultant</h3>

							<!-- Job Listing Footer -->
							<div class="job-listing-footer">
								<ul>
									<li><i class="icon-material-outline-business"></i> Trideo</li>
									<li><i class="icon-material-outline-location-on"></i> San Francisco</li>
									<li><i class="icon-material-outline-business-center"></i> Full Time</li>
									<li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
								</ul>
							</div>
						</div>

						<!-- Bookmark -->
						<span class="bookmark-icon"></span>
					</div>
				</a>

			</div>

			<!-- Pagination -->
			<div class="clearfix"></div>
			<div class="pagination-container margin-top-20 margin-bottom-20">
				<nav class="pagination">
					<ul>
						<li class="pagination-arrow"><a href="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-left"></i></a></li>
						<li><a href="#" class="ripple-effect">1</a></li>
						<li><a href="#" class="ripple-effect current-page">2</a></li>
						<li><a href="#" class="ripple-effect">3</a></li>
						<li><a href="#" class="ripple-effect">4</a></li>
						<li class="pagination-arrow"><a href="#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-right"></i></a></li>
					</ul>
				</nav>
			</div>
			<div class="clearfix"></div>
			<!-- Pagination / End -->

			<!-- Footer -->
			<div class="small-footer margin-top-15">
				<div class="small-footer-copyrights">
					© 2018 <strong>Hireo</strong>. All Rights Reserved.
				</div>
				<ul class="footer-social-links">
					<li>
						<a href="#" title="Facebook" data-tippy-placement="top">
							<i class="icon-brand-facebook-f"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Twitter" data-tippy-placement="top">
							<i class="icon-brand-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#" title="Google Plus" data-tippy-placement="top">
							<i class="icon-brand-google-plus-g"></i>
						</a>
					</li>
					<li>
						<a href="#" title="LinkedIn" data-tippy-placement="top">
							<i class="icon-brand-linkedin-in"></i>
						</a>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			<!-- Footer / End -->

		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import ResultItem from "~/components/realestate/REResultItem";

export default {
  name: "REResults",
  components: { ResultItem },
  data: function () {
    return {
      selectedId: 0,
      item: {},
    };
  },
  // computed: {
  //   ...mapGetters({
  //     jobs: "jobs/filteredJobsSliced",
  //     sum: "jobs/sum",
  //     perPage: "jobs/perPage",
  //     isMobile: "isMobile"
  //   })
  // },
  methods: {
    page: function (index) {
      return this.sum % this.perPage;
    },
    viewMore: function (id) {
      this.selectedId = id;
      return false;
    },
  },
};
</script>
