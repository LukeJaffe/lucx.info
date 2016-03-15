import numpy as np
from stl import mesh

# Get the mesh from the stl file
pawn_mesh = mesh.Mesh.from_file('/home/jaffe5/Projects/blender/models/stl/pawn.stl')
rook_mesh = mesh.Mesh.from_file('/home/jaffe5/Projects/blender/models/stl/rook.stl')
knight_mesh = mesh.Mesh.from_file('/home/jaffe5/Projects/blender/models/stl/knight.stl')
bishop_mesh = mesh.Mesh.from_file('/home/jaffe5/Projects/blender/models/stl/bishop.stl')
queen_mesh = mesh.Mesh.from_file('/home/jaffe5/Projects/blender/models/stl/queen.stl')
king_mesh = mesh.Mesh.from_file('/home/jaffe5/Projects/blender/models/stl/king.stl')
board_mesh = mesh.Mesh.from_file('/home/jaffe5/Projects/blender/models/stl/board.stl')

pieces = [
{"mesh":pawn_mesh, "name":"Pawn"},
{"mesh":rook_mesh, "name":"Rook"},
{"mesh":knight_mesh, "name":"Knight"},
{"mesh":bishop_mesh, "name":"Bishop"},
{"mesh":queen_mesh, "name":"Queen"},
{"mesh":king_mesh, "name":"King"},
{"mesh":board_mesh, "name":"Board"}
]

colors = [
(0.910, 0.800, 0.620, 1.0), # WHITE
(0.810, 0.700, 0.520, 1.0), # WHITE_HOVER
(0, 1, 0, 1),               # WHITE_SELECTED
(0.294, 0.176, 0.082, 1.0), # BLACK
(0.394, 0.276, 0.182, 1.0), # BLACK_HOVER
(1, 0, 0, 1)                # BLACK_SELECTED
]

TILE_WIDTH = 2;
NUM_X = 8;
NUM_Y = 8;

def write_vertices(out, mesh, name):
    # Write vertex buffers
    out.write("function Init%sVertices(gl)\n{\n" % name)
    out.write("var buffer = gl.createBuffer();\n")
    out.write("gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n")
    out.write("var vertices =\n") 
    out.write("[\n")
    for triangle in mesh.points:
        for c in triangle:  
            out.write("%f," % c)
    out.write("];\n")
    out.write("gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);\n")
    out.write("buffer.itemSize = 3;\n");
    out.write("buffer.numItems = %d;\n\n" % (len(mesh.points)*3));
    out.write("return buffer;\n") 
    out.write("}\n");

def write_colors(out, mesh, name, colors):
    # Write color buffers
    out.write("function Init%sColors(gl, c)\n{\n" % name)
    out.write("var buffer = gl.createBuffer();\n")
    out.write("gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n")
    out.write("var vertices = [];\n") 
    out.write("switch (c)\n{\n")
    for i,color in enumerate(colors):
        out.write("case %d:\n" % i)
        out.write("vertices =\n") 
        out.write("[\n")
        if name == "Board":
            for j in range(0, len(mesh.points), 12):
                for k in range(j,j+12):
                    for t in range(3):  
                        if j%24 == 0:
                            out.write("%f, %f, %f, %f," % colors[0])
                        else:
                            out.write("%f, %f, %f, %f," % colors[1])
        else:
            for j,triangle in enumerate(mesh.points):
                for i in range(3):  
                    out.write("%f, %f, %f, %f," % color)
        out.write("];\n")
        out.write("break;\n")
    out.write("default: break; }\n")
    out.write("gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);\n")
    out.write("buffer.itemSize = 4;\n");
    out.write("buffer.numItems = %d;\n\n" % (len(mesh.points)*3));
    out.write("return buffer;\n") 
    out.write("}\n");

def write_normals(out, mesh, name):
    # Write vertex buffers
    out.write("function Init%sNormals(gl)\n{\n" % name)
    out.write("var buffer = gl.createBuffer();\n")
    out.write("gl.bindBuffer(gl.ARRAY_BUFFER, buffer);\n")
    out.write("var vertices =\n") 
    out.write("[\n")
    for normal in mesh.normals:
        normal /= np.linalg.norm(normal)
        for i in range(3):  
            out.write("%f, %f, %f," % tuple(normal))
    out.write("];\n")
    out.write("gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);\n")
    out.write("buffer.itemSize = 3;\n");
    out.write("buffer.numItems = %d;\n\n" % (len(mesh.points)*3));
    out.write("return buffer;\n") 
    out.write("}\n");

def write_triangles(out, mesh, name):
    out.write("function Init%sTriangles(triangles)\n{\n" % name)
    out.write("var i = 0;\n")
    for triangle in mesh.points:
        p1 = (triangle[0], triangle[1], triangle[2])
        p2 = (triangle[3], triangle[4], triangle[5])
        p3 = (triangle[6], triangle[7], triangle[8])
        out.write("triangles.push([]);\n")
        out.write("i = triangles.length - 1;\n")
        out.write("triangles[i].push([%f, %f, %f]);\n" % p1)
        out.write("triangles[i].push([%f, %f, %f]);\n" % p2)
        out.write("triangles[i].push([%f, %f, %f]);\n" % p3)
    out.write("}\n");

# Create the javascript initBuffers() function, write it to a file
out = open("/home/jaffe5/Projects/web/chess/verts.js", "wb")

# Write vertex function for each piece
for piece in pieces:
    write_vertices(out, piece["mesh"], piece["name"])

# Write vertex function for each piece
for piece in pieces:
    write_normals(out, piece["mesh"], piece["name"])

# Write color buffers
for piece in pieces:
    write_colors(out, piece["mesh"], piece["name"], colors)
