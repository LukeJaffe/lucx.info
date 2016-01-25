/* HexType class with solid color background*/
function HexType(resource, roll)
{
    this.resource = resource
    this.roll = roll
    if (this.resource == 'wood')
    {
        this.color = '#663300';
        this.texture = document.getElementById("forest");
    }
    else if (this.resource == 'wheat')
    {
        this.color = '#FFFF00';
        this.texture = document.getElementById("wheat");
    }
    else if (this.resource == 'pasture')
    {
        this.color = '#00FF00';
        this.texture = document.getElementById("pasture");
    }    
    else if (this.resource == 'ore')
    { 
        this.color = '#666666';
        this.texture = document.getElementById("ore");
    }
    else if (this.resource == 'brick')
    { 
        this.color = '#FF0000';
        this.texture = document.getElementById("brick");
    }
    else if (this.resource == 'desert')
    { 
        this.color = '#967117';
        this.texture = document.getElementById("desert");
    }
    else if (this.resource == 'water')
    { 
        this.color = '#0000FF';
        this.texture = document.getElementById("water");
    }
}
