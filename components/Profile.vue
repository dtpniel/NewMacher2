<template>
    <!-- Dashboard Container -->
    <div class="dashboard-container">

        <!-- Dashboard Sidebar
        ================================================== -->
        <div class="dashboard-sidebar">
            <div class="dashboard-sidebar-inner" data-simplebar>
                <div class="dashboard-nav-container">

                    <!-- Responsive Navigation Trigger -->
                    <a class="dashboard-responsive-nav-trigger" href="#">
					<span class="hamburger hamburger--collapse">
						<span class="hamburger-box">
							<span class="hamburger-inner"></span>
						</span>
					</span>
                        <span class="trigger-title">
							Dashboard Navigation
						</span>
                    </a>

                    <!-- Navigation -->
                    <div class="dashboard-nav">
                        <div class="dashboard-nav-inner">
                            <ul data-submenu-title="Start">
                                <li>
                                    <a href="dashboard.html">
                                        <i class="icon-material-outline-dashboard"></i>
                                        Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-messages.html">
                                        <i class="icon-material-outline-question-answer"></i>
                                        Messages
                                        <span class="nav-tag">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-bookmarks.html">
                                        <i class="icon-material-outline-star-border"></i>
                                        Bookmarks
                                    </a>
                                </li>
                                <li>
                                    <a href="dashboard-reviews.html">
                                        <i class="icon-material-outline-rate-review"></i>
                                        Reviews
                                    </a>
                                </li>
                            </ul>

                            <ul data-submenu-title="Organize and Manage">
                                <li>
                                    <a href="#">
                                        <i class="icon-material-outline-business-center"></i>
                                        Jobs
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="dashboard-manage-jobs.html">
                                                Manage Jobs
                                                <span class="nav-tag">3</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-manage-candidates.html">
                                                Manage Candidates
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-post-a-job.html">
                                                Post a Job
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="icon-material-outline-assignment"></i>
                                        Tasks
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="dashboard-manage-tasks.html">
                                                Manage Tasks
                                                <span class="nav-tag">2</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-manage-bidders.html">
                                                Manage Bidders
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-my-active-bids.html">
                                                My Active Bids
                                                <span class="nav-tag">4</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-post-a-task.html">
                                                Post a Task
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul data-submenu-title="Account">
                                <li class="active">
                                    <a href="dashboard-settings.html">
                                        <i class="icon-material-outline-settings"></i>
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="index-logged-out.html">
                                        <i class="icon-material-outline-power-settings-new"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <!-- Navigation / End -->

                </div>
            </div>
        </div>
        <!-- Dashboard Sidebar / End -->


        <!-- Dashboard Content
        ================================================== -->
        <div class="dashboard-content-container" data-simplebar>
            <div class="dashboard-content-inner">

                <!-- Dashboard Headline -->
                <div class="dashboard-headline">
                    <h3>Settings</h3>

                    <!-- Breadcrumbs -->
                    <nav class="dark" id="breadcrumbs">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                            <li>
                                <a href="#">Settings</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- Row -->
                <div class="row">

                    <!-- Dashboard Box -->
                    <div class="col-xl-12">
                        <div class="dashboard-box margin-top-0">

                            <!-- Headline -->
                            <div class="headline">
                                <h3>
                                    <i class="icon-material-outline-account-circle"></i>
                                    My Account
                                </h3>
                            </div>

                            <div class="content with-padding padding-bottom-0">
                                <div class="row">
                                    <div class="col-xl-6">
                                        <div class="submit-field">
                                            <h5>First Name</h5>
                                            <input class="with-border" type="text" value="Tom">
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="submit-field">
                                            <h5>Last Name</h5>
                                            <input class="with-border" type="text" value="Smith">
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="submit-field">
                                            <h5>Email</h5>
                                            <input class="with-border" type="text" value="tom@example.com">
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="submit-field">
                                            <h5>Phone number</h5>
                                            <input class="with-border" type="number" value="9999999999">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard Box -->
                    <div class="col-xl-12">
                        <div class="dashboard-box">

                            <!-- Headline -->
                            <div class="headline">
                                <h3>
                                    <i class="icon-material-outline-face"></i>
                                    My Candidate Profile
                                </h3>
                            </div>

                            <div class="content">
                                <ul class="fields-ul">
                                    <li>
                                        <div class="row">
                                            <div class="col-auto">
                                                <div class="avatar-wrapper" data-tippy-placement="bottom"
                                                     title="Change Avatar">
                                                    <img class="profile-pic"
                                                         src="images/user-avatar-placeholder.png"/>
                                                    <div class="upload-button"></div>
                                                    <input accept="image/*" class="file-upload" type="file"/>
                                                </div>
                                            </div>

                                            <div class="col-xl-4">
                                                <div class="submit-field">
                                                    <div class="bidding-widget">
                                                        <!-- Headline -->
                                                        <span class="bidding-detail">
															Set your <strong>minimal hourly rate</strong>
														</span>

                                                        <!-- Slider -->
                                                        <div class="bidding-value margin-bottom-10">
                                                            $ <span id="biddingVal"></span>
                                                        </div>
                                                        <input class="bidding-slider"
                                                               data-slider-currency="$"
                                                               data-slider-handle="custom"
                                                               data-slider-max="150"
                                                               data-slider-min="5"
                                                               data-slider-step="1"
                                                               data-slider-tooltip="hide"
                                                               data-slider-value="35"
                                                               type="range"
                                                               value=""/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-4">
                                                <div class="submit-field">
                                                    <h5>
                                                        Skills
                                                        <i class="help-icon"
                                                           data-tippy-placement="right"
                                                           title="Add up to 10 skills">
                                                        </i>
                                                    </h5>

                                                    <!-- Skills List -->
                                                    <div class="keywords-container">
                                                        <div class="keyword-input-container">
                                                            <input class="keyword-input with-border"
                                                                   placeholder="e.g. Angular, Laravel"
                                                                   type="text"/>
                                                            <button class="keyword-input-button ripple-effect">
                                                                <i class="icon-material-outline-add"></i>
                                                            </button>
                                                        </div>
                                                        <div class="keywords-list">
                                                            <span class="keyword" v-for="tag in skillTags">
																<span class="keyword-remove"></span>
																<span class="keyword-text">{{tag}}</span>
															</span>
                                                        </div>
                                                        <div class="clearfix"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-4">
                                                <div class="submit-field">
                                                    <h5>Attachments</h5>
                                                    <div class="attachments-container margin-top-0 margin-bottom-0">
                                                        <div class="attachment-box ripple-effect">
                                                            <span>Cover Letter</span>
                                                            <i>PDF</i>
                                                            <button class="remove-attachment"
                                                                    data-tippy-placement="top"
                                                                    title="Remove">
                                                            </button>
                                                        </div>
                                                        <div class="attachment-box ripple-effect">
                                                            <span>Contract</span>
                                                            <i>DOCX</i>
                                                            <button class="remove-attachment"
                                                                    data-tippy-placement="top"
                                                                    title="Remove">
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="clearfix"></div>

                                                    <!-- Upload Button -->
                                                    <div class="uploadButton margin-top-0">
                                                        <input accept="image/*, application/pdf"
                                                               class="uploadButton-input"
                                                               id="upload"
                                                               multiple
                                                               type="file"/>
                                                        <label class="uploadButton-button ripple-effect" for="upload">
                                                            Upload Files
                                                        </label>
                                                        <span class="uploadButton-file-name">
															Maximum file size: 5 MB
														</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="submit-field">
                                                    <h5>Tagline</h5>
                                                    <input class="with-border"
                                                           type="text"
                                                           value="iOS Expert + Node Dev">
                                                </div>
                                            </div>

                                            <div class="col-xl-6">
                                                <div class="submit-field">
                                                    <h5>Location</h5>
                                                    <select class="with-border"
                                                            data-live-search="true"
                                                            data-size="7"
                                                            title="Select Job Type">
                                                        <option :value="country.value" v-for="country in countriesList">
                                                            {{country.label}}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-xl-12">
                                                <div class="submit-field">
                                                    <h5>Introduce Yourself</h5>
                                                    <textarea class="with-border" cols="30" rows="5">
														Leverage agile frameworks to provide a robust synopsis for high level overviews.
													</textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Employer profile -->
                    <div class="col-xl-12">
                        <div class="dashboard-box">
                            <div class="headline">
                                <h3>
                                    <i class="icon-material-outline-face"></i>
                                    My Employer Profile
                                </h3>
                            </div>
                            <div class="content with-padding">
                                <div class="row">
                                    <div class="col-auto">
                                        <div class="avatar-wrapper"
                                             data-tippy-placement="bottom"
                                             title="Change Avatar">
                                            <img class="profile-pic" src="images/company-logo-05.png"/>
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="submit-field">
                                            <h5>Company name</h5>
                                            <input class="with-border"
                                                   type="text"
                                                   value="Tom">
                                        </div>
                                    </div>

                                    <div class="col-xl-6">
                                        <div class="submit-field">
                                            <h5>Location</h5>
                                            <select class="with-border"
                                                    data-live-search="true"
                                                    data-size="7"
                                                    title="Select Job Type">
                                                <option :value="country.value" v-for="country in countriesList">
                                                    {{country.label}}
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-xl-12">
                                        <div class="submit-field">
                                            <h5>Introduce Yourself</h5>
                                            <textarea class="with-border" cols="30" rows="5">
												Leverage agile frameworks to provide a robust synopsis for high level overviews.
											</textarea>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Dashboard Box -->
                    <div class="col-xl-12">
                        <div class="dashboard-box">
                            <div class="headline">
                                <h3>
                                    <i class="icon-material-outline-lock"></i>
                                    Password & Security
                                </h3>
                            </div>

                            <div class="content with-padding">
                                <div class="row">
                                    <div class="col-xl-4">
                                        <div class="submit-field">
                                            <h5>Current Password</h5>
                                            <input class="with-border" type="password">
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="submit-field">
                                            <h5>New Password</h5>
                                            <input class="with-border" type="password">
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="submit-field">
                                            <h5>Repeat New Password</h5>
                                            <input class="with-border" type="password">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Button -->
                    <div class="col-xl-12">
                        <a class="button ripple-effect big margin-top-30" href="#">
                            Save Changes
                        </a>
                    </div>

                </div>
                <!-- Row / End -->
            </div>
        </div>
        <!-- Dashboard Content / End -->

    </div>
    <!-- Dashboard Container / End -->

