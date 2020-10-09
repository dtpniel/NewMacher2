/*=
* ========
*
*  STATE.JS FILE
* @head
* @isMobile
* @userInfo
* =========
*
* */
import themeConfig from "./../theme";
// State
const state = {
    head: {}, // site head
    isMobile: false, // check user agent
    user: null,  //  USER
    isLoggedIn: false, // USER logged or not
    layout: themeConfig.layout || "default", // theme config
    adminLayout: themeConfig.layout_admin || "jobs", // theme config
    theme: themeConfig.theme || "jobs", // theme config
    windowWidth: null, // theme config
    sidebarOpen: false, // component : Sidebar { dashboard_layout }
}
export default state
