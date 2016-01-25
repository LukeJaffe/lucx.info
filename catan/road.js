function Road(v, r)
{
    this.v1 = [v[0], v[1]];
    this.v2 = [v[2], v[3]];
    this.x = (v[0]+v[2])/2;
    this.y = (v[1]+v[3])/2;
    this.r = r;
    this.built = false;
    this.owner = "none";
    this.a = [];
}

Road.prototype.adjacent = function(road)
{
    if (
        (feq(this.v1[0], road.v1[0]) && feq(this.v1[1], road.v1[1])) ||
        (feq(this.v1[0], road.v2[0]) && feq(this.v1[1], road.v2[1])) ||
        (feq(this.v2[0], road.v1[0]) && feq(this.v2[1], road.v1[1])) ||
        (feq(this.v2[0], road.v2[0]) && feq(this.v2[1], road.v2[1]))
    )
        return true;
    else
        return false;
}

Road.prototype.add_adjacent = function(idx)
{
    this.a.push(idx);
}

Road.prototype.collision = function(x, y)
{
    dx = this.x - x;
    dy = this.y - y;
    dist = Math.sqrt((dx*dx) + (dy*dy));
    if (dist > this.r/3)
        return false;
    else
        return true;
}

Road.prototype.select = function(context)
{
    context.beginPath();
    context.arc(this.x, this.y, this.r/3, 0, 2*Math.PI);
    context.strokeStyle = '#FF0000';
    context.stroke();
}

Road.prototype.click = function(context, color)
{
    /* Draw road */
    context.beginPath();
    context.moveTo(this.v1[0], this.v1[1]);
    context.lineTo(this.v2[0], this.v2[1]);
    context.closePath();
    context.strokeStyle = '#000000';
    context.lineWidth = 5;
    context.stroke();  // Now draw our path

    /* Draw road */
    context.beginPath();
    context.moveTo(this.v1[0], this.v1[1]);
    context.lineTo(this.v2[0], this.v2[1]);
    context.closePath();
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.stroke();  // Now draw our path
    context.lineWidth = 1;
}

function roads_equal(a, b) 
{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    c1 = true;
    for (var i = 0; i < a.length; ++i) 
        if (!feq(a[i], b[i])) c1 = false;
    c2 = true;
    var c = [b[2],b[3],b[0],b[1]];
    for (var i = 0; i < a.length; ++i) 
        if (!feq(a[i], c[i])) c2 = false;
    return c1 || c2;
}

Array.prototype.unique_roads = function() 
{
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) 
        for (var j = i+1; j < a.length; ++j) 
            if (roads_equal(a[i], a[j]))
                a.splice(j--, 1);

    return a;
};