</template>

<script>
    export default {
        computed: {
            countriesList() {
                return [
                    {
                        "value": "AR",
                        "label": "Argentina"
                    },
                    {
                        "value": "AM",
                        "label": "Armenia"
                    },
                    {
                        "value": "AW",
                        "label": "Aruba"
                    },
                    {
                        "value": "AU",
                        "label": "Australia"
                    },
                    {
                        "value": "AT",
                        "label": "Austria"
                    },
                    {
                        "value": "AZ",
                        "label": "Azerbaijan"
                    },
                    {
                        "value": "BS",
                        "label": "Bahamas"
                    },
                    {
                        "value": "BH",
                        "label": "Bahrain"
                    },
                    {
                        "value": "BD",
                        "label": "Bangladesh"
                    },
                    {
                        "value": "BB",
                        "label": "Barbados"
                    },
                    {
                        "value": "BY",
                        "label": "Belarus"
                    },
                    {
                        "value": "BE",
                        "label": "Belgium"
                    },
                    {
                        "value": "BZ",
                        "label": "Belize"
                    },
                    {
                        "value": "BJ",
                        "label": "Benin"
                    },
                    {
                        "value": "BM",
                        "label": "Bermuda"
                    },
                    {
                        "value": "BT",
                        "label": "Bhutan"
                    },
                    {
                        "value": "BG",
                        "label": "Bulgaria"
                    },
                    {
                        "value": "BF",
                        "label": "Burkina Faso"
                    },
                    {
                        "value": "BI",
                        "label": "Burundi"
                    },
                    {
                        "value": "KH",
                        "label": "Cambodia"
                    },
                    {
                        "value": "CM",
                        "label": "Cameroon"
                    },
                    {
                        "value": "CA",
                        "label": "Canada"
                    },
                    {
                        "value": "CV",
                        "label": "Cape Verde"
                    },
                    {
                        "value": "KY",
                        "label": "Cayman Islands"
                    },
                    {
                        "value": "CO",
                        "label": "Colombia"
                    },
                    {
                        "value": "KM",
                        "label": "Comoros"
                    },
                    {
                        "value": "CG",
                        "label": "Congo"
                    },
                    {
                        "value": "CK",
                        "label": "Cook Islands"
                    },
                    {
                        "value": "CR",
                        "label": "Costa Rica"
                    },
                    {
                        "value": "CI",
                        "label": "Coted Ivoire"
                    },
                    {
                        "value": "HR",
                        "label": "Croatia"
                    },
                    {
                        "value": "CU",
                        "label": "Cuba"
                    },
                    {
                        "value": "CW",
                        "label": "Curacao"
                    },
                    {
                        "value": "CY",
                        "label": "Cyprus"
                    },
                    {
                        "value": "CZ",
                        "label": "Czech Republic"
                    },
                    {
                        "value": "DK",
                        "label": "Denmark"
                    },
                    {
                        "value": "DJ",
                        "label": "Djibouti"
                    },
                    {
                        "value": "DM",
                        "label": "Dominica"
                    },
                    {
                        "value": "DO",
                        "label": "Dominican Republic"
                    },
                    {
                        "value": "EC",
                        "label": "Ecuador"
                    },
                    {
                        "value": "EG",
                        "label": "Egypt"
                    },
                    {
                        "value": "GP",
                        "label": "Guadeloupe"
                    },
                    {
                        "value": "GU",
                        "label": "Guam"
                    },
                    {
                        "value": "GT",
                        "label": "Guatemala"
                    },
                    {
                        "value": "GG",
                        "label": "Guernsey"
                    },
                    {
                        "value": "GN",
                        "label": "Guinea"
                    },
                    {
                        "value": "GW",
                        "label": "Guinea Bissau"
                    },
                    {
                        "value": "GY",
                        "label": "Guyana"
                    },
                    {
                        "value": "HT",
                        "label": "Haiti"
                    },
                    {
                        "value": "HN",
                        "label": "Honduras"
                    },
                    {
                        "value": "HK",
                        "label": "Hong Kong"
                    },
                    {
                        "value": "HU",
                        "label": "Hungary"
                    },
                    {
                        "value": "IS",
                        "label": "Iceland"
                    },
                    {
                        "value": "IN",
                        "label": "India"
                    },
                    {
                        "value": "ID",
                        "label": "Indonesia"
                    },
                    {
                        "value": "NO",
                        "label": "Norway"
                    },
                    {
                        "value": "OM",
                        "label": "Oman"
                    },
                    {
                        "value": "PK",
                        "label": "Pakistan"
                    },
                    {
                        "value": "PW",
                        "label": "Palau"
                    },
                    {
                        "value": "PA",
                        "label": "Panama"
                    },
                    {
                        "value": "PG",
                        "label": "Papua New Guinea"
                    },
                    {
                        "value": "PY",
                        "label": "Paraguay"
                    },
                    {
                        "value": "PE",
                        "label": "Peru"
                    },
                    {
                        "value": "PH",
                        "label": "Philippines"
                    },
                    {
                        "value": "PN",
                        "label": "Pitcairn"
                    },
                    {
                        "value": "PL",
                        "label": "Poland"
                    },
                    {
                        "value": "PT",
                        "label": "Portugal"
                    },
                    {
                        "value": "PR",
                        "label": "Puerto Rico"
                    },
                    {
                        "value": "QA",
                        "label": "Qatar"
                    },
                    {
                        "value": "RE",
                        "label": "Reunion"
                    },
                    {
                        "value": "RO",
                        "label": "Romania"
                    },
                    {
                        "value": "RU",
                        "label": "Russian Federation"
                    },
                    {
                        "value": "RW",
                        "label": "Rwanda"
                    },
                    {
                        "value": "SZ",
                        "label": "Swaziland"
                    },
                    {
                        "value": "SE",
                        "label": "Sweden"
                    },
                    {
                        "value": "CH",
                        "label": "Switzerland"
                    },
                    {
                        "value": "TR",
                        "label": "Turkey"
                    },
                    {
                        "value": "TM",
                        "label": "Turkmenistan"
                    },
                    {
                        "value": "TV",
                        "label": "Tuvalu"
                    },
                    {
                        "value": "UG",
                        "label": "Uganda"
                    },
                    {
                        "value": "UA",
                        "label": "Ukraine"
                    },
                    {
                        "value": "GB",
                        "label": "United Kingdom"
                    },
                    {
                        "value": "US",
                        "label": "United States"
                    },
                    {
                        "value": "UY",
                        "label": "Uruguay"
                    },
                    {
                        "value": "UZ",
                        "label": "Uzbekistan"
                    },
                    {
                        "value": "YE",
                        "label": "Yemen"
                    },
                    {
                        "value": "ZM",
                        "label": "Zambia"
                    },
                    {
                        "value": "ZW",
                        "label": "Zimbabwe"
                    }
                ]
            },
            skillTags() {
                return ['Angular', 'VueJs', 'iOS', 'Android', 'Laravel']
            }
        }
    };
</script>
