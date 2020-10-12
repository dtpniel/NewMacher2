/*=moduleJobState.js=*/

var dataIndex = {
    jobs: 0,
    states: 1,
    cities: 2,
    mainCategories: 3,
    categories: 4,
    mainCategorySEO: 5,
    categorySEO: 6,
    stateSEO: 7,
    citySEO: 8,
    premiumJobs: 9
};

export default {
    jobs: [],
    singleJob: {},
    premiumJobs: [],
    filter: {
        stateId: 0,
        cityId: [],
        mainCategoryId: 0,
        categoryId: [],
        freelance: 0,
        partTime: 0,
        internship: 0,
        temporary: 0,
        fromHome: 0,
        freeText: "",
        sortBy: {}
    },
    filterDefault: {
        stateId: 0,
        cityId: [],
        mainCategoryId: 0,
        categoryId: [],
        freelance: 0,
        partTime: 0,
        internship: 0,
        temporary: 0,
        fromHome: 0,
        freeText: ""
    },
    filterDefinition: [
        {
            name: "stateId",
            multiple: false,
            server: true,
            resetSubCategory: true,
            subCategory: "cityId"
        },
        {
            name: "cityId",
            multiple: true,
            server: false,
            resetSubCategory: false,
            subCategory: ""
        },
        {
            name: "mainCategoryId",
            multiple: false,
            server: true,
            resetSubCategory: true,
            subCategory: "categoryId"
        },
        {
            name: "categoryId",
            multiple: true,
            server: false,
            resetSubCategory: false,
            subCategory: ""
        },
        {
            name: "freelance",
            multiple: false,
            server: false,
            resetSubCategory: false,
            subCategory: ""
        },
        {
            name: "partTime",
            multiple: false,
            server: false,
            resetSubCategory: false,
            subCategory: ""
        },
        {
            name: "internship",
            multiple: false,
            server: false,
            resetSubCategory: false,
            subCategory: ""
        },
        {
            name: "temporary",
            multiple: false,
            server: false,
            resetSubCategory: false,
            subCategory: ""
        },
        {
            name: "fromHome",
            multiple: false,
            server: false,
            resetSubCategory: false,
            subCategory: ""
        },
        {
            name: "freeText",
            multiple: false,
            server: true,
            resetSubCategory: false,
            subCategory: ""
        }],

    stateIdData: [],
    mainCategoryIdData: [],
    cityIdData: [],
    categoryIdData: [],
    freelanceData: [{name: "Freelance", id: 1}],
    fromHomeData: [{name: "From Home", id: 1}],
    partTimeData: [{name: "Part Time", id: 1}],
    internshipData: [{name: "Internship", id: 1}],
    temporaryData: [{name: "Temporary", id: 1}],
    metaTags: {
        title: "Jewish Jobs on Macher: The Largest Jewish Classifieds Website in the US",
        description: "The largest jewish jobs website in NYC, Brooklyn, Boro Park, Five Towns, Crown Heights, Woodmere, Monsey, Lakewood and more.",
        socialTitle: "",
        socialDescription: "",
        canonical: "",
        twitter: "@FrumJewishJobs",
        siteName: "Macher",
        categoryName: "",
        location: ""
    },
    currentPage: 1,
    perPage: 25
};

