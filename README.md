# AutoHub

# Search and Send Message Routes



# Search and Send Message Routes
| Route                         | Type | Request                                | Response  |
|-------------------------------|------|----------------------------------------|-----------|
| /api/vehicles/                | GET  | body => {licenseNumber}                | {licenseNumber, forSale, manufacturer?, model?, year?, ownerFullName?, ownerEmail?, ownerPhoneNumber?} |
| /api/messages/:language       | GET  | {}                                     | [{_id, message}]
| /api/messages/send            | POST | {licenseNumber, msg_id, sharePhone}    | text
