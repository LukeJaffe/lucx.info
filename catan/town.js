function Town(v, r)
{
    this.v = v;
    this.x = v[0];
    this.y = v[1];
    this.r = r;
    this.built = false;
    this.owner = "none";
    this.adj_roads = [];
}

Town.prototype.adj_road = function(road)
{
    if (
        (feq(this.v[0], road.v1[0]) && feq(this.v[1], road.v1[1])) ||
        (feq(this.v[0], road.v2[0]) && feq(this.v[1], road.v2[1]))
    )
        return true;
    else
        return false;
}

Town.prototype.add_adj_road = function(idx)
{
    this.adj_roads.push(idx);
}

Town.prototype.collision = function(x, y)
{
    dx = this.x - x;
    dy = this.y - y;
    dist = Math.sqrt((dx*dx) + (dy*dy));
    if (dist > this.r/4)
        return false;
    else
        return true;
}

Town.prototype.select = function(context)
{
    context.beginPath();
    context.arc(this.x, this.y, this.r/4, 0, 2*Math.PI);
    context.strokeStyle = '#0000FF';
    context.stroke();
}

Town.prototype.click = function(context, build_town, roads, color)
{
    /* Get vertices adjacent to town */
    verts = [];
    for (var i = 0; i < this.adj_roads.length; i++)
    {
        x = (roads[this.adj_roads[i]].x + this.x)/2;
        y = (roads[this.adj_roads[i]].y + this.y)/2;
        verts.push([x, y]);
    }
    
    /* Draw settlement shape based on num available verts */
    if (this.adj_roads.length == 2)
        verts.push([this.x, this.y])

    /* Draw triangle for town */
    context.beginPath();
    context.moveTo(verts[0][0], verts[0][1]);
    for (var i = 1; i < verts.length; i++)
    {
        context.lineTo(verts[i][0], verts[i][1]);
    }
    context.closePath();
    context.fillStyle = color;
    context.fill();  // Now draw our path

    /* Draw outline for town */
    context.beginPath();
    context.moveTo(verts[0][0], verts[0][1]);
    for (var i = 1; i < verts.length; i++)
    {
        context.lineTo(verts[i][0], verts[i][1]);
    }
    context.closePath();
    context.strokeStyle = '#000000';
    context.stroke();  // Now draw our path
}

function verts_equal(a, b) 
{
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (var i = 0; i < a.length; ++i) 
        if (!feq(a[i], b[i])) return false;
    return true;
}

Array.prototype.unique_verts = function() 
{
    var a = this.concat();
    for (var i = 0; i < a.length; ++i) 
        for (var j = i+1; j < a.length; ++j) 
            if (verts_equal(a[i], a[j]))
                a.splice(j--, 1);

    return a;
};
