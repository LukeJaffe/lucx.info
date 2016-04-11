/* Perspective class */
function Camera(gl)
{
    this.mv_matrix = mat4.create();

    // perspective matrix (45 degrees)
    this.p = mat4.create();
    mat4.perspective(this.p, .785398, gl.viewport_width/gl.viewport_height, 0.1, 100.0);

    // model view matrix
    this.mv = mat4.create();
    mat4.identity(this.mv);

    // rotation matrix
    this.rm = mat4.create();
    mat4.identity(this.rm);
    mat4.rotate(this.rm, this.rm, degToRad(45), [1, 0, 0]); 

    // translation vector
    this.tv = [7, 4, 30];
}

Camera.prototype.vm = function()
{
    var vm = mat4.create();
    mat4.identity(vm);
    mat4.multiply(vm, this.rm, vm);
    mat4.translate(vm, vm, this.tv);
    mat4.invert(vm, vm);
    return vm;
}
