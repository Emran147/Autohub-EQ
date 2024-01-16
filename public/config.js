const baseApiRoutes = {
    ADMIN: "/api/admin/",
    SEARCHVEHICLE : "/api/vehicle/",
    MESSAGELIST : "/api/messageList/",
    SENDMESSAGE : "/api/sendMessage/",
    GETSETTINGS : "/api/settings/",
    UPDATESETTINGS : "/api/settings/",
    GETPROFILEDETAILS :  "/api/profile/",
    UPDATEUSERDETAILS : "/api/userDetails",
}

const templates = {
    SEARCH_VEHICLE: "#search-container-template",
    VEHICLE_APPROVALS: "#vehicleApprovals-template",
    USER_PROFILE: "#userProfile-template",
    VEHICLE_FOUND: "#vehicleFound-template" ,
    MESSAGE_LIST : "#messageList-template" , 
    SETTINGS : "#settings-template",
}

const containers = {
    VEHICLE_APPROVALS: "#vehicleApprovals",
    USER_PROFILE: "#userProfile",
    SEARCH_VEHICLE: "#container",
    VEHICLE_FOUND: "#vehicleFound",
    MESSAGE_LIST:"#container",
    SETTINGS : "#settingContainer"
}