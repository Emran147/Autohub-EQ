# AutoHub

# Search and Send Message Routes



# Search and Send Message Routes
| Route                         | Type | Request                                | Response  |
|-------------------------------|------|----------------------------------------|-----------|
| /api/vehicles/:licenseNumber  | GET  |                                        | {licenseNumber, forSale, manufacturer?, model?, year?, ownerFullName?, ownerEmail?, ownerPhoneNumber?} |
| /api/messages/:language       | GET  |                                        | [{_id, message}]
| /api/messages/send            | POST | {licenseNumber, msg_id, sharePhone}    | text

# Auth Routes
| Route                         | Type | Request                                    | Response  |
|-------------------------------|------|--------------------------------------------|-----------|
| /api/login                    | POST | {email/phoneNumber, password}              | text      |
| /api/register                 | POST | {fullName, email, phoneNumber, password}   | text      |
| /api/test                     | GET  | This route is used to get a JWT for testing

