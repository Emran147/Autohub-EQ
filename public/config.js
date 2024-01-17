const baseApiRoutes = {
    ADMIN: "/api/admin/",
    VEHICLE : "/api/vehicle/",
    MESSAGELIST : "/api/messageList/",
    SENDMESSAGE : "/api/sendMessage/",
    GETSETTINGS : "/api/settings/",
    UPDATESETTINGS : "/api/settings/",
    GETPROFILEDETAILS :  "/api/profile/",
    UPDATEEMAIL : "/api/email",
    UPDATEPHONENUMBER : "/api/phoneNumber",
    GETVEHICLES : "api/vehicles"
}

const templates = {
    SEARCH_VEHICLE: "#search-container-template",
    VEHICLE_APPROVALS: "#vehicleApprovals-template",
    USER_PROFILE: "#userProfile-template",
    VEHICLE_FOUND: "#vehicleFound-template" ,
    MESSAGE_LIST : "#messageList-template" , 
    SETTINGS : "#settings-template",
    VEHICLES_LIST : "#vehicles-template"
}

const containers = {
    VEHICLE_APPROVALS: "#vehicleApprovals",
    USER_PROFILE: "#userProfile",
    SEARCH_VEHICLE: "#container",
    VEHICLE_FOUND: "#vehicleFound",
    MESSAGE_LIST:"#container",
    SETTINGS : "#settingContainer",
    VEHICLES_LIST : "#vehiclesContainer"
}