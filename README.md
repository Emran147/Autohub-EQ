# AutoHub





# Message Routes
| Route                         | Type | Request body                                | Response  |
|-------------------------------|------|----------------------------------------|-----------|
| /api/messages/                | GET  |                                        | [{_id, message}] |
| /api/messages/send            | POST | {licenseNumber, msg_id, sharePhone}    | text |

# Vehicle Routes
| Route                         | Type | Request body                                | Response  |
|-------------------------------|------|----------------------------------------|-----------|
| /api/vehicles/:licenseNumber  | GET  |                                        | {licenseNumber, forSale, manufacturer?, model?, year?, ownerFullName?, ownerEmail?, ownerPhoneNumber?} |
| /apu/vehicles/                | GET  |                                        | [{licenseNumber, forsale, shareDetails, manufacturer, model, year, note}] |
| /api/vehicles/forsale         | PATCH| {forsale, vehicleId}                   | {forsale}
| /api/vehicles/shareDetails    | PATCH| {shareDetails, vehicleId}              | {shareDetails}
| /api/vehicles/details         | PATCH| {vehicleId, manufacturer, model, year, note} | {vehicleId, manufacturer, model, year, note} |
| /api/vehicles/                | DELETE| {vehicleId}                           | text

# Auth Routes
| Route                         | Type | Request body                                    | Response  |
|-------------------------------|------|--------------------------------------------|-----------|
| /api/login                    | POST | {email/phoneNumber, password}              | text      |
| /api/register                 | POST | {fullName, email, phoneNumber, password}   | text      |
| /api/test                     | GET  | This route is used to get a JWT for testing

# Settings Routes
| Route                         | Type | Request body                                    | Response  |
|-------------------------------|------|--------------------------------------------|-----------|
| /api/settings/                | GET  |                                            | {allowSMSNotifications, allowWhatsappNotifications, allowEmailNotifications, shareContacts} |
| /api/settings/                | POST | {allowSMSNotifications, allowWhatsappNotifications, allowEmailNotifications, shareContacts} | {allowSMSNotifications, allowWhatsappNotifications, allowEmailNotifications, shareContacts} |
|

# User Routes
| Route                         | Type | Request body                                    | Response  |
|-------------------------------|------|--------------------------------------------|-----------|
| /api/users/emailAndPhone      | GET  |                                            | {email, phoneNumber} |
| /api/users/email              | PATCH| {email}                                    | {email}   |
| /api/users/phone              | PATCH| {phoneNumber}                              | {phoneNumber} |

# VehicleApproval Routes
| Route                         | Type | Request body                                    | Response  |
|-------------------------------|------|--------------------------------------------|-----------|
| /api/vehicleApproval/         | GET  |                                            |           |
| /api/vehicleApproval/         | POST | {licenseNumber, UserID}                    | text      |
| /api/vehicleApproval/resolve  | POST | {approve: true} or {approve: false, msg}| text      |