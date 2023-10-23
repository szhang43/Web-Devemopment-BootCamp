const { v4: uuid } = require('uuid');

let commentData = [
    {   
        id : uuid(),
        username : "JohnDoe92",
        comment : "I really enjoyed the article. Great work!"
    },
    {
        id : uuid(),
        username : "AliceSmith77",
        comment : "This is very informative. Thanks for sharing!"
    },
    {
        id : uuid(),
        username : "TechGeek123",
        comment : "I have a question about the code snippet in section 2."
    },
    {
        id : uuid(),
        username : "CodingWizard",
        comment : "Awesome tutorial! I learned a lot from it."
    },
    {
        id : uuid(),
        username : "WebDevMaster",
        comment : "Is there a GitHub repository for this project?"
    }
]


module.exports = commentData;