/* Shader class */
function Shader(gl)
{
    var fragmentShader = this.get(gl, "shader-fs");
    var vertexShader = this.get(gl, "shader-vs");

    this.program = gl.createProgram();
    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) 
    {
        alert("Could not initialise shaders");
    }

    gl.useProgram(this.program);

    this.program.vertexPositionAttribute = gl.getAttribLocation(this.program, "aVertexPosition");
    gl.enableVertexAttribArray(this.program.vertexPositionAttribute);

    this.program.vertexNormalAttribute = gl.getAttribLocation(this.program, "aVertexNormal");
    gl.enableVertexAttribArray(this.program.vertexNormalAttribute);

    this.program.vertexColorAttribute = gl.getAttribLocation(this.program, "aVertexColor");
    gl.enableVertexAttribArray(this.program.vertexColorAttribute);

    this.program.pMatrixUniform = gl.getUniformLocation(this.program, "uPMatrix");
    this.program.mvMatrixUniform = gl.getUniformLocation(this.program, "uMVMatrix");
    this.program.nMatrixUniform = gl.getUniformLocation(this.program, "uNMatrix");
    this.program.useLightingUniform = gl.getUniformLocation(this.program, "uUseLighting");
    this.program.ambientColorUniform = gl.getUniformLocation(this.program, "uAmbientColor");
    this.program.lightingDirectionUniform = gl.getUniformLocation(this.program, "uLightingDirection");
    this.program.directionalColorUniform = gl.getUniformLocation(this.program, "uDirectionalColor");
}

Shader.prototype.get = function(gl, id) 
{
    var shaderScript = document.getElementById(id);
    if (!shaderScript) 
    {
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) 
    {
        if (k.nodeType == 3) 
        {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment") 
    {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } 
    else if (shaderScript.type == "x-shader/x-vertex") 
    {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } 
    else 
    {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) 
    {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}
