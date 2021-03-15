<template>
    <div>
        <div class="dashboard-content-container nm-profile-container">
            <div class="dashboard-content-inner">
                <a-form layout="vertical">
                    <a-card hoverable
                            style="width: 100%"
                            title="My Account">
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <a-form-item label="First Name">
                                    <a-input placeholder="First Name"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="Last Name">
                                    <a-input placeholder="Last Name"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <a-form-item label="Email">
                                    <a-input placeholder="Email"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="Phone Number">
                                    <a-input placeholder="Phone Number"></a-input>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-card>
                    <br/>
                    <a-card hoverable
                            style="width: 100%"
                            title="My Account">
                        <a-row :gutter="16">
                            <a-col :span="7">
                                <h3>Set your <strong>minimal hourly rate</strong></h3>
                                <a-slider :default-value="30"/>
                            </a-col>
                            <a-col :span="7">
                                <h3>Skills
                                    <a-icon type="info-circle"/>
                                </h3>
                                <a-input placeholder="Input skills">
                                    <a-icon slot="suffix" type="plus-square"/>
                                </a-input>
                                <div class="tags">
                                    <a-tag :key="item" closable v-for="item in [1,2,3,4]">
                                        Pink {{item}}
                                    </a-tag>
                                </div>
                            </a-col>
                            <a-col :span="7">
                                <h3>Attachments</h3>
                                <div class="file-list">
                                    <div class="upload-button">
                                        <div class="upload-button-title">PDF</div>
                                    </div>
                                    <div class="upload-button">
                                        <div class="upload-button-title">PDF</div>
                                    </div>
                                </div>
                                <div class="tags">
                                    <a-upload>
                                        <a-button size="large" type="primary">
                                            <a-icon type="upload"/>
                                            Upload Files
                                        </a-button>
                                        <span>Maximum file size: 10 MB</span>
                                    </a-upload>
                                </div>
                            </a-col>
                        </a-row>
                        <a-divider/>
                        <a-row :gutter="16">
                            <a-col :span="12">
                                <a-form-item label="Tag Line">
                                    <a-input placeholder="Tag Line"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="12">
                                <a-form-item label="Nationality">
                                    <a-select class="country-list"
                                              option-filter-prop="children"
                                              placeholder="Select a country"
                                              show-search
                                              size="large">
                                        <a-select-option :key="index" :value="country.value"
                                                         v-for="(country, index) in countriesList">
                                            {{country.label}}
                                        </a-select-option>
                                    </a-select>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="16">
                            <a-col :span="24">
                                <a-form-item label="Introduce Yourself">
                                    <a-textarea :rows="8" placeholder="Introduce Yourself"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </a-card>
                    <br/>
                    <a-card hoverable
                            style="width: 100%"
                            title="Password & Security">
                        <a-row :gutter="16">
                            <a-col :span="8">
                                <a-form-item label="Current Password">
                                    <a-input placeholder="Tag Line"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="New Password">
                                    <a-input placeholder="Tag Line"/>
                                </a-form-item>
                            </a-col>
                            <a-col :span="8">
                                <a-form-item label="Repeat New Password">
                                    <a-input placeholder="Tag Line"/>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row>
                            <a-row>
                                <a-checkbox>
                                    Enable Two-Step Verification via Email
                                </a-checkbox>
                            </a-row>
                        </a-row>
                    </a-card>
                    <br/>
                    <a-button class="submit-btn" type="primary">Save Changes</a-button>
                </a-form>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapActions} from 'vuex';
    import {ACTIONS}              from '../../store';

    export default {
        layout: 'default1',
        methods: {
            ...mapActions({
                loggedUser: ACTIONS.LOGGED_USER
            })
        },
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
                return ['Angular', 'VueJs', 'iOS', 'Android', 'Laravel'];
            },
            ...mapState({
                user: state => state.user
            })
        },
        mounted() {
            this.loggedUser({email: 'test@test.com', socialLogin: 1});
        }
    };
</script>
<style lang="scss" scoped>
    .nm-profile-container {
        .file-list {
            display: flex;

            .upload-button {
                margin: 0 20px 20px 0;
                background-color: #f4f4f4;
                border-radius: 4px 0px 4px 4px;
                font-weight: 600;
                padding: 15px 25px 45px 20px;
                line-height: 24px;
                height: 80px;
                width: 150px;
                color: #666;
                position: relative;
                transition: 0.3s;
                cursor: default;

                .upload-button-title {
                    position: absolute;
                    top: 40%;
                    left: 40%;
                    font-size: 2rem;
                    transform: translate(-50%, -50%);
                }

                &.upload-button:after {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    border-width: 0 20px 20px 0;
                    border-style: solid;
                    border-color: rgba(0, 0, 0, 0.15) #fff;
                    transition: 0.3s;
                    border-radius: 0 0 0 4px;
                }
            }
        }

        .ant-input {
            resize: none;
        }

        .submit-btn {
            background: #2a41e8;
            color: white;
            padding: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.4rem;
        }
    }
</style>
<style lang="scss">
    .nm-profile-container {
        .ant-card {
            .country-list {

                .ant-select-selection {
                    height: 48px;

                    .ant-select-selection__rendered {
                        line-height: 48px;
                    }
                }
            }
        }

        .ant-card {
            .ant-form-item {
                .ant-form-item-label {
                    label {
                        font-family: "Nunito", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        color: #333;
                    }
                }
            }
        }

        .ant-tag {
            color: #2a41e8;
            background: #eff2fe;
            padding: 10px;
            font-size: 16px;
            .anticon-close {
                color: #2a41e8;
                font-size: 16px;
            }
        }
    }
</style>


