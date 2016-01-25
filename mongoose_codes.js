module.exports = 
{
    USER:
    {   
        REGISTER:
        {   
            ERROR:
            {   
                DUP_KEY: 11000,
                VALIDATION: "ValidationError"
            },

            CODE:
            {  
                FAILURE: -1, 
                SUCCESS: 0,
                DUP_KEY: 1,
                VALIDATION: 2
            }   
        }, 

        AUTHENTICATE:
        {
            ERROR:
            {

            },

            RETURN: 
            {
                NOT_FOUND: ""
            },

            CODE:
            {
                FAILURE: -1,
                FOUND: 0,
                NOT_FOUND: 1
            }
        }
    }   
};
