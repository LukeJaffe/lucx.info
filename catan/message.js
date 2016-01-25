var MESSAGE = 
{
    SET: "set",
    PASS: "pass",
    DCARD: "dcard",
    MONOPOLY: "monopoly",
    ROBBER: "robber",
    TRADE: "trade",
    BUILD: "build",
    CHAT: "chat"
}

var PAYLOAD = 
{
    NONE: "none"
}

var RECEIVER = 
{
    ALL: "ALL"
}

function send_message(tag, payload, receiver)
{
    $.post("http://lucx.info/catan/send_message.php",
    {tag: tag, payload: payload, receiver: receiver},
    function(response)
    {
        console.log(response);
    });
}
