/* Shader class */
function Shader(gl)
{
    this.gl = gl;

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

    this.vpa = this.program.vertexPositionAttribute = gl.getAttribLocation(this.program, "aVertexPosition");
    gl.enableVertexAttribArray(this.program.vertexPositionAttribute);

    this.vna = this.program.vertexNormalAttribute = gl.getAttribLocation(this.program, "aVertexNormal");
    gl.enableVertexAttribArray(this.program.vertexNormalAttribute);

    this.vca = this.program.vertexColorAttribute = gl.getAttribLocation(this.program, "aVertexColor");
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

Shader.prototype.draw = function(vertices, normals, colors, method)
{
    // shorten code
    gl = this.gl;

    // vertex buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, vertices);
    gl.vertexAttribPointer(this.vpa, vertices.itemSize, gl.FLOAT, false, 0, 0);

    // normal buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, normals);
    gl.vertexAttribPointer(this.vna, normals.itemSize, gl.FLOAT, false, 0, 0);

    // color buffers
    gl.bindBuffer(gl.ARRAY_BUFFER, colors);
    gl.vertexAttribPointer(this.vca, colors.itemSize, gl.FLOAT, false, 0, 0);

    // lighting
    var lighting = document.getElementById("lighting").checked;
    gl.uniform1i(this.program.useLightingUniform, lighting);
    if (lighting) 
    {
        gl.uniform3f(
            this.program.ambientColorUniform,
            parseFloat(document.getElementById("ambientR").value),
            parseFloat(document.getElementById("ambientG").value),
            parseFloat(document.getElementById("ambientB").value)
        );

        var lightingDirection = [
            parseFloat(document.getElementById("lightDirectionX").value),
            parseFloat(document.getElementById("lightDirectionY").value),
            parseFloat(document.getElementById("lightDirectionZ").value)
        ];
        var adjustedLD = vec3.create();
        vec3.normalize(adjustedLD, lightingDirection);
        vec3.scale(adjustedLD, adjustedLD, -1);
        gl.uniform3fv(this.program.lightingDirectionUniform, adjustedLD);

        gl.uniform3f(
            this.program.directionalColorUniform,
            parseFloat(document.getElementById("directionalR").value),
            parseFloat(document.getElementById("directionalG").value),
            parseFloat(document.getElementById("directionalB").value)
        );
    }

    // draw stuff
    gl.drawArrays(method, 0, vertices.numItems);
}
