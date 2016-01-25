/* Hex class */
function Hex(x, y, r, t)
{
    /* Store inputs */
    this.x = x;
    this.y = y;
    this.r = r;
    this.t = t;
    this.robber = false;

    /* Calculate and store vertices */
    a = (Math.sqrt(3)/2)*r;
    b = r/2;
    v = [];
    v.push([x+a, y-b]);
    v.push([x, y-r]);
    v.push([x-a, y-b]);
    v.push([x-a, y+b]);
    v.push([x, y+r]);
    v.push([x+a, y+b]);
    v.push([x+a, y-b]);
    this.v = v

    /* Get roads */
    this.roads = [];
    for (var i = 0; i < v.length-1; i++)
        if (this.t.resource !== 'water')
            this.roads.push([v[i][0], v[i][1], v[i+1][0], v[i+1][1]]);

    /* Get vertices */
    this.verts = [];
    for (var i = 0; i < v.length-1; i++)
        if (this.t.resource !== 'water')
            this.verts.push(v[i])
}

Hex.prototype.draw = function(context)
{
    /* Draw textures on hexes */
    context.save(); // Save the context before we muck up its properties
    context.translate(this.x,this.y);

    context.beginPath();
    context.moveTo(this.v[0][0] - this.x, this.v[0][1] - this.y);
    for (var i = 1; i < this.v.length; i++)
    {
        x = this.v[i][0] - this.x;
        y = this.v[i][1] - this.y;
        context.lineTo(x,y);
    }
    context.closePath();

    clippedBackgroundImage( context, this.t.texture, this.r, this.r );
    context.lineWidth = 1;
    context.strokeStyle = '#000000';
    context.stroke();  // Now draw our path
    context.restore(); // Put the canvas back how it was before we started
    context.lineWidth = 1;

    this.draw_roll(context);
}

Hex.prototype.draw_desert = function(context)
{
    /* Draw textures on hexes */
    context.save(); // Save the context before we muck up its properties
    context.translate(this.x,this.y);

    context.beginPath();
    context.moveTo(0, 0);
    context.arc(0, 0, this.r/3+1, 0, 2*Math.PI);

    clippedBackgroundImage( context, this.t.texture, this.r, this.r );
    context.restore(); // Put the canvas back how it was before we started

    this.draw_roll(context);
}

Hex.prototype.draw_roll = function(context)
{
    if (this.t.roll !== 0)
    {
        /* Draw roll circles */
        context.beginPath();
        context.arc(this.x, this.y, this.r/3, 0, 2*Math.PI);
        context.fillStyle = '#FFE4BC';
        /* Fill er up */
        context.fill();
        context.strokeStyle = '#000000';
        context.stroke();

        /* Draw roll numbers */
        context.font = "18px Arial";
        if (this.t.roll < 10)
            xoff = this.r/9;
        else
            xoff = this.r/5;
        context.fillStyle = '#000000';
        context.fillText(this.t.roll.toString(), this.x-xoff, this.y+r/10);
    }
}

Hex.prototype.collision = function(x, y)
{
    dx = this.x - x;
    dy = this.y - y;
    dist = Math.sqrt((dx*dx) + (dy*dy));
    if (dist > (Math.sqrt(3)/2)*this.r)
        return false;
    else
        return true;
}

Hex.prototype.select = function(context)
{
    /* Draw roll circles */
    context.beginPath();
    context.arc(this.x, this.y, (Math.sqrt(3)/2)*this.r, 0, 2*Math.PI);
    context.strokeStyle = '#FFFF00';
    context.stroke();
}

Hex.prototype.click = function(canvas, context)
{
    /* Draw the robber */
    context.beginPath();
    context.arc(this.x, this.y, this.r/3, 0, 2*Math.PI);
    context.fillStyle = '#000000';
    context.fill();

    /* Redraw roll over old robber */
    this.robber = true;

    /* Save the default canvas appearance */
    return canvas.toDataURL();
}
