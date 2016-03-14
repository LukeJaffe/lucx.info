/* Cursor class */
function Cursor()
{
    this.x = 0;
    this.y = 0;
    this.p = vec3.create();
    this.d = vec3.create();
}

Cursor.prototype.unproject = function(mm, pm, winx, winy, winz) 
{
  var canvas = document.getElementById("canvas");
  // winz is either 0 (near plane), 1 (far plane) or somewhere in between.
  // if it's not given a value we'll produce coords for both.
  if (typeof(winz) == "number") 
  {
    r = canvas.getBoundingClientRect();

    winx = parseFloat(winx);
    winy = r.height-parseFloat(winy);
    winz = parseFloat(winz);

    var inf = vec4.create();
    var viewport = [r.left, r.top, r.width, r.height];

    //Calculation for inverting a matrix, compute projection x modelview; then compute the inverse
    var m = mat4.copy(mat4.create(), mm);
    
    mat4.invert(m, m); // WHY do I have to do this? --see Jax.Context#reloadMatrices
    mat4.multiply(m, pm, m);
    mat4.invert(m, m);

    // Transformation of normalized coordinates between -1 and 1
    inf[0]=(winx-viewport[0])/viewport[2]*2.0-1.0;
    inf[1]=(winy+viewport[1])/viewport[3]*2.0-1.0;
    inf[2]=2.0*winz-1.0;
    inf[3]=1.0;

    //Objects coordinates
    var out = vec4.create();
    mat4.mulVec4(out, m, inf);
    if(out[3]==0.0)
       return null;

    out[3]=1.0/out[3];
    return [out[0]*out[3], out[1]*out[3], out[2]*out[3]];
  }
}

Cursor.prototype.update = function(x, y, p_mat)
{
    // update screen x, y
    this.x = x;
    this.y = y;

    // make identity mat
    var id = mat4.create();
    mat4.identity(id);

    // get unprojected mouse ray
    var p1 = this.unproject(id, p_mat, this.x, this.y, 0);
    var p2 = this.unproject(id, p_mat, this.x, this.y, 1);
    this.p = p1;
    var ray = vec3.create();
    vec3.subtract(ray, p2, p1);
    vec3.normalize(this.d, ray);
}
