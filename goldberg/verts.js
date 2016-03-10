function initFrameBuffers(gl, vertexBuffers)
{
vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.458837, -0.007671, 0.889663,
0.510545, -0.075995, 0.857706,
0.581800, -0.039297, 0.813668,
0.574129, 0.051708, 0.818409,
0.498134, 0.071254, 0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.458837, 0.007671, -0.889663,
0.510545, 0.075995, -0.857706,
0.581800, 0.039297, -0.813668,
0.574129, -0.051708, -0.818409,
0.498134, -0.071254, -0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.458837, 0.007671, 0.889663,
-0.510545, 0.075995, 0.857706,
-0.581800, 0.039297, 0.813668,
-0.574129, -0.051708, 0.818409,
-0.498134, -0.071254, 0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.458837, -0.007671, -0.889663,
-0.510545, -0.075995, -0.857706,
-0.581800, -0.039297, -0.813668,
-0.574129, 0.051708, -0.818409,
-0.498134, 0.071254, -0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.889663, -0.458837, 0.007671,
0.857706, -0.510545, 0.075995,
0.813668, -0.581800, 0.039297,
0.818409, -0.574129, -0.051708,
0.865376, -0.498134, -0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.889663, 0.458837, -0.007671,
0.857706, 0.510545, -0.075995,
0.813668, 0.581800, -0.039297,
0.818409, 0.574129, 0.051708,
0.865376, 0.498134, 0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.889663, 0.458837, 0.007671,
-0.857706, 0.510545, 0.075995,
-0.813668, 0.581800, 0.039297,
-0.818409, 0.574129, -0.051708,
-0.865376, 0.498134, -0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.889663, -0.458837, -0.007671,
-0.857706, -0.510545, -0.075995,
-0.813668, -0.581800, -0.039297,
-0.818409, -0.574129, 0.051708,
-0.865376, -0.498134, 0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.007671, -0.889663, 0.458837,
0.075995, -0.857706, 0.510545,
0.039297, -0.813668, 0.581800,
-0.051708, -0.818409, 0.574129,
-0.071254, -0.865376, 0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.007671, 0.889663, -0.458837,
0.075995, 0.857706, -0.510545,
0.039297, 0.813668, -0.581800,
-0.051708, 0.818409, -0.574129,
-0.071254, 0.865376, -0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.007671, 0.889663, 0.458837,
-0.075995, 0.857706, 0.510545,
-0.039297, 0.813668, 0.581800,
0.051708, 0.818409, 0.574129,
0.071254, 0.865376, 0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.007671, -0.889663, -0.458837,
-0.075995, -0.857706, -0.510545,
-0.039297, -0.813668, -0.581800,
0.051708, -0.818409, -0.574129,
0.071254, -0.865376, -0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, 0.935873,
-0.051465, 0.253243, 0.967907,
0.017129, 0.156873, 0.989292,
0.135828, 0.164667, 0.978757,
0.186862, 0.267263, 0.947199,
0.119955, 0.364061, 0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, 0.935873,
0.119955, 0.364061, 0.925578,
0.170230, 0.460027, 0.873497,
0.101320, 0.548380, 0.832192,
-0.016951, 0.542186, 0.842188,
-0.068490, 0.447333, 0.893771,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, 0.935873,
-0.068490, 0.447333, 0.893771,
-0.187360, 0.432312, 0.884084,
-0.237148, 0.328607, 0.916138,
-0.169912, 0.239836, 0.957675,
-0.051465, 0.253243, 0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, -0.935873,
0.051465, 0.253243, -0.967907,
-0.017129, 0.156873, -0.989292,
-0.135828, 0.164667, -0.978757,
-0.186862, 0.267263, -0.947199,
-0.119955, 0.364061, -0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, -0.935873,
-0.119955, 0.364061, -0.925578,
-0.170230, 0.460027, -0.873497,
-0.101320, 0.548380, -0.832192,
0.016951, 0.542186, -0.842188,
0.068490, 0.447333, -0.893771,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, -0.935873,
0.068490, 0.447333, -0.893771,
0.187360, 0.432312, -0.884084,
0.237148, 0.328607, -0.916138,
0.169912, 0.239836, -0.957675,
0.051465, 0.253243, -0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, 0.935873,
0.051465, -0.253243, 0.967907,
-0.017129, -0.156873, 0.989292,
-0.135828, -0.164667, 0.978757,
-0.186862, -0.267263, 0.947199,
-0.119955, -0.364061, 0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, 0.935873,
-0.119955, -0.364061, 0.925578,
-0.170230, -0.460027, 0.873497,
-0.101320, -0.548380, 0.832192,
0.016951, -0.542186, 0.842188,
0.068490, -0.447333, 0.893771,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, 0.935873,
0.068490, -0.447333, 0.893771,
0.187360, -0.432312, 0.884084,
0.237148, -0.328607, 0.916138,
0.169912, -0.239836, 0.957675,
0.051465, -0.253243, 0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, -0.935873,
-0.051465, -0.253243, -0.967907,
0.017129, -0.156873, -0.989292,
0.135828, -0.164667, -0.978757,
0.186862, -0.267263, -0.947199,
0.119955, -0.364061, -0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, -0.935873,
0.119955, -0.364061, -0.925578,
0.170230, -0.460027, -0.873497,
0.101320, -0.548380, -0.832192,
-0.016951, -0.542186, -0.842188,
-0.068490, -0.447333, -0.893771,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, -0.935873,
-0.068490, -0.447333, -0.893771,
-0.187360, -0.432312, -0.884084,
-0.237148, -0.328607, -0.916138,
-0.169912, -0.239836, -0.957675,
-0.051465, -0.253243, -0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, 0.357472,
0.967907, -0.051465, 0.253243,
0.989292, 0.017129, 0.156873,
0.978757, 0.135828, 0.164667,
0.947199, 0.186862, 0.267263,
0.925578, 0.119955, 0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, 0.357472,
0.925578, 0.119955, 0.364061,
0.873497, 0.170230, 0.460027,
0.832192, 0.101320, 0.548380,
0.842188, -0.016951, 0.542186,
0.893771, -0.068490, 0.447333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, 0.357472,
0.893771, -0.068490, 0.447333,
0.884084, -0.187360, 0.432312,
0.916138, -0.237148, 0.328607,
0.957675, -0.169912, 0.239836,
0.967907, -0.051465, 0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, -0.357472,
0.967907, 0.051465, -0.253243,
0.989292, -0.017129, -0.156873,
0.978757, -0.135828, -0.164667,
0.947199, -0.186862, -0.267263,
0.925578, -0.119955, -0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, -0.357472,
0.925578, -0.119955, -0.364061,
0.873497, -0.170230, -0.460027,
0.832192, -0.101320, -0.548380,
0.842188, 0.016951, -0.542186,
0.893771, 0.068490, -0.447333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, -0.357472,
0.893771, 0.068490, -0.447333,
0.884084, 0.187360, -0.432312,
0.916138, 0.237148, -0.328607,
0.957675, 0.169912, -0.239836,
0.967907, 0.051465, -0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, 0.357472,
-0.967907, 0.051465, 0.253243,
-0.989292, -0.017129, 0.156873,
-0.978757, -0.135828, 0.164667,
-0.947199, -0.186862, 0.267263,
-0.925578, -0.119955, 0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, 0.357472,
-0.925578, -0.119955, 0.364061,
-0.873497, -0.170230, 0.460027,
-0.832192, -0.101320, 0.548380,
-0.842188, 0.016951, 0.542186,
-0.893771, 0.068490, 0.447333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, 0.357472,
-0.893771, 0.068490, 0.447333,
-0.884084, 0.187360, 0.432312,
-0.916138, 0.237148, 0.328607,
-0.957675, 0.169912, 0.239836,
-0.967907, 0.051465, 0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, -0.357472,
-0.967907, -0.051465, -0.253243,
-0.989292, 0.017129, -0.156873,
-0.978757, 0.135828, -0.164667,
-0.947199, 0.186862, -0.267263,
-0.925578, 0.119955, -0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, -0.357472,
-0.925578, 0.119955, -0.364061,
-0.873497, 0.170230, -0.460027,
-0.832192, 0.101320, -0.548380,
-0.842188, -0.016951, -0.542186,
-0.893771, -0.068490, -0.447333,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, -0.357472,
-0.893771, -0.068490, -0.447333,
-0.884084, -0.187360, -0.432312,
-0.916138, -0.237148, -0.328607,
-0.957675, -0.169912, -0.239836,
-0.967907, -0.051465, -0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, 0.935873, 0.000000,
0.253243, 0.967907, -0.051465,
0.156873, 0.989292, 0.017129,
0.164667, 0.978757, 0.135828,
0.267263, 0.947199, 0.186862,
0.364061, 0.925578, 0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, 0.935873, 0.000000,
0.364061, 0.925578, 0.119955,
0.460027, 0.873497, 0.170230,
0.548380, 0.832192, 0.101320,
0.542186, 0.842188, -0.016951,
0.447333, 0.893771, -0.068490,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, 0.935873, 0.000000,
0.447333, 0.893771, -0.068490,
0.432312, 0.884084, -0.187360,
0.328607, 0.916138, -0.237148,
0.239836, 0.957675, -0.169912,
0.253243, 0.967907, -0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, -0.935873, 0.000000,
0.253243, -0.967907, 0.051465,
0.156873, -0.989292, -0.017129,
0.164667, -0.978757, -0.135828,
0.267263, -0.947199, -0.186862,
0.364061, -0.925578, -0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, -0.935873, 0.000000,
0.364061, -0.925578, -0.119955,
0.460027, -0.873497, -0.170230,
0.548380, -0.832192, -0.101320,
0.542186, -0.842188, 0.016951,
0.447333, -0.893771, 0.068490,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, -0.935873, 0.000000,
0.447333, -0.893771, 0.068490,
0.432312, -0.884084, 0.187360,
0.328607, -0.916138, 0.237148,
0.239836, -0.957675, 0.169912,
0.253243, -0.967907, 0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, 0.935873, 0.000000,
-0.253243, 0.967907, 0.051465,
-0.156873, 0.989292, -0.017129,
-0.164667, 0.978757, -0.135828,
-0.267263, 0.947199, -0.186862,
-0.364061, 0.925578, -0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, 0.935873, 0.000000,
-0.364061, 0.925578, -0.119955,
-0.460027, 0.873497, -0.170230,
-0.548380, 0.832192, -0.101320,
-0.542186, 0.842188, 0.016951,
-0.447333, 0.893771, 0.068490,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, 0.935873, 0.000000,
-0.447333, 0.893771, 0.068490,
-0.432312, 0.884084, 0.187360,
-0.328607, 0.916138, 0.237148,
-0.239836, 0.957675, 0.169912,
-0.253243, 0.967907, 0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, -0.935873, 0.000000,
-0.253243, -0.967907, -0.051465,
-0.156873, -0.989292, 0.017129,
-0.164667, -0.978757, 0.135828,
-0.267263, -0.947199, 0.186862,
-0.364061, -0.925578, 0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, -0.935873, 0.000000,
-0.364061, -0.925578, 0.119955,
-0.460027, -0.873497, 0.170230,
-0.548380, -0.832192, 0.101320,
-0.542186, -0.842188, -0.016951,
-0.447333, -0.893771, -0.068490,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, -0.935873, 0.000000,
-0.447333, -0.893771, -0.068490,
-0.432312, -0.884084, -0.187360,
-0.328607, -0.916138, -0.237148,
-0.239836, -0.957675, -0.169912,
-0.253243, -0.967907, -0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, 0.578402,
0.478245, 0.603846, 0.640528,
0.441186, 0.529264, 0.727210,
0.503585, 0.430377, 0.751471,
0.602352, 0.405013, 0.690412,
0.640528, 0.478245, 0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, 0.578402,
0.640528, 0.478245, 0.603846,
0.727210, 0.441186, 0.529264,
0.751471, 0.503585, 0.430377,
0.690412, 0.602352, 0.405013,
0.603846, 0.640528, 0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, 0.578402,
0.603846, 0.640528, 0.478245,
0.529264, 0.727210, 0.441186,
0.430377, 0.751471, 0.503585,
0.405013, 0.690412, 0.602352,
0.478245, 0.603846, 0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, -0.578402,
0.529710, 0.520574, -0.672335,
0.424056, 0.556980, -0.716624,
0.367757, 0.650150, -0.667525,
0.415490, 0.707363, -0.574925,
0.520574, 0.672335, -0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, -0.578402,
0.520574, 0.672335, -0.529710,
0.556980, 0.716624, -0.424056,
0.650150, 0.667525, -0.367757,
0.707363, 0.574925, -0.415490,
0.672335, 0.529710, -0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, -0.578402,
0.672335, 0.529710, -0.520574,
0.716624, 0.424056, -0.556980,
0.667525, 0.367757, -0.650150,
0.574925, 0.415490, -0.707363,
0.529710, 0.520574, -0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, 0.578402,
0.529710, -0.520574, 0.672335,
0.424056, -0.556980, 0.716624,
0.367757, -0.650150, 0.667525,
0.415490, -0.707363, 0.574925,
0.520574, -0.672335, 0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, 0.578402,
0.520574, -0.672335, 0.529710,
0.556980, -0.716624, 0.424056,
0.650150, -0.667525, 0.367757,
0.707363, -0.574925, 0.415490,
0.672335, -0.529710, 0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, 0.578402,
0.672335, -0.529710, 0.520574,
0.716624, -0.424056, 0.556980,
0.667525, -0.367757, 0.650150,
0.574925, -0.415490, 0.707363,
0.529710, -0.520574, 0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, -0.578402,
0.478245, -0.603846, -0.640528,
0.441186, -0.529264, -0.727210,
0.503585, -0.430377, -0.751471,
0.602352, -0.405013, -0.690412,
0.640528, -0.478245, -0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, -0.578402,
0.640528, -0.478245, -0.603846,
0.727210, -0.441186, -0.529264,
0.751471, -0.503585, -0.430377,
0.690412, -0.602352, -0.405013,
0.603846, -0.640528, -0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, -0.578402,
0.603846, -0.640528, -0.478245,
0.529264, -0.727210, -0.441186,
0.430377, -0.751471, -0.503585,
0.405013, -0.690412, -0.602352,
0.478245, -0.603846, -0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, 0.578402,
-0.529710, 0.520574, 0.672335,
-0.424056, 0.556980, 0.716624,
-0.367757, 0.650150, 0.667525,
-0.415490, 0.707363, 0.574925,
-0.520574, 0.672335, 0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, 0.578402,
-0.520574, 0.672335, 0.529710,
-0.556980, 0.716624, 0.424056,
-0.650150, 0.667525, 0.367757,
-0.707363, 0.574925, 0.415490,
-0.672335, 0.529710, 0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, 0.578402,
-0.672335, 0.529710, 0.520574,
-0.716624, 0.424056, 0.556980,
-0.667525, 0.367757, 0.650150,
-0.574925, 0.415490, 0.707363,
-0.529710, 0.520574, 0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, -0.578402,
-0.478245, 0.603846, -0.640528,
-0.441186, 0.529264, -0.727210,
-0.503585, 0.430377, -0.751471,
-0.602352, 0.405013, -0.690412,
-0.640528, 0.478245, -0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, -0.578402,
-0.640528, 0.478245, -0.603846,
-0.727210, 0.441186, -0.529264,
-0.751471, 0.503585, -0.430377,
-0.690412, 0.602352, -0.405013,
-0.603846, 0.640528, -0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, -0.578402,
-0.603846, 0.640528, -0.478245,
-0.529264, 0.727210, -0.441186,
-0.430377, 0.751471, -0.503585,
-0.405013, 0.690412, -0.602352,
-0.478245, 0.603846, -0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, 0.578402,
-0.478245, -0.603846, 0.640528,
-0.441186, -0.529264, 0.727210,
-0.503585, -0.430377, 0.751471,
-0.602352, -0.405013, 0.690412,
-0.640528, -0.478245, 0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, 0.578402,
-0.640528, -0.478245, 0.603846,
-0.727210, -0.441186, 0.529264,
-0.751471, -0.503585, 0.430377,
-0.690412, -0.602352, 0.405013,
-0.603846, -0.640528, 0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, 0.578402,
-0.603846, -0.640528, 0.478245,
-0.529264, -0.727210, 0.441186,
-0.430377, -0.751471, 0.503585,
-0.405013, -0.690412, 0.602352,
-0.478245, -0.603846, 0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, -0.578402,
-0.529710, -0.520574, -0.672335,
-0.424056, -0.556980, -0.716624,
-0.367757, -0.650150, -0.667525,
-0.415490, -0.707363, -0.574925,
-0.520574, -0.672335, -0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, -0.578402,
-0.520574, -0.672335, -0.529710,
-0.556980, -0.716624, -0.424056,
-0.650150, -0.667525, -0.367757,
-0.707363, -0.574925, -0.415490,
-0.672335, -0.529710, -0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, -0.578402,
-0.672335, -0.529710, -0.520574,
-0.716624, -0.424056, -0.556980,
-0.667525, -0.367757, -0.650150,
-0.574925, -0.415490, -0.707363,
-0.529710, -0.520574, -0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.311064, 0.072893, 0.949214,
0.369144, -0.017371, 0.930743,
0.458837, -0.007671, 0.889663,
0.498134, 0.071254, 0.865376,
0.458134, 0.161360, 0.875744,
0.358769, 0.168707, 0.919731,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.311064, -0.072893, -0.949214,
0.369144, 0.017371, -0.930743,
0.458837, 0.007671, -0.889663,
0.498134, -0.071254, -0.865376,
0.458134, -0.161360, -0.875744,
0.358769, -0.168707, -0.919731,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.311064, -0.072893, 0.949214,
-0.369144, 0.017371, 0.930743,
-0.458837, 0.007671, 0.889663,
-0.498134, -0.071254, 0.865376,
-0.458134, -0.161360, 0.875744,
-0.358769, -0.168707, 0.919731,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.311064, 0.072893, -0.949214,
-0.369144, -0.017371, -0.930743,
-0.458837, -0.007671, -0.889663,
-0.498134, 0.071254, -0.865376,
-0.458134, 0.161360, -0.875744,
-0.358769, 0.168707, -0.919731,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.949214, 0.311064, 0.072893,
0.930743, 0.369144, -0.017371,
0.889663, 0.458837, -0.007671,
0.865376, 0.498134, 0.071254,
0.875744, 0.458134, 0.161360,
0.919731, 0.358769, 0.168707,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.949214, -0.311064, -0.072893,
0.930743, -0.369144, 0.017371,
0.889663, -0.458837, 0.007671,
0.865376, -0.498134, -0.071254,
0.875744, -0.458134, -0.161360,
0.919731, -0.358769, -0.168707,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.949214, -0.311064, 0.072893,
-0.930743, -0.369144, -0.017371,
-0.889663, -0.458837, -0.007671,
-0.865376, -0.498134, 0.071254,
-0.875744, -0.458134, 0.161360,
-0.919731, -0.358769, 0.168707,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.949214, 0.311064, -0.072893,
-0.930743, 0.369144, 0.017371,
-0.889663, 0.458837, 0.007671,
-0.865376, 0.498134, -0.071254,
-0.875744, 0.458134, -0.161360,
-0.919731, 0.358769, -0.168707,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.072893, 0.949214, 0.311064,
-0.017371, 0.930743, 0.369144,
-0.007671, 0.889663, 0.458837,
0.071254, 0.865376, 0.498134,
0.161360, 0.875744, 0.458134,
0.168707, 0.919731, 0.358769,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.072893, -0.949214, -0.311064,
-0.017371, -0.930743, -0.369144,
-0.007671, -0.889663, -0.458837,
0.071254, -0.865376, -0.498134,
0.161360, -0.875744, -0.458134,
0.168707, -0.919731, -0.358769,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.072893, -0.949214, 0.311064,
0.017371, -0.930743, 0.369144,
0.007671, -0.889663, 0.458837,
-0.071254, -0.865376, 0.498134,
-0.161360, -0.875744, 0.458134,
-0.168707, -0.919731, 0.358769,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.072893, 0.949214, -0.311064,
0.017371, 0.930743, -0.369144,
0.007671, 0.889663, -0.458837,
-0.071254, 0.865376, -0.498134,
-0.161360, 0.875744, -0.458134,
-0.168707, 0.919731, -0.358769,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.327110, -0.117482, 0.939297,
0.389883, -0.200426, 0.900501,
0.486241, -0.172096, 0.858373,
0.510545, -0.075995, 0.857706,
0.458837, -0.007671, 0.889663,
0.369144, -0.017371, 0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.327110, 0.117482, -0.939297,
0.389883, 0.200426, -0.900501,
0.486241, 0.172096, -0.858373,
0.510545, 0.075995, -0.857706,
0.458837, 0.007671, -0.889663,
0.369144, 0.017371, -0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.327110, 0.117482, 0.939297,
-0.389883, 0.200426, 0.900501,
-0.486241, 0.172096, 0.858373,
-0.510545, 0.075995, 0.857706,
-0.458837, 0.007671, 0.889663,
-0.369144, 0.017371, 0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.327110, -0.117482, -0.939297,
-0.389883, -0.200426, -0.900501,
-0.486241, -0.172096, -0.858373,
-0.510545, -0.075995, -0.857706,
-0.458837, -0.007671, -0.889663,
-0.369144, -0.017371, -0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.939297, -0.327110, 0.117482,
0.900501, -0.389883, 0.200426,
0.858373, -0.486241, 0.172096,
0.857706, -0.510545, 0.075995,
0.889663, -0.458837, 0.007671,
0.930743, -0.369144, 0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.939297, 0.327110, -0.117482,
0.900501, 0.389883, -0.200426,
0.858373, 0.486241, -0.172096,
0.857706, 0.510545, -0.075995,
0.889663, 0.458837, -0.007671,
0.930743, 0.369144, -0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.939297, 0.327110, 0.117482,
-0.900501, 0.389883, 0.200426,
-0.858373, 0.486241, 0.172096,
-0.857706, 0.510545, 0.075995,
-0.889663, 0.458837, 0.007671,
-0.930743, 0.369144, 0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.939297, -0.327110, -0.117482,
-0.900501, -0.389883, -0.200426,
-0.858373, -0.486241, -0.172096,
-0.857706, -0.510545, -0.075995,
-0.889663, -0.458837, -0.007671,
-0.930743, -0.369144, -0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.117482, -0.939297, 0.327110,
0.200426, -0.900501, 0.389883,
0.172096, -0.858373, 0.486241,
0.075995, -0.857706, 0.510545,
0.007671, -0.889663, 0.458837,
0.017371, -0.930743, 0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.117482, 0.939297, -0.327110,
0.200426, 0.900501, -0.389883,
0.172096, 0.858373, -0.486241,
0.075995, 0.857706, -0.510545,
0.007671, 0.889663, -0.458837,
0.017371, 0.930743, -0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.117482, 0.939297, 0.327110,
-0.200426, 0.900501, 0.389883,
-0.172096, 0.858373, 0.486241,
-0.075995, 0.857706, 0.510545,
-0.007671, 0.889663, 0.458837,
-0.017371, 0.930743, 0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.117482, -0.939297, -0.327110,
-0.200426, -0.900501, -0.389883,
-0.172096, -0.858373, -0.486241,
-0.075995, -0.857706, -0.510545,
-0.007671, -0.889663, -0.458837,
-0.017371, -0.930743, -0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, 0.245477, 0.827608,
0.458134, 0.161360, 0.875744,
0.498134, 0.071254, 0.865376,
0.574129, 0.051708, 0.818409,
0.630230, 0.117097, 0.769383,
0.600083, 0.221748, 0.770590,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, -0.245477, -0.827608,
0.458134, -0.161360, -0.875744,
0.498134, -0.071254, -0.865376,
0.574129, -0.051708, -0.818409,
0.630230, -0.117097, -0.769383,
0.600083, -0.221748, -0.770590,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, -0.245477, 0.827608,
-0.458134, -0.161360, 0.875744,
-0.498134, -0.071254, 0.865376,
-0.574129, -0.051708, 0.818409,
-0.630230, -0.117097, 0.769383,
-0.600083, -0.221748, 0.770590,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, 0.245477, -0.827608,
-0.458134, 0.161360, -0.875744,
-0.498134, 0.071254, -0.865376,
-0.574129, 0.051708, -0.818409,
-0.630230, 0.117097, -0.769383,
-0.600083, 0.221748, -0.770590,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, 0.507827, 0.245477,
0.875744, 0.458134, 0.161360,
0.865376, 0.498134, 0.071254,
0.818409, 0.574129, 0.051708,
0.769383, 0.630230, 0.117097,
0.770590, 0.600083, 0.221748,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, -0.507827, -0.245477,
0.875744, -0.458134, -0.161360,
0.865376, -0.498134, -0.071254,
0.818409, -0.574129, -0.051708,
0.769383, -0.630230, -0.117097,
0.770590, -0.600083, -0.221748,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, -0.507827, 0.245477,
-0.875744, -0.458134, 0.161360,
-0.865376, -0.498134, 0.071254,
-0.818409, -0.574129, 0.051708,
-0.769383, -0.630230, 0.117097,
-0.770590, -0.600083, 0.221748,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, 0.507827, -0.245477,
-0.875744, 0.458134, -0.161360,
-0.865376, 0.498134, -0.071254,
-0.818409, 0.574129, -0.051708,
-0.769383, 0.630230, -0.117097,
-0.770590, 0.600083, -0.221748,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, 0.827608, 0.507827,
0.161360, 0.875744, 0.458134,
0.071254, 0.865376, 0.498134,
0.051708, 0.818409, 0.574129,
0.117097, 0.769383, 0.630230,
0.221748, 0.770590, 0.600083,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, -0.827608, -0.507827,
0.161360, -0.875744, -0.458134,
0.071254, -0.865376, -0.498134,
0.051708, -0.818409, -0.574129,
0.117097, -0.769383, -0.630230,
0.221748, -0.770590, -0.600083,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, -0.827608, 0.507827,
-0.161360, -0.875744, 0.458134,
-0.071254, -0.865376, 0.498134,
-0.051708, -0.818409, 0.574129,
-0.117097, -0.769383, 0.630230,
-0.221748, -0.770590, 0.600083,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, 0.827608, -0.507827,
-0.161360, 0.875744, -0.458134,
-0.071254, 0.865376, -0.498134,
-0.051708, 0.818409, -0.574129,
-0.117097, 0.769383, -0.630230,
-0.221748, 0.770590, -0.600083,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, -0.241314, 0.802249,
0.635360, -0.196763, 0.748788,
0.647601, -0.088990, 0.758647,
0.581800, -0.039297, 0.813668,
0.510545, -0.075995, 0.857706,
0.486241, -0.172096, 0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, 0.241314, -0.802249,
0.635360, 0.196763, -0.748788,
0.647601, 0.088990, -0.758647,
0.581800, 0.039297, -0.813668,
0.510545, 0.075995, -0.857706,
0.486241, 0.172096, -0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, 0.241314, 0.802249,
-0.635360, 0.196763, 0.748788,
-0.647601, 0.088990, 0.758647,
-0.581800, 0.039297, 0.813668,
-0.510545, 0.075995, 0.857706,
-0.486241, 0.172096, 0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, -0.241314, -0.802249,
-0.635360, -0.196763, -0.748788,
-0.647601, -0.088990, -0.758647,
-0.581800, -0.039297, -0.813668,
-0.510545, -0.075995, -0.857706,
-0.486241, -0.172096, -0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, -0.548859, 0.241314,
0.748788, -0.635360, 0.196763,
0.758647, -0.647601, 0.088990,
0.813668, -0.581800, 0.039297,
0.857706, -0.510545, 0.075995,
0.858373, -0.486241, 0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, 0.548859, -0.241314,
0.748788, 0.635360, -0.196763,
0.758647, 0.647601, -0.088990,
0.813668, 0.581800, -0.039297,
0.857706, 0.510545, -0.075995,
0.858373, 0.486241, -0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, 0.548859, 0.241314,
-0.748788, 0.635360, 0.196763,
-0.758647, 0.647601, 0.088990,
-0.813668, 0.581800, 0.039297,
-0.857706, 0.510545, 0.075995,
-0.858373, 0.486241, 0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, -0.548859, -0.241314,
-0.748788, -0.635360, -0.196763,
-0.758647, -0.647601, -0.088990,
-0.813668, -0.581800, -0.039297,
-0.857706, -0.510545, -0.075995,
-0.858373, -0.486241, -0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, -0.802249, 0.548859,
0.196763, -0.748788, 0.635360,
0.088990, -0.758647, 0.647601,
0.039297, -0.813668, 0.581800,
0.075995, -0.857706, 0.510545,
0.172096, -0.858373, 0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, 0.802249, -0.548859,
0.196763, 0.748788, -0.635360,
0.088990, 0.758647, -0.647601,
0.039297, 0.813668, -0.581800,
0.075995, 0.857706, -0.510545,
0.172096, 0.858373, -0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, 0.802249, 0.548859,
-0.196763, 0.748788, 0.635360,
-0.088990, 0.758647, 0.647601,
-0.039297, 0.813668, 0.581800,
-0.075995, 0.857706, 0.510545,
-0.172096, 0.858373, 0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, -0.802249, -0.548859,
-0.196763, -0.748788, -0.635360,
-0.088990, -0.758647, -0.647601,
-0.039297, -0.813668, -0.581800,
-0.075995, -0.857706, -0.510545,
-0.172096, -0.858373, -0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.031659, -0.697982, 0.717565,
-0.078820, -0.703738, 0.708253,
-0.117097, -0.769383, 0.630230,
-0.051708, -0.818409, 0.574129,
0.039297, -0.813668, 0.581800,
0.088990, -0.758647, 0.647601,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.031659, 0.697982, -0.717565,
-0.078820, 0.703738, -0.708253,
-0.117097, 0.769383, -0.630230,
-0.051708, 0.818409, -0.574129,
0.039297, 0.813668, -0.581800,
0.088990, 0.758647, -0.647601,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.031659, 0.697982, 0.717565,
0.078820, 0.703738, 0.708253,
0.117097, 0.769383, 0.630230,
0.051708, 0.818409, 0.574129,
-0.039297, 0.813668, 0.581800,
-0.088990, 0.758647, 0.647601,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.031659, -0.697982, -0.717565,
0.078820, -0.703738, -0.708253,
0.117097, -0.769383, -0.630230,
0.051708, -0.818409, -0.574129,
-0.039297, -0.813668, -0.581800,
-0.088990, -0.758647, -0.647601,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.717565, -0.031659, 0.697982,
0.708253, 0.078820, 0.703738,
0.630230, 0.117097, 0.769383,
0.574129, 0.051708, 0.818409,
0.581800, -0.039297, 0.813668,
0.647601, -0.088990, 0.758647,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.717565, 0.031659, -0.697982,
0.708253, -0.078820, -0.703738,
0.630230, -0.117097, -0.769383,
0.574129, -0.051708, -0.818409,
0.581800, 0.039297, -0.813668,
0.647601, 0.088990, -0.758647,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.717565, 0.031659, 0.697982,
-0.708253, -0.078820, 0.703738,
-0.630230, -0.117097, 0.769383,
-0.574129, -0.051708, 0.818409,
-0.581800, 0.039297, 0.813668,
-0.647601, 0.088990, 0.758647,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.717565, -0.031659, -0.697982,
-0.708253, 0.078820, -0.703738,
-0.630230, 0.117097, -0.769383,
-0.574129, 0.051708, -0.818409,
-0.581800, -0.039297, -0.813668,
-0.647601, -0.088990, -0.758647,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.697982, -0.717565, 0.031659,
0.703738, -0.708253, -0.078820,
0.769383, -0.630230, -0.117097,
0.818409, -0.574129, -0.051708,
0.813668, -0.581800, 0.039297,
0.758647, -0.647601, 0.088990,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.697982, 0.717565, -0.031659,
0.703738, 0.708253, 0.078820,
0.769383, 0.630230, 0.117097,
0.818409, 0.574129, 0.051708,
0.813668, 0.581800, -0.039297,
0.758647, 0.647601, -0.088990,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.697982, 0.717565, 0.031659,
-0.703738, 0.708253, -0.078820,
-0.769383, 0.630230, -0.117097,
-0.818409, 0.574129, -0.051708,
-0.813668, 0.581800, 0.039297,
-0.758647, 0.647601, 0.088990,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.697982, -0.717565, -0.031659,
-0.703738, -0.708253, 0.078820,
-0.769383, -0.630230, 0.117097,
-0.818409, -0.574129, 0.051708,
-0.813668, -0.581800, -0.039297,
-0.758647, -0.647601, -0.088990,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, -0.038720, 0.989394,
0.218219, -0.133007, 0.968550,
0.327110, -0.117482, 0.939297,
0.369144, -0.017371, 0.930743,
0.311064, 0.072893, 0.949214,
0.201390, 0.066921, 0.978959,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, 0.038720, -0.989394,
0.218219, 0.133007, -0.968550,
0.327110, 0.117482, -0.939297,
0.369144, 0.017371, -0.930743,
0.311064, -0.072893, -0.949214,
0.201390, -0.066921, -0.978959,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, 0.038720, 0.989394,
-0.218219, 0.133007, 0.968550,
-0.327110, 0.117482, 0.939297,
-0.369144, 0.017371, 0.930743,
-0.311064, -0.072893, 0.949214,
-0.201390, -0.066921, 0.978959,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, -0.038720, -0.989394,
-0.218219, -0.133007, -0.968550,
-0.327110, -0.117482, -0.939297,
-0.369144, -0.017371, -0.930743,
-0.311064, 0.072893, -0.949214,
-0.201390, 0.066921, -0.978959,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, -0.151867, 0.038720,
0.968550, -0.218219, 0.133007,
0.939297, -0.327110, 0.117482,
0.930743, -0.369144, 0.017371,
0.949214, -0.311064, -0.072893,
0.978959, -0.201390, -0.066921,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, 0.151867, -0.038720,
0.968550, 0.218219, -0.133007,
0.939297, 0.327110, -0.117482,
0.930743, 0.369144, -0.017371,
0.949214, 0.311064, 0.072893,
0.978959, 0.201390, 0.066921,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, 0.151867, 0.038720,
-0.968550, 0.218219, 0.133007,
-0.939297, 0.327110, 0.117482,
-0.930743, 0.369144, 0.017371,
-0.949214, 0.311064, -0.072893,
-0.978959, 0.201390, -0.066921,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, -0.151867, -0.038720,
-0.968550, -0.218219, -0.133007,
-0.939297, -0.327110, -0.117482,
-0.930743, -0.369144, -0.017371,
-0.949214, -0.311064, 0.072893,
-0.978959, -0.201390, 0.066921,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, -0.989394, 0.151867,
0.133007, -0.968550, 0.218219,
0.117482, -0.939297, 0.327110,
0.017371, -0.930743, 0.369144,
-0.072893, -0.949214, 0.311064,
-0.066921, -0.978959, 0.201390,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, 0.989394, -0.151867,
0.133007, 0.968550, -0.218219,
0.117482, 0.939297, -0.327110,
0.017371, 0.930743, -0.369144,
-0.072893, 0.949214, -0.311064,
-0.066921, 0.978959, -0.201390,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, 0.989394, 0.151867,
-0.133007, 0.968550, 0.218219,
-0.117482, 0.939297, 0.327110,
-0.017371, 0.930743, 0.369144,
0.072893, 0.949214, 0.311064,
0.066921, 0.978959, 0.201390,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, -0.989394, -0.151867,
-0.133007, -0.968550, -0.218219,
-0.117482, -0.939297, -0.327110,
-0.017371, -0.930743, -0.369144,
0.072893, -0.949214, -0.311064,
0.066921, -0.978959, -0.201390,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.358769, 0.168707, 0.919731,
0.458134, 0.161360, 0.875744,
0.507827, 0.245477, 0.827608,
0.457350, 0.347231, 0.820767,
0.350348, 0.359869, 0.866726,
0.300802, 0.266631, 0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.358769, -0.168707, -0.919731,
0.458134, -0.161360, -0.875744,
0.507827, -0.245477, -0.827608,
0.457350, -0.347231, -0.820767,
0.350348, -0.359869, -0.866726,
0.300802, -0.266631, -0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.358769, -0.168707, 0.919731,
-0.458134, -0.161360, 0.875744,
-0.507827, -0.245477, 0.827608,
-0.457350, -0.347231, 0.820767,
-0.350348, -0.359869, 0.866726,
-0.300802, -0.266631, 0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.358769, 0.168707, -0.919731,
-0.458134, 0.161360, -0.875744,
-0.507827, 0.245477, -0.827608,
-0.457350, 0.347231, -0.820767,
-0.350348, 0.359869, -0.866726,
-0.300802, 0.266631, -0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.919731, 0.358769, 0.168707,
0.875744, 0.458134, 0.161360,
0.827608, 0.507827, 0.245477,
0.820767, 0.457350, 0.347231,
0.866726, 0.350348, 0.359869,
0.917511, 0.300802, 0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.919731, -0.358769, -0.168707,
0.875744, -0.458134, -0.161360,
0.827608, -0.507827, -0.245477,
0.820767, -0.457350, -0.347231,
0.866726, -0.350348, -0.359869,
0.917511, -0.300802, -0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.919731, -0.358769, 0.168707,
-0.875744, -0.458134, 0.161360,
-0.827608, -0.507827, 0.245477,
-0.820767, -0.457350, 0.347231,
-0.866726, -0.350348, 0.359869,
-0.917511, -0.300802, 0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.919731, 0.358769, -0.168707,
-0.875744, 0.458134, -0.161360,
-0.827608, 0.507827, -0.245477,
-0.820767, 0.457350, -0.347231,
-0.866726, 0.350348, -0.359869,
-0.917511, 0.300802, -0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.168707, 0.919731, 0.358769,
0.161360, 0.875744, 0.458134,
0.245477, 0.827608, 0.507827,
0.347231, 0.820767, 0.457350,
0.359869, 0.866726, 0.350348,
0.266631, 0.917511, 0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.168707, -0.919731, -0.358769,
0.161360, -0.875744, -0.458134,
0.245477, -0.827608, -0.507827,
0.347231, -0.820767, -0.457350,
0.359869, -0.866726, -0.350348,
0.266631, -0.917511, -0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.168707, -0.919731, 0.358769,
-0.161360, -0.875744, 0.458134,
-0.245477, -0.827608, 0.507827,
-0.347231, -0.820767, 0.457350,
-0.359869, -0.866726, 0.350348,
-0.266631, -0.917511, 0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.168707, 0.919731, -0.358769,
-0.161360, 0.875744, -0.458134,
-0.245477, 0.827608, -0.507827,
-0.347231, 0.820767, -0.457350,
-0.359869, 0.866726, -0.350348,
-0.266631, 0.917511, -0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.389883, -0.200426, 0.900501,
0.349069, -0.305872, 0.887688,
0.412998, -0.383799, 0.828006,
0.516013, -0.348834, 0.784503,
0.548859, -0.241314, 0.802249,
0.486241, -0.172096, 0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.389883, 0.200426, -0.900501,
0.349069, 0.305872, -0.887688,
0.412998, 0.383799, -0.828006,
0.516013, 0.348834, -0.784503,
0.548859, 0.241314, -0.802249,
0.486241, 0.172096, -0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.389883, 0.200426, 0.900501,
-0.349069, 0.305872, 0.887688,
-0.412998, 0.383799, 0.828006,
-0.516013, 0.348834, 0.784503,
-0.548859, 0.241314, 0.802249,
-0.486241, 0.172096, 0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.389883, -0.200426, -0.900501,
-0.349069, -0.305872, -0.887688,
-0.412998, -0.383799, -0.828006,
-0.516013, -0.348834, -0.784503,
-0.548859, -0.241314, -0.802249,
-0.486241, -0.172096, -0.858373,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.900501, -0.389883, 0.200426,
0.887688, -0.349069, 0.305872,
0.828006, -0.412998, 0.383799,
0.784503, -0.516013, 0.348834,
0.802249, -0.548859, 0.241314,
0.858373, -0.486241, 0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.900501, 0.389883, -0.200426,
0.887688, 0.349069, -0.305872,
0.828006, 0.412998, -0.383799,
0.784503, 0.516013, -0.348834,
0.802249, 0.548859, -0.241314,
0.858373, 0.486241, -0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.900501, 0.389883, 0.200426,
-0.887688, 0.349069, 0.305872,
-0.828006, 0.412998, 0.383799,
-0.784503, 0.516013, 0.348834,
-0.802249, 0.548859, 0.241314,
-0.858373, 0.486241, 0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.900501, -0.389883, -0.200426,
-0.887688, -0.349069, -0.305872,
-0.828006, -0.412998, -0.383799,
-0.784503, -0.516013, -0.348834,
-0.802249, -0.548859, -0.241314,
-0.858373, -0.486241, -0.172096,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.200426, -0.900501, 0.389883,
0.305872, -0.887688, 0.349069,
0.383799, -0.828006, 0.412998,
0.348834, -0.784503, 0.516013,
0.241314, -0.802249, 0.548859,
0.172096, -0.858373, 0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.200426, 0.900501, -0.389883,
0.305872, 0.887688, -0.349069,
0.383799, 0.828006, -0.412998,
0.348834, 0.784503, -0.516013,
0.241314, 0.802249, -0.548859,
0.172096, 0.858373, -0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.200426, 0.900501, 0.389883,
-0.305872, 0.887688, 0.349069,
-0.383799, 0.828006, 0.412998,
-0.348834, 0.784503, 0.516013,
-0.241314, 0.802249, 0.548859,
-0.172096, 0.858373, 0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.200426, -0.900501, -0.389883,
-0.305872, -0.887688, -0.349069,
-0.383799, -0.828006, -0.412998,
-0.348834, -0.784503, -0.516013,
-0.241314, -0.802249, -0.548859,
-0.172096, -0.858373, -0.486241,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.082584, -0.619716, 0.782644,
0.031659, -0.697982, 0.717565,
0.088990, -0.758647, 0.647601,
0.196763, -0.748788, 0.635360,
0.255961, -0.673087, 0.696301,
0.198481, -0.605595, 0.772867,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.082584, 0.619716, -0.782644,
0.031659, 0.697982, -0.717565,
0.088990, 0.758647, -0.647601,
0.196763, 0.748788, -0.635360,
0.255961, 0.673087, -0.696301,
0.198481, 0.605595, -0.772867,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.082584, 0.619716, 0.782644,
-0.031659, 0.697982, 0.717565,
-0.088990, 0.758647, 0.647601,
-0.196763, 0.748788, 0.635360,
-0.255961, 0.673087, 0.696301,
-0.198481, 0.605595, 0.772867,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.082584, -0.619716, -0.782644,
-0.031659, -0.697982, -0.717565,
-0.088990, -0.758647, -0.647601,
-0.196763, -0.748788, -0.635360,
-0.255961, -0.673087, -0.696301,
-0.198481, -0.605595, -0.772867,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.782644, -0.082584, 0.619716,
0.717565, -0.031659, 0.697982,
0.647601, -0.088990, 0.758647,
0.635360, -0.196763, 0.748788,
0.696301, -0.255961, 0.673087,
0.772867, -0.198481, 0.605595,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.782644, 0.082584, -0.619716,
0.717565, 0.031659, -0.697982,
0.647601, 0.088990, -0.758647,
0.635360, 0.196763, -0.748788,
0.696301, 0.255961, -0.673087,
0.772867, 0.198481, -0.605595,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.782644, 0.082584, 0.619716,
-0.717565, 0.031659, 0.697982,
-0.647601, 0.088990, 0.758647,
-0.635360, 0.196763, 0.748788,
-0.696301, 0.255961, 0.673087,
-0.772867, 0.198481, 0.605595,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.782644, -0.082584, -0.619716,
-0.717565, -0.031659, -0.697982,
-0.647601, -0.088990, -0.758647,
-0.635360, -0.196763, -0.748788,
-0.696301, -0.255961, -0.673087,
-0.772867, -0.198481, -0.605595,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.619716, -0.782644, 0.082584,
0.697982, -0.717565, 0.031659,
0.758647, -0.647601, 0.088990,
0.748788, -0.635360, 0.196763,
0.673087, -0.696301, 0.255961,
0.605595, -0.772867, 0.198481,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.619716, 0.782644, -0.082584,
0.697982, 0.717565, -0.031659,
0.758647, 0.647601, -0.088990,
0.748788, 0.635360, -0.196763,
0.673087, 0.696301, -0.255961,
0.605595, 0.772867, -0.198481,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.619716, 0.782644, 0.082584,
-0.697982, 0.717565, 0.031659,
-0.758647, 0.647601, 0.088990,
-0.748788, 0.635360, 0.196763,
-0.673087, 0.696301, 0.255961,
-0.605595, 0.772867, 0.198481,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.619716, -0.782644, -0.082584,
-0.697982, -0.717565, -0.031659,
-0.758647, -0.647601, -0.088990,
-0.748788, -0.635360, -0.196763,
-0.673087, -0.696301, -0.255961,
-0.605595, -0.772867, -0.198481,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.600083, 0.221748, 0.770590,
0.630230, 0.117097, 0.769383,
0.708253, 0.078820, 0.703738,
0.763222, 0.147679, 0.631727,
0.734147, 0.261131, 0.629525,
0.649636, 0.297794, 0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.600083, -0.221748, -0.770590,
0.630230, -0.117097, -0.769383,
0.708253, -0.078820, -0.703738,
0.763222, -0.147679, -0.631727,
0.734147, -0.261131, -0.629525,
0.649636, -0.297794, -0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.600083, -0.221748, 0.770590,
-0.630230, -0.117097, 0.769383,
-0.708253, -0.078820, 0.703738,
-0.763222, -0.147679, 0.631727,
-0.734147, -0.261131, 0.629525,
-0.649636, -0.297794, 0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.600083, 0.221748, -0.770590,
-0.630230, 0.117097, -0.769383,
-0.708253, 0.078820, -0.703738,
-0.763222, 0.147679, -0.631727,
-0.734147, 0.261131, -0.629525,
-0.649636, 0.297794, -0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.770590, 0.600083, 0.221748,
0.769383, 0.630230, 0.117097,
0.703738, 0.708253, 0.078820,
0.631727, 0.763222, 0.147679,
0.629525, 0.734147, 0.261131,
0.701919, 0.649636, 0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.770590, -0.600083, -0.221748,
0.769383, -0.630230, -0.117097,
0.703738, -0.708253, -0.078820,
0.631727, -0.763222, -0.147679,
0.629525, -0.734147, -0.261131,
0.701919, -0.649636, -0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.770590, -0.600083, 0.221748,
-0.769383, -0.630230, 0.117097,
-0.703738, -0.708253, 0.078820,
-0.631727, -0.763222, 0.147679,
-0.629525, -0.734147, 0.261131,
-0.701919, -0.649636, 0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.770590, 0.600083, -0.221748,
-0.769383, 0.630230, -0.117097,
-0.703738, 0.708253, -0.078820,
-0.631727, 0.763222, -0.147679,
-0.629525, 0.734147, -0.261131,
-0.701919, 0.649636, -0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.221748, 0.770590, 0.600083,
0.117097, 0.769383, 0.630230,
0.078820, 0.703738, 0.708253,
0.147679, 0.631727, 0.763222,
0.261131, 0.629525, 0.734147,
0.297794, 0.701919, 0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.221748, -0.770590, -0.600083,
0.117097, -0.769383, -0.630230,
0.078820, -0.703738, -0.708253,
0.147679, -0.631727, -0.763222,
0.261131, -0.629525, -0.734147,
0.297794, -0.701919, -0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.221748, -0.770590, 0.600083,
-0.117097, -0.769383, 0.630230,
-0.078820, -0.703738, 0.708253,
-0.147679, -0.631727, 0.763222,
-0.261131, -0.629525, 0.734147,
-0.297794, -0.701919, 0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.221748, 0.770590, -0.600083,
-0.117097, 0.769383, -0.630230,
-0.078820, 0.703738, -0.708253,
-0.147679, 0.631727, -0.763222,
-0.261131, 0.629525, -0.734147,
-0.297794, 0.701919, -0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, -0.038720, 0.989394,
0.201390, 0.066921, 0.978959,
0.135828, 0.164667, 0.978757,
0.017129, 0.156873, 0.989292,
-0.034135, 0.049111, 1.000000,
0.034135, -0.049111, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, 0.038720, -0.989394,
0.201390, -0.066921, -0.978959,
0.135828, -0.164667, -0.978757,
0.017129, -0.156873, -0.989292,
-0.034135, -0.049111, -1.000000,
0.034135, 0.049111, -1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, 0.038720, 0.989394,
-0.201390, -0.066921, 0.978959,
-0.135828, -0.164667, 0.978757,
-0.017129, -0.156873, 0.989292,
0.034135, -0.049111, 1.000000,
-0.034135, 0.049111, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, -0.038720, -0.989394,
-0.201390, 0.066921, -0.978959,
-0.135828, 0.164667, -0.978757,
-0.017129, 0.156873, -0.989292,
0.034135, 0.049111, -1.000000,
-0.034135, -0.049111, -1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, -0.151867, 0.038720,
0.978959, -0.201390, -0.066921,
0.978757, -0.135828, -0.164667,
0.989292, -0.017129, -0.156873,
1.000000, 0.034135, -0.049111,
1.000000, -0.034135, 0.049111,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, 0.151867, -0.038720,
0.978959, 0.201390, 0.066921,
0.978757, 0.135828, 0.164667,
0.989292, 0.017129, 0.156873,
1.000000, -0.034135, 0.049111,
1.000000, 0.034135, -0.049111,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, 0.151867, 0.038720,
-0.978959, 0.201390, -0.066921,
-0.978757, 0.135828, -0.164667,
-0.989292, 0.017129, -0.156873,
-1.000000, -0.034135, -0.049111,
-1.000000, 0.034135, 0.049111,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, -0.151867, -0.038720,
-0.978959, -0.201390, 0.066921,
-0.978757, -0.135828, 0.164667,
-0.989292, -0.017129, 0.156873,
-1.000000, 0.034135, 0.049111,
-1.000000, -0.034135, -0.049111,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, -0.989394, 0.151867,
-0.066921, -0.978959, 0.201390,
-0.164667, -0.978757, 0.135828,
-0.156873, -0.989292, 0.017129,
-0.049111, -1.000000, -0.034135,
0.049111, -1.000000, 0.034135,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, 0.989394, -0.151867,
-0.066921, 0.978959, -0.201390,
-0.164667, 0.978757, -0.135828,
-0.156873, 0.989292, -0.017129,
-0.049111, 1.000000, 0.034135,
0.049111, 1.000000, -0.034135,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, 0.989394, 0.151867,
0.066921, 0.978959, 0.201390,
0.164667, 0.978757, 0.135828,
0.156873, 0.989292, 0.017129,
0.049111, 1.000000, -0.034135,
-0.049111, 1.000000, 0.034135,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, -0.989394, -0.151867,
0.066921, -0.978959, -0.201390,
0.164667, -0.978757, -0.135828,
0.156873, -0.989292, -0.017129,
0.049111, -1.000000, 0.034135,
-0.049111, -1.000000, -0.034135,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.237148, -0.328607, 0.916138,
0.187360, -0.432312, 0.884084,
0.252218, -0.512440, 0.823024,
0.365816, -0.487560, 0.795010,
0.412998, -0.383799, 0.828006,
0.349069, -0.305872, 0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.237148, 0.328607, -0.916138,
0.187360, 0.432312, -0.884084,
0.252218, 0.512440, -0.823024,
0.365816, 0.487560, -0.795010,
0.412998, 0.383799, -0.828006,
0.349069, 0.305872, -0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.237148, 0.328607, 0.916138,
-0.187360, 0.432312, 0.884084,
-0.252218, 0.512440, 0.823024,
-0.365816, 0.487560, 0.795010,
-0.412998, 0.383799, 0.828006,
-0.349069, 0.305872, 0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.237148, -0.328607, -0.916138,
-0.187360, -0.432312, -0.884084,
-0.252218, -0.512440, -0.823024,
-0.365816, -0.487560, -0.795010,
-0.412998, -0.383799, -0.828006,
-0.349069, -0.305872, -0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.916138, -0.237148, 0.328607,
0.884084, -0.187360, 0.432312,
0.823024, -0.252218, 0.512440,
0.795010, -0.365816, 0.487560,
0.828006, -0.412998, 0.383799,
0.887688, -0.349069, 0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.916138, 0.237148, -0.328607,
0.884084, 0.187360, -0.432312,
0.823024, 0.252218, -0.512440,
0.795010, 0.365816, -0.487560,
0.828006, 0.412998, -0.383799,
0.887688, 0.349069, -0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.916138, 0.237148, 0.328607,
-0.884084, 0.187360, 0.432312,
-0.823024, 0.252218, 0.512440,
-0.795010, 0.365816, 0.487560,
-0.828006, 0.412998, 0.383799,
-0.887688, 0.349069, 0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.916138, -0.237148, -0.328607,
-0.884084, -0.187360, -0.432312,
-0.823024, -0.252218, -0.512440,
-0.795010, -0.365816, -0.487560,
-0.828006, -0.412998, -0.383799,
-0.887688, -0.349069, -0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.328607, -0.916138, 0.237148,
0.432312, -0.884084, 0.187360,
0.512440, -0.823024, 0.252218,
0.487560, -0.795010, 0.365816,
0.383799, -0.828006, 0.412998,
0.305872, -0.887688, 0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.328607, 0.916138, -0.237148,
0.432312, 0.884084, -0.187360,
0.512440, 0.823024, -0.252218,
0.487560, 0.795010, -0.365816,
0.383799, 0.828006, -0.412998,
0.305872, 0.887688, -0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.328607, 0.916138, 0.237148,
-0.432312, 0.884084, 0.187360,
-0.512440, 0.823024, 0.252218,
-0.487560, 0.795010, 0.365816,
-0.383799, 0.828006, 0.412998,
-0.305872, 0.887688, 0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.328607, -0.916138, -0.237148,
-0.432312, -0.884084, -0.187360,
-0.512440, -0.823024, -0.252218,
-0.487560, -0.795010, -0.365816,
-0.383799, -0.828006, -0.412998,
-0.305872, -0.887688, -0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.170230, 0.460027, 0.873497,
0.286353, 0.457208, 0.844121,
0.331681, 0.542792, 0.773913,
0.261131, 0.629525, 0.734147,
0.147679, 0.631727, 0.763222,
0.101320, 0.548380, 0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.170230, -0.460027, -0.873497,
0.286353, -0.457208, -0.844121,
0.331681, -0.542792, -0.773913,
0.261131, -0.629525, -0.734147,
0.147679, -0.631727, -0.763222,
0.101320, -0.548380, -0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.170230, -0.460027, 0.873497,
-0.286353, -0.457208, 0.844121,
-0.331681, -0.542792, 0.773913,
-0.261131, -0.629525, 0.734147,
-0.147679, -0.631727, 0.763222,
-0.101320, -0.548380, 0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.170230, 0.460027, -0.873497,
-0.286353, 0.457208, -0.844121,
-0.331681, 0.542792, -0.773913,
-0.261131, 0.629525, -0.734147,
-0.147679, 0.631727, -0.763222,
-0.101320, 0.548380, -0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.873497, 0.170230, 0.460027,
0.844121, 0.286353, 0.457208,
0.773913, 0.331681, 0.542792,
0.734147, 0.261131, 0.629525,
0.763222, 0.147679, 0.631727,
0.832192, 0.101320, 0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.873497, -0.170230, -0.460027,
0.844121, -0.286353, -0.457208,
0.773913, -0.331681, -0.542792,
0.734147, -0.261131, -0.629525,
0.763222, -0.147679, -0.631727,
0.832192, -0.101320, -0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.873497, -0.170230, 0.460027,
-0.844121, -0.286353, 0.457208,
-0.773913, -0.331681, 0.542792,
-0.734147, -0.261131, 0.629525,
-0.763222, -0.147679, 0.631727,
-0.832192, -0.101320, 0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.873497, 0.170230, -0.460027,
-0.844121, 0.286353, -0.457208,
-0.773913, 0.331681, -0.542792,
-0.734147, 0.261131, -0.629525,
-0.763222, 0.147679, -0.631727,
-0.832192, 0.101320, -0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.460027, 0.873497, 0.170230,
0.457208, 0.844121, 0.286353,
0.542792, 0.773913, 0.331681,
0.629525, 0.734147, 0.261131,
0.631727, 0.763222, 0.147679,
0.548380, 0.832192, 0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.460027, -0.873497, -0.170230,
0.457208, -0.844121, -0.286353,
0.542792, -0.773913, -0.331681,
0.629525, -0.734147, -0.261131,
0.631727, -0.763222, -0.147679,
0.548380, -0.832192, -0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.460027, -0.873497, 0.170230,
-0.457208, -0.844121, 0.286353,
-0.542792, -0.773913, 0.331681,
-0.629525, -0.734147, 0.261131,
-0.631727, -0.763222, 0.147679,
-0.548380, -0.832192, 0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.460027, 0.873497, -0.170230,
-0.457208, 0.844121, -0.286353,
-0.542792, 0.773913, -0.331681,
-0.629525, 0.734147, -0.261131,
-0.631727, 0.763222, -0.147679,
-0.548380, 0.832192, -0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.350348, 0.359869, 0.866726,
0.457350, 0.347231, 0.820767,
0.503585, 0.430377, 0.751471,
0.441186, 0.529264, 0.727210,
0.331681, 0.542792, 0.773913,
0.286353, 0.457208, 0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.350348, -0.359869, -0.866726,
0.457350, -0.347231, -0.820767,
0.503585, -0.430377, -0.751471,
0.441186, -0.529264, -0.727210,
0.331681, -0.542792, -0.773913,
0.286353, -0.457208, -0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.350348, -0.359869, 0.866726,
-0.457350, -0.347231, 0.820767,
-0.503585, -0.430377, 0.751471,
-0.441186, -0.529264, 0.727210,
-0.331681, -0.542792, 0.773913,
-0.286353, -0.457208, 0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.350348, 0.359869, -0.866726,
-0.457350, 0.347231, -0.820767,
-0.503585, 0.430377, -0.751471,
-0.441186, 0.529264, -0.727210,
-0.331681, 0.542792, -0.773913,
-0.286353, 0.457208, -0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.866726, 0.350348, 0.359869,
0.820767, 0.457350, 0.347231,
0.751471, 0.503585, 0.430377,
0.727210, 0.441186, 0.529264,
0.773913, 0.331681, 0.542792,
0.844121, 0.286353, 0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.866726, -0.350348, -0.359869,
0.820767, -0.457350, -0.347231,
0.751471, -0.503585, -0.430377,
0.727210, -0.441186, -0.529264,
0.773913, -0.331681, -0.542792,
0.844121, -0.286353, -0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.866726, -0.350348, 0.359869,
-0.820767, -0.457350, 0.347231,
-0.751471, -0.503585, 0.430377,
-0.727210, -0.441186, 0.529264,
-0.773913, -0.331681, 0.542792,
-0.844121, -0.286353, 0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.866726, 0.350348, -0.359869,
-0.820767, 0.457350, -0.347231,
-0.751471, 0.503585, -0.430377,
-0.727210, 0.441186, -0.529264,
-0.773913, 0.331681, -0.542792,
-0.844121, 0.286353, -0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.359869, 0.866726, 0.350348,
0.347231, 0.820767, 0.457350,
0.430377, 0.751471, 0.503585,
0.529264, 0.727210, 0.441186,
0.542792, 0.773913, 0.331681,
0.457208, 0.844121, 0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.359869, -0.866726, -0.350348,
0.347231, -0.820767, -0.457350,
0.430377, -0.751471, -0.503585,
0.529264, -0.727210, -0.441186,
0.542792, -0.773913, -0.331681,
0.457208, -0.844121, -0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.359869, -0.866726, 0.350348,
-0.347231, -0.820767, 0.457350,
-0.430377, -0.751471, 0.503585,
-0.529264, -0.727210, 0.441186,
-0.542792, -0.773913, 0.331681,
-0.457208, -0.844121, 0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.359869, 0.866726, -0.350348,
-0.347231, 0.820767, -0.457350,
-0.430377, 0.751471, -0.503585,
-0.529264, 0.727210, -0.441186,
-0.542792, 0.773913, -0.331681,
-0.457208, 0.844121, -0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.198481, -0.605595, 0.772867,
0.255961, -0.673087, 0.696301,
0.367757, -0.650150, 0.667525,
0.424056, -0.556980, 0.716624,
0.365816, -0.487560, 0.795010,
0.252218, -0.512440, 0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.198481, 0.605595, -0.772867,
0.255961, 0.673087, -0.696301,
0.367757, 0.650150, -0.667525,
0.424056, 0.556980, -0.716624,
0.365816, 0.487560, -0.795010,
0.252218, 0.512440, -0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.198481, 0.605595, 0.772867,
-0.255961, 0.673087, 0.696301,
-0.367757, 0.650150, 0.667525,
-0.424056, 0.556980, 0.716624,
-0.365816, 0.487560, 0.795010,
-0.252218, 0.512440, 0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.198481, -0.605595, -0.772867,
-0.255961, -0.673087, -0.696301,
-0.367757, -0.650150, -0.667525,
-0.424056, -0.556980, -0.716624,
-0.365816, -0.487560, -0.795010,
-0.252218, -0.512440, -0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.772867, -0.198481, 0.605595,
0.696301, -0.255961, 0.673087,
0.667525, -0.367757, 0.650150,
0.716624, -0.424056, 0.556980,
0.795010, -0.365816, 0.487560,
0.823024, -0.252218, 0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.772867, 0.198481, -0.605595,
0.696301, 0.255961, -0.673087,
0.667525, 0.367757, -0.650150,
0.716624, 0.424056, -0.556980,
0.795010, 0.365816, -0.487560,
0.823024, 0.252218, -0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.772867, 0.198481, 0.605595,
-0.696301, 0.255961, 0.673087,
-0.667525, 0.367757, 0.650150,
-0.716624, 0.424056, 0.556980,
-0.795010, 0.365816, 0.487560,
-0.823024, 0.252218, 0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.772867, -0.198481, -0.605595,
-0.696301, -0.255961, -0.673087,
-0.667525, -0.367757, -0.650150,
-0.716624, -0.424056, -0.556980,
-0.795010, -0.365816, -0.487560,
-0.823024, -0.252218, -0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.605595, -0.772867, 0.198481,
0.673087, -0.696301, 0.255961,
0.650150, -0.667525, 0.367757,
0.556980, -0.716624, 0.424056,
0.487560, -0.795010, 0.365816,
0.512440, -0.823024, 0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.605595, 0.772867, -0.198481,
0.673087, 0.696301, -0.255961,
0.650150, 0.667525, -0.367757,
0.556980, 0.716624, -0.424056,
0.487560, 0.795010, -0.365816,
0.512440, 0.823024, -0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.605595, 0.772867, 0.198481,
-0.673087, 0.696301, 0.255961,
-0.650150, 0.667525, 0.367757,
-0.556980, 0.716624, 0.424056,
-0.487560, 0.795010, 0.365816,
-0.512440, 0.823024, 0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.605595, -0.772867, -0.198481,
-0.673087, -0.696301, -0.255961,
-0.650150, -0.667525, -0.367757,
-0.556980, -0.716624, -0.424056,
-0.487560, -0.795010, -0.365816,
-0.512440, -0.823024, -0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.201390, 0.066921, 0.978959,
0.311064, 0.072893, 0.949214,
0.358769, 0.168707, 0.919731,
0.300802, 0.266631, 0.917511,
0.186862, 0.267263, 0.947199,
0.135828, 0.164667, 0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.201390, -0.066921, -0.978959,
0.311064, -0.072893, -0.949214,
0.358769, -0.168707, -0.919731,
0.300802, -0.266631, -0.917511,
0.186862, -0.267263, -0.947199,
0.135828, -0.164667, -0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.201390, -0.066921, 0.978959,
-0.311064, -0.072893, 0.949214,
-0.358769, -0.168707, 0.919731,
-0.300802, -0.266631, 0.917511,
-0.186862, -0.267263, 0.947199,
-0.135828, -0.164667, 0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.201390, 0.066921, -0.978959,
-0.311064, 0.072893, -0.949214,
-0.358769, 0.168707, -0.919731,
-0.300802, 0.266631, -0.917511,
-0.186862, 0.267263, -0.947199,
-0.135828, 0.164667, -0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.978959, 0.201390, 0.066921,
0.949214, 0.311064, 0.072893,
0.919731, 0.358769, 0.168707,
0.917511, 0.300802, 0.266631,
0.947199, 0.186862, 0.267263,
0.978757, 0.135828, 0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.978959, -0.201390, -0.066921,
0.949214, -0.311064, -0.072893,
0.919731, -0.358769, -0.168707,
0.917511, -0.300802, -0.266631,
0.947199, -0.186862, -0.267263,
0.978757, -0.135828, -0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.978959, -0.201390, 0.066921,
-0.949214, -0.311064, 0.072893,
-0.919731, -0.358769, 0.168707,
-0.917511, -0.300802, 0.266631,
-0.947199, -0.186862, 0.267263,
-0.978757, -0.135828, 0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.978959, 0.201390, -0.066921,
-0.949214, 0.311064, -0.072893,
-0.919731, 0.358769, -0.168707,
-0.917511, 0.300802, -0.266631,
-0.947199, 0.186862, -0.267263,
-0.978757, 0.135828, -0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.066921, 0.978959, 0.201390,
0.072893, 0.949214, 0.311064,
0.168707, 0.919731, 0.358769,
0.266631, 0.917511, 0.300802,
0.267263, 0.947199, 0.186862,
0.164667, 0.978757, 0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.066921, -0.978959, -0.201390,
0.072893, -0.949214, -0.311064,
0.168707, -0.919731, -0.358769,
0.266631, -0.917511, -0.300802,
0.267263, -0.947199, -0.186862,
0.164667, -0.978757, -0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.066921, -0.978959, 0.201390,
-0.072893, -0.949214, 0.311064,
-0.168707, -0.919731, 0.358769,
-0.266631, -0.917511, 0.300802,
-0.267263, -0.947199, 0.186862,
-0.164667, -0.978757, 0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.066921, 0.978959, -0.201390,
-0.072893, 0.949214, -0.311064,
-0.168707, 0.919731, -0.358769,
-0.266631, 0.917511, -0.300802,
-0.267263, 0.947199, -0.186862,
-0.164667, 0.978757, -0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.218219, -0.133007, 0.968550,
0.169912, -0.239836, 0.957675,
0.237148, -0.328607, 0.916138,
0.349069, -0.305872, 0.887688,
0.389883, -0.200426, 0.900501,
0.327110, -0.117482, 0.939297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.218219, 0.133007, -0.968550,
0.169912, 0.239836, -0.957675,
0.237148, 0.328607, -0.916138,
0.349069, 0.305872, -0.887688,
0.389883, 0.200426, -0.900501,
0.327110, 0.117482, -0.939297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.218219, 0.133007, 0.968550,
-0.169912, 0.239836, 0.957675,
-0.237148, 0.328607, 0.916138,
-0.349069, 0.305872, 0.887688,
-0.389883, 0.200426, 0.900501,
-0.327110, 0.117482, 0.939297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.218219, -0.133007, -0.968550,
-0.169912, -0.239836, -0.957675,
-0.237148, -0.328607, -0.916138,
-0.349069, -0.305872, -0.887688,
-0.389883, -0.200426, -0.900501,
-0.327110, -0.117482, -0.939297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.968550, -0.218219, 0.133007,
0.957675, -0.169912, 0.239836,
0.916138, -0.237148, 0.328607,
0.887688, -0.349069, 0.305872,
0.900501, -0.389883, 0.200426,
0.939297, -0.327110, 0.117482,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.968550, 0.218219, -0.133007,
0.957675, 0.169912, -0.239836,
0.916138, 0.237148, -0.328607,
0.887688, 0.349069, -0.305872,
0.900501, 0.389883, -0.200426,
0.939297, 0.327110, -0.117482,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.968550, 0.218219, 0.133007,
-0.957675, 0.169912, 0.239836,
-0.916138, 0.237148, 0.328607,
-0.887688, 0.349069, 0.305872,
-0.900501, 0.389883, 0.200426,
-0.939297, 0.327110, 0.117482,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.968550, -0.218219, -0.133007,
-0.957675, -0.169912, -0.239836,
-0.916138, -0.237148, -0.328607,
-0.887688, -0.349069, -0.305872,
-0.900501, -0.389883, -0.200426,
-0.939297, -0.327110, -0.117482,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.133007, -0.968550, 0.218219,
0.239836, -0.957675, 0.169912,
0.328607, -0.916138, 0.237148,
0.305872, -0.887688, 0.349069,
0.200426, -0.900501, 0.389883,
0.117482, -0.939297, 0.327110,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.133007, 0.968550, -0.218219,
0.239836, 0.957675, -0.169912,
0.328607, 0.916138, -0.237148,
0.305872, 0.887688, -0.349069,
0.200426, 0.900501, -0.389883,
0.117482, 0.939297, -0.327110,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.133007, 0.968550, 0.218219,
-0.239836, 0.957675, 0.169912,
-0.328607, 0.916138, 0.237148,
-0.305872, 0.887688, 0.349069,
-0.200426, 0.900501, 0.389883,
-0.117482, 0.939297, 0.327110,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.133007, -0.968550, -0.218219,
-0.239836, -0.957675, -0.169912,
-0.328607, -0.916138, -0.237148,
-0.305872, -0.887688, -0.349069,
-0.200426, -0.900501, -0.389883,
-0.117482, -0.939297, -0.327110,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.016951, -0.542186, 0.842188,
-0.101320, -0.548380, 0.832192,
-0.147679, -0.631727, 0.763222,
-0.078820, -0.703738, 0.708253,
0.031659, -0.697982, 0.717565,
0.082584, -0.619716, 0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.016951, 0.542186, -0.842188,
-0.101320, 0.548380, -0.832192,
-0.147679, 0.631727, -0.763222,
-0.078820, 0.703738, -0.708253,
0.031659, 0.697982, -0.717565,
0.082584, 0.619716, -0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.016951, 0.542186, 0.842188,
0.101320, 0.548380, 0.832192,
0.147679, 0.631727, 0.763222,
0.078820, 0.703738, 0.708253,
-0.031659, 0.697982, 0.717565,
-0.082584, 0.619716, 0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.016951, -0.542186, -0.842188,
0.101320, -0.548380, -0.832192,
0.147679, -0.631727, -0.763222,
0.078820, -0.703738, -0.708253,
-0.031659, -0.697982, -0.717565,
-0.082584, -0.619716, -0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.842188, -0.016951, 0.542186,
0.832192, 0.101320, 0.548380,
0.763222, 0.147679, 0.631727,
0.708253, 0.078820, 0.703738,
0.717565, -0.031659, 0.697982,
0.782644, -0.082584, 0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.842188, 0.016951, -0.542186,
0.832192, -0.101320, -0.548380,
0.763222, -0.147679, -0.631727,
0.708253, -0.078820, -0.703738,
0.717565, 0.031659, -0.697982,
0.782644, 0.082584, -0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.842188, 0.016951, 0.542186,
-0.832192, -0.101320, 0.548380,
-0.763222, -0.147679, 0.631727,
-0.708253, -0.078820, 0.703738,
-0.717565, 0.031659, 0.697982,
-0.782644, 0.082584, 0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.842188, -0.016951, -0.542186,
-0.832192, 0.101320, -0.548380,
-0.763222, 0.147679, -0.631727,
-0.708253, 0.078820, -0.703738,
-0.717565, -0.031659, -0.697982,
-0.782644, -0.082584, -0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.542186, -0.842188, 0.016951,
0.548380, -0.832192, -0.101320,
0.631727, -0.763222, -0.147679,
0.703738, -0.708253, -0.078820,
0.697982, -0.717565, 0.031659,
0.619716, -0.782644, 0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.542186, 0.842188, -0.016951,
0.548380, 0.832192, 0.101320,
0.631727, 0.763222, 0.147679,
0.703738, 0.708253, 0.078820,
0.697982, 0.717565, -0.031659,
0.619716, 0.782644, -0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.542186, 0.842188, 0.016951,
-0.548380, 0.832192, -0.101320,
-0.631727, 0.763222, -0.147679,
-0.703738, 0.708253, -0.078820,
-0.697982, 0.717565, 0.031659,
-0.619716, 0.782644, 0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.542186, -0.842188, -0.016951,
-0.548380, -0.832192, 0.101320,
-0.631727, -0.763222, 0.147679,
-0.703738, -0.708253, 0.078820,
-0.697982, -0.717565, -0.031659,
-0.619716, -0.782644, -0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, 0.245477, 0.827608,
0.600083, 0.221748, 0.770590,
0.649636, 0.297794, 0.701919,
0.602352, 0.405013, 0.690412,
0.503585, 0.430377, 0.751471,
0.457350, 0.347231, 0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, -0.245477, -0.827608,
0.600083, -0.221748, -0.770590,
0.649636, -0.297794, -0.701919,
0.602352, -0.405013, -0.690412,
0.503585, -0.430377, -0.751471,
0.457350, -0.347231, -0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, -0.245477, 0.827608,
-0.600083, -0.221748, 0.770590,
-0.649636, -0.297794, 0.701919,
-0.602352, -0.405013, 0.690412,
-0.503585, -0.430377, 0.751471,
-0.457350, -0.347231, 0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, 0.245477, -0.827608,
-0.600083, 0.221748, -0.770590,
-0.649636, 0.297794, -0.701919,
-0.602352, 0.405013, -0.690412,
-0.503585, 0.430377, -0.751471,
-0.457350, 0.347231, -0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, 0.507827, 0.245477,
0.770590, 0.600083, 0.221748,
0.701919, 0.649636, 0.297794,
0.690412, 0.602352, 0.405013,
0.751471, 0.503585, 0.430377,
0.820767, 0.457350, 0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, -0.507827, -0.245477,
0.770590, -0.600083, -0.221748,
0.701919, -0.649636, -0.297794,
0.690412, -0.602352, -0.405013,
0.751471, -0.503585, -0.430377,
0.820767, -0.457350, -0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, -0.507827, 0.245477,
-0.770590, -0.600083, 0.221748,
-0.701919, -0.649636, 0.297794,
-0.690412, -0.602352, 0.405013,
-0.751471, -0.503585, 0.430377,
-0.820767, -0.457350, 0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, 0.507827, -0.245477,
-0.770590, 0.600083, -0.221748,
-0.701919, 0.649636, -0.297794,
-0.690412, 0.602352, -0.405013,
-0.751471, 0.503585, -0.430377,
-0.820767, 0.457350, -0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, 0.827608, 0.507827,
0.221748, 0.770590, 0.600083,
0.297794, 0.701919, 0.649636,
0.405013, 0.690412, 0.602352,
0.430377, 0.751471, 0.503585,
0.347231, 0.820767, 0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, -0.827608, -0.507827,
0.221748, -0.770590, -0.600083,
0.297794, -0.701919, -0.649636,
0.405013, -0.690412, -0.602352,
0.430377, -0.751471, -0.503585,
0.347231, -0.820767, -0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, -0.827608, 0.507827,
-0.221748, -0.770590, 0.600083,
-0.297794, -0.701919, 0.649636,
-0.405013, -0.690412, 0.602352,
-0.430377, -0.751471, 0.503585,
-0.347231, -0.820767, 0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, 0.827608, -0.507827,
-0.221748, 0.770590, -0.600083,
-0.297794, 0.701919, -0.649636,
-0.405013, 0.690412, -0.602352,
-0.430377, 0.751471, -0.503585,
-0.347231, 0.820767, -0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, -0.241314, 0.802249,
0.516013, -0.348834, 0.784503,
0.574925, -0.415490, 0.707363,
0.667525, -0.367757, 0.650150,
0.696301, -0.255961, 0.673087,
0.635360, -0.196763, 0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, 0.241314, -0.802249,
0.516013, 0.348834, -0.784503,
0.574925, 0.415490, -0.707363,
0.667525, 0.367757, -0.650150,
0.696301, 0.255961, -0.673087,
0.635360, 0.196763, -0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, 0.241314, 0.802249,
-0.516013, 0.348834, 0.784503,
-0.574925, 0.415490, 0.707363,
-0.667525, 0.367757, 0.650150,
-0.696301, 0.255961, 0.673087,
-0.635360, 0.196763, 0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, -0.241314, -0.802249,
-0.516013, -0.348834, -0.784503,
-0.574925, -0.415490, -0.707363,
-0.667525, -0.367757, -0.650150,
-0.696301, -0.255961, -0.673087,
-0.635360, -0.196763, -0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, -0.548859, 0.241314,
0.784503, -0.516013, 0.348834,
0.707363, -0.574925, 0.415490,
0.650150, -0.667525, 0.367757,
0.673087, -0.696301, 0.255961,
0.748788, -0.635360, 0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, 0.548859, -0.241314,
0.784503, 0.516013, -0.348834,
0.707363, 0.574925, -0.415490,
0.650150, 0.667525, -0.367757,
0.673087, 0.696301, -0.255961,
0.748788, 0.635360, -0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, 0.548859, 0.241314,
-0.784503, 0.516013, 0.348834,
-0.707363, 0.574925, 0.415490,
-0.650150, 0.667525, 0.367757,
-0.673087, 0.696301, 0.255961,
-0.748788, 0.635360, 0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, -0.548859, -0.241314,
-0.784503, -0.516013, -0.348834,
-0.707363, -0.574925, -0.415490,
-0.650150, -0.667525, -0.367757,
-0.673087, -0.696301, -0.255961,
-0.748788, -0.635360, -0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, -0.802249, 0.548859,
0.348834, -0.784503, 0.516013,
0.415490, -0.707363, 0.574925,
0.367757, -0.650150, 0.667525,
0.255961, -0.673087, 0.696301,
0.196763, -0.748788, 0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, 0.802249, -0.548859,
0.348834, 0.784503, -0.516013,
0.415490, 0.707363, -0.574925,
0.367757, 0.650150, -0.667525,
0.255961, 0.673087, -0.696301,
0.196763, 0.748788, -0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, 0.802249, 0.548859,
-0.348834, 0.784503, 0.516013,
-0.415490, 0.707363, 0.574925,
-0.367757, 0.650150, 0.667525,
-0.255961, 0.673087, 0.696301,
-0.196763, 0.748788, 0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, -0.802249, -0.548859,
-0.348834, -0.784503, -0.516013,
-0.415490, -0.707363, -0.574925,
-0.367757, -0.650150, -0.667525,
-0.255961, -0.673087, -0.696301,
-0.196763, -0.748788, -0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, -0.038720, 0.989394,
0.034135, -0.049111, 1.000000,
-0.017129, -0.156873, 0.989292,
0.051465, -0.253243, 0.967907,
0.169912, -0.239836, 0.957675,
0.218219, -0.133007, 0.968550,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, 0.038720, -0.989394,
0.034135, 0.049111, -1.000000,
-0.017129, 0.156873, -0.989292,
0.051465, 0.253243, -0.967907,
0.169912, 0.239836, -0.957675,
0.218219, 0.133007, -0.968550,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, 0.038720, 0.989394,
-0.034135, 0.049111, 1.000000,
0.017129, 0.156873, 0.989292,
-0.051465, 0.253243, 0.967907,
-0.169912, 0.239836, 0.957675,
-0.218219, 0.133007, 0.968550,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, -0.038720, -0.989394,
-0.034135, -0.049111, -1.000000,
0.017129, -0.156873, -0.989292,
-0.051465, -0.253243, -0.967907,
-0.169912, -0.239836, -0.957675,
-0.218219, -0.133007, -0.968550,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, -0.151867, 0.038720,
1.000000, -0.034135, 0.049111,
0.989292, 0.017129, 0.156873,
0.967907, -0.051465, 0.253243,
0.957675, -0.169912, 0.239836,
0.968550, -0.218219, 0.133007,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, 0.151867, -0.038720,
1.000000, 0.034135, -0.049111,
0.989292, -0.017129, -0.156873,
0.967907, 0.051465, -0.253243,
0.957675, 0.169912, -0.239836,
0.968550, 0.218219, -0.133007,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, 0.151867, 0.038720,
-1.000000, 0.034135, 0.049111,
-0.989292, -0.017129, 0.156873,
-0.967907, 0.051465, 0.253243,
-0.957675, 0.169912, 0.239836,
-0.968550, 0.218219, 0.133007,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, -0.151867, -0.038720,
-1.000000, -0.034135, -0.049111,
-0.989292, 0.017129, -0.156873,
-0.967907, -0.051465, -0.253243,
-0.957675, -0.169912, -0.239836,
-0.968550, -0.218219, -0.133007,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, -0.989394, 0.151867,
0.049111, -1.000000, 0.034135,
0.156873, -0.989292, -0.017129,
0.253243, -0.967907, 0.051465,
0.239836, -0.957675, 0.169912,
0.133007, -0.968550, 0.218219,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, 0.989394, -0.151867,
0.049111, 1.000000, -0.034135,
0.156873, 0.989292, 0.017129,
0.253243, 0.967907, -0.051465,
0.239836, 0.957675, -0.169912,
0.133007, 0.968550, -0.218219,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, 0.989394, 0.151867,
-0.049111, 1.000000, 0.034135,
-0.156873, 0.989292, -0.017129,
-0.253243, 0.967907, 0.051465,
-0.239836, 0.957675, 0.169912,
-0.133007, 0.968550, 0.218219,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, -0.989394, -0.151867,
-0.049111, -1.000000, -0.034135,
-0.156873, -0.989292, 0.017129,
-0.253243, -0.967907, -0.051465,
-0.239836, -0.957675, -0.169912,
-0.133007, -0.968550, -0.218219,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.186862, 0.267263, 0.947199,
0.300802, 0.266631, 0.917511,
0.350348, 0.359869, 0.866726,
0.286353, 0.457208, 0.844121,
0.170230, 0.460027, 0.873497,
0.119955, 0.364061, 0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.186862, -0.267263, -0.947199,
0.300802, -0.266631, -0.917511,
0.350348, -0.359869, -0.866726,
0.286353, -0.457208, -0.844121,
0.170230, -0.460027, -0.873497,
0.119955, -0.364061, -0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.186862, -0.267263, 0.947199,
-0.300802, -0.266631, 0.917511,
-0.350348, -0.359869, 0.866726,
-0.286353, -0.457208, 0.844121,
-0.170230, -0.460027, 0.873497,
-0.119955, -0.364061, 0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.186862, 0.267263, -0.947199,
-0.300802, 0.266631, -0.917511,
-0.350348, 0.359869, -0.866726,
-0.286353, 0.457208, -0.844121,
-0.170230, 0.460027, -0.873497,
-0.119955, 0.364061, -0.925578,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.947199, 0.186862, 0.267263,
0.917511, 0.300802, 0.266631,
0.866726, 0.350348, 0.359869,
0.844121, 0.286353, 0.457208,
0.873497, 0.170230, 0.460027,
0.925578, 0.119955, 0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.947199, -0.186862, -0.267263,
0.917511, -0.300802, -0.266631,
0.866726, -0.350348, -0.359869,
0.844121, -0.286353, -0.457208,
0.873497, -0.170230, -0.460027,
0.925578, -0.119955, -0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.947199, -0.186862, 0.267263,
-0.917511, -0.300802, 0.266631,
-0.866726, -0.350348, 0.359869,
-0.844121, -0.286353, 0.457208,
-0.873497, -0.170230, 0.460027,
-0.925578, -0.119955, 0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.947199, 0.186862, -0.267263,
-0.917511, 0.300802, -0.266631,
-0.866726, 0.350348, -0.359869,
-0.844121, 0.286353, -0.457208,
-0.873497, 0.170230, -0.460027,
-0.925578, 0.119955, -0.364061,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.267263, 0.947199, 0.186862,
0.266631, 0.917511, 0.300802,
0.359869, 0.866726, 0.350348,
0.457208, 0.844121, 0.286353,
0.460027, 0.873497, 0.170230,
0.364061, 0.925578, 0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.267263, -0.947199, -0.186862,
0.266631, -0.917511, -0.300802,
0.359869, -0.866726, -0.350348,
0.457208, -0.844121, -0.286353,
0.460027, -0.873497, -0.170230,
0.364061, -0.925578, -0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.267263, -0.947199, 0.186862,
-0.266631, -0.917511, 0.300802,
-0.359869, -0.866726, 0.350348,
-0.457208, -0.844121, 0.286353,
-0.460027, -0.873497, 0.170230,
-0.364061, -0.925578, 0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.267263, 0.947199, -0.186862,
-0.266631, 0.917511, -0.300802,
-0.359869, 0.866726, -0.350348,
-0.457208, 0.844121, -0.286353,
-0.460027, 0.873497, -0.170230,
-0.364061, 0.925578, -0.119955,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.187360, -0.432312, 0.884084,
0.068490, -0.447333, 0.893771,
0.016951, -0.542186, 0.842188,
0.082584, -0.619716, 0.782644,
0.198481, -0.605595, 0.772867,
0.252218, -0.512440, 0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.187360, 0.432312, -0.884084,
0.068490, 0.447333, -0.893771,
0.016951, 0.542186, -0.842188,
0.082584, 0.619716, -0.782644,
0.198481, 0.605595, -0.772867,
0.252218, 0.512440, -0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.187360, 0.432312, 0.884084,
-0.068490, 0.447333, 0.893771,
-0.016951, 0.542186, 0.842188,
-0.082584, 0.619716, 0.782644,
-0.198481, 0.605595, 0.772867,
-0.252218, 0.512440, 0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.187360, -0.432312, -0.884084,
-0.068490, -0.447333, -0.893771,
-0.016951, -0.542186, -0.842188,
-0.082584, -0.619716, -0.782644,
-0.198481, -0.605595, -0.772867,
-0.252218, -0.512440, -0.823024,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.884084, -0.187360, 0.432312,
0.893771, -0.068490, 0.447333,
0.842188, -0.016951, 0.542186,
0.782644, -0.082584, 0.619716,
0.772867, -0.198481, 0.605595,
0.823024, -0.252218, 0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.884084, 0.187360, -0.432312,
0.893771, 0.068490, -0.447333,
0.842188, 0.016951, -0.542186,
0.782644, 0.082584, -0.619716,
0.772867, 0.198481, -0.605595,
0.823024, 0.252218, -0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.884084, 0.187360, 0.432312,
-0.893771, 0.068490, 0.447333,
-0.842188, 0.016951, 0.542186,
-0.782644, 0.082584, 0.619716,
-0.772867, 0.198481, 0.605595,
-0.823024, 0.252218, 0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.884084, -0.187360, -0.432312,
-0.893771, -0.068490, -0.447333,
-0.842188, -0.016951, -0.542186,
-0.782644, -0.082584, -0.619716,
-0.772867, -0.198481, -0.605595,
-0.823024, -0.252218, -0.512440,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.432312, -0.884084, 0.187360,
0.447333, -0.893771, 0.068490,
0.542186, -0.842188, 0.016951,
0.619716, -0.782644, 0.082584,
0.605595, -0.772867, 0.198481,
0.512440, -0.823024, 0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.432312, 0.884084, -0.187360,
0.447333, 0.893771, -0.068490,
0.542186, 0.842188, -0.016951,
0.619716, 0.782644, -0.082584,
0.605595, 0.772867, -0.198481,
0.512440, 0.823024, -0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.432312, 0.884084, 0.187360,
-0.447333, 0.893771, 0.068490,
-0.542186, 0.842188, 0.016951,
-0.619716, 0.782644, 0.082584,
-0.605595, 0.772867, 0.198481,
-0.512440, 0.823024, 0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.432312, -0.884084, -0.187360,
-0.447333, -0.893771, -0.068490,
-0.542186, -0.842188, -0.016951,
-0.619716, -0.782644, -0.082584,
-0.605595, -0.772867, -0.198481,
-0.512440, -0.823024, -0.252218,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412998, -0.383799, 0.828006,
0.365816, -0.487560, 0.795010,
0.424056, -0.556980, 0.716624,
0.529710, -0.520574, 0.672335,
0.574925, -0.415490, 0.707363,
0.516013, -0.348834, 0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412998, 0.383799, -0.828006,
0.365816, 0.487560, -0.795010,
0.424056, 0.556980, -0.716624,
0.529710, 0.520574, -0.672335,
0.574925, 0.415490, -0.707363,
0.516013, 0.348834, -0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412998, 0.383799, 0.828006,
-0.365816, 0.487560, 0.795010,
-0.424056, 0.556980, 0.716624,
-0.529710, 0.520574, 0.672335,
-0.574925, 0.415490, 0.707363,
-0.516013, 0.348834, 0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412998, -0.383799, -0.828006,
-0.365816, -0.487560, -0.795010,
-0.424056, -0.556980, -0.716624,
-0.529710, -0.520574, -0.672335,
-0.574925, -0.415490, -0.707363,
-0.516013, -0.348834, -0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.828006, -0.412998, 0.383799,
0.795010, -0.365816, 0.487560,
0.716624, -0.424056, 0.556980,
0.672335, -0.529710, 0.520574,
0.707363, -0.574925, 0.415490,
0.784503, -0.516013, 0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.828006, 0.412998, -0.383799,
0.795010, 0.365816, -0.487560,
0.716624, 0.424056, -0.556980,
0.672335, 0.529710, -0.520574,
0.707363, 0.574925, -0.415490,
0.784503, 0.516013, -0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.828006, 0.412998, 0.383799,
-0.795010, 0.365816, 0.487560,
-0.716624, 0.424056, 0.556980,
-0.672335, 0.529710, 0.520574,
-0.707363, 0.574925, 0.415490,
-0.784503, 0.516013, 0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.828006, -0.412998, -0.383799,
-0.795010, -0.365816, -0.487560,
-0.716624, -0.424056, -0.556980,
-0.672335, -0.529710, -0.520574,
-0.707363, -0.574925, -0.415490,
-0.784503, -0.516013, -0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.383799, -0.828006, 0.412998,
0.487560, -0.795010, 0.365816,
0.556980, -0.716624, 0.424056,
0.520574, -0.672335, 0.529710,
0.415490, -0.707363, 0.574925,
0.348834, -0.784503, 0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.383799, 0.828006, -0.412998,
0.487560, 0.795010, -0.365816,
0.556980, 0.716624, -0.424056,
0.520574, 0.672335, -0.529710,
0.415490, 0.707363, -0.574925,
0.348834, 0.784503, -0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.383799, 0.828006, 0.412998,
-0.487560, 0.795010, 0.365816,
-0.556980, 0.716624, 0.424056,
-0.520574, 0.672335, 0.529710,
-0.415490, 0.707363, 0.574925,
-0.348834, 0.784503, 0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.383799, -0.828006, -0.412998,
-0.487560, -0.795010, -0.365816,
-0.556980, -0.716624, -0.424056,
-0.520574, -0.672335, -0.529710,
-0.415490, -0.707363, -0.574925,
-0.348834, -0.784503, -0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.261131, 0.629525, 0.734147,
0.331681, 0.542792, 0.773913,
0.441186, 0.529264, 0.727210,
0.478245, 0.603846, 0.640528,
0.405013, 0.690412, 0.602352,
0.297794, 0.701919, 0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.261131, -0.629525, -0.734147,
0.331681, -0.542792, -0.773913,
0.441186, -0.529264, -0.727210,
0.478245, -0.603846, -0.640528,
0.405013, -0.690412, -0.602352,
0.297794, -0.701919, -0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.261131, -0.629525, 0.734147,
-0.331681, -0.542792, 0.773913,
-0.441186, -0.529264, 0.727210,
-0.478245, -0.603846, 0.640528,
-0.405013, -0.690412, 0.602352,
-0.297794, -0.701919, 0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.261131, 0.629525, -0.734147,
-0.331681, 0.542792, -0.773913,
-0.441186, 0.529264, -0.727210,
-0.478245, 0.603846, -0.640528,
-0.405013, 0.690412, -0.602352,
-0.297794, 0.701919, -0.649636,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.734147, 0.261131, 0.629525,
0.773913, 0.331681, 0.542792,
0.727210, 0.441186, 0.529264,
0.640528, 0.478245, 0.603846,
0.602352, 0.405013, 0.690412,
0.649636, 0.297794, 0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.734147, -0.261131, -0.629525,
0.773913, -0.331681, -0.542792,
0.727210, -0.441186, -0.529264,
0.640528, -0.478245, -0.603846,
0.602352, -0.405013, -0.690412,
0.649636, -0.297794, -0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.734147, -0.261131, 0.629525,
-0.773913, -0.331681, 0.542792,
-0.727210, -0.441186, 0.529264,
-0.640528, -0.478245, 0.603846,
-0.602352, -0.405013, 0.690412,
-0.649636, -0.297794, 0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.734147, 0.261131, -0.629525,
-0.773913, 0.331681, -0.542792,
-0.727210, 0.441186, -0.529264,
-0.640528, 0.478245, -0.603846,
-0.602352, 0.405013, -0.690412,
-0.649636, 0.297794, -0.701919,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.629525, 0.734147, 0.261131,
0.542792, 0.773913, 0.331681,
0.529264, 0.727210, 0.441186,
0.603846, 0.640528, 0.478245,
0.690412, 0.602352, 0.405013,
0.701919, 0.649636, 0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.629525, -0.734147, -0.261131,
0.542792, -0.773913, -0.331681,
0.529264, -0.727210, -0.441186,
0.603846, -0.640528, -0.478245,
0.690412, -0.602352, -0.405013,
0.701919, -0.649636, -0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.629525, -0.734147, 0.261131,
-0.542792, -0.773913, 0.331681,
-0.529264, -0.727210, 0.441186,
-0.603846, -0.640528, 0.478245,
-0.690412, -0.602352, 0.405013,
-0.701919, -0.649636, 0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.629525, 0.734147, -0.261131,
-0.542792, 0.773913, -0.331681,
-0.529264, 0.727210, -0.441186,
-0.603846, 0.640528, -0.478245,
-0.690412, 0.602352, -0.405013,
-0.701919, 0.649636, -0.297794,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

}
function initFaceBuffers(gl, vertexBuffers)
{
vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.458837, -0.007671, 0.889663,
0.510545, -0.075995, 0.857706,
0.498134, 0.071254, 0.865376,
0.581800, -0.039297, 0.813668,
0.574129, 0.051708, 0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.458837, 0.007671, -0.889663,
0.510545, 0.075995, -0.857706,
0.498134, -0.071254, -0.865376,
0.581800, 0.039297, -0.813668,
0.574129, -0.051708, -0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.458837, 0.007671, 0.889663,
-0.510545, 0.075995, 0.857706,
-0.498134, -0.071254, 0.865376,
-0.581800, 0.039297, 0.813668,
-0.574129, -0.051708, 0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.458837, -0.007671, -0.889663,
-0.510545, -0.075995, -0.857706,
-0.498134, 0.071254, -0.865376,
-0.581800, -0.039297, -0.813668,
-0.574129, 0.051708, -0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.889663, -0.458837, 0.007671,
0.857706, -0.510545, 0.075995,
0.865376, -0.498134, -0.071254,
0.813668, -0.581800, 0.039297,
0.818409, -0.574129, -0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.889663, 0.458837, -0.007671,
0.857706, 0.510545, -0.075995,
0.865376, 0.498134, 0.071254,
0.813668, 0.581800, -0.039297,
0.818409, 0.574129, 0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.889663, 0.458837, 0.007671,
-0.857706, 0.510545, 0.075995,
-0.865376, 0.498134, -0.071254,
-0.813668, 0.581800, 0.039297,
-0.818409, 0.574129, -0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.889663, -0.458837, -0.007671,
-0.857706, -0.510545, -0.075995,
-0.865376, -0.498134, 0.071254,
-0.813668, -0.581800, -0.039297,
-0.818409, -0.574129, 0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.007671, -0.889663, 0.458837,
0.075995, -0.857706, 0.510545,
-0.071254, -0.865376, 0.498134,
0.039297, -0.813668, 0.581800,
-0.051708, -0.818409, 0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.007671, 0.889663, -0.458837,
0.075995, 0.857706, -0.510545,
-0.071254, 0.865376, -0.498134,
0.039297, 0.813668, -0.581800,
-0.051708, 0.818409, -0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.007671, 0.889663, 0.458837,
-0.075995, 0.857706, 0.510545,
0.071254, 0.865376, 0.498134,
-0.039297, 0.813668, 0.581800,
0.051708, 0.818409, 0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.007671, -0.889663, -0.458837,
-0.075995, -0.857706, -0.510545,
0.071254, -0.865376, -0.498134,
-0.039297, -0.813668, -0.581800,
0.051708, -0.818409, -0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 5;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, 0.935873,
-0.051465, 0.253243, 0.967907,
0.119955, 0.364061, 0.925578,
0.017129, 0.156873, 0.989292,
0.186862, 0.267263, 0.947199,
0.135828, 0.164667, 0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, 0.935873,
0.119955, 0.364061, 0.925578,
-0.068490, 0.447333, 0.893771,
0.170230, 0.460027, 0.873497,
-0.016951, 0.542186, 0.842188,
0.101320, 0.548380, 0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, 0.935873,
-0.068490, 0.447333, 0.893771,
-0.051465, 0.253243, 0.967907,
-0.187360, 0.432312, 0.884084,
-0.169912, 0.239836, 0.957675,
-0.237148, 0.328607, 0.916138,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, -0.935873,
0.051465, 0.253243, -0.967907,
-0.119955, 0.364061, -0.925578,
-0.017129, 0.156873, -0.989292,
-0.186862, 0.267263, -0.947199,
-0.135828, 0.164667, -0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, -0.935873,
-0.119955, 0.364061, -0.925578,
0.068490, 0.447333, -0.893771,
-0.170230, 0.460027, -0.873497,
0.016951, 0.542186, -0.842188,
-0.101320, 0.548380, -0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, 0.357472, -0.935873,
0.068490, 0.447333, -0.893771,
0.051465, 0.253243, -0.967907,
0.187360, 0.432312, -0.884084,
0.169912, 0.239836, -0.957675,
0.237148, 0.328607, -0.916138,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, 0.935873,
0.051465, -0.253243, 0.967907,
-0.119955, -0.364061, 0.925578,
-0.017129, -0.156873, 0.989292,
-0.186862, -0.267263, 0.947199,
-0.135828, -0.164667, 0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, 0.935873,
-0.119955, -0.364061, 0.925578,
0.068490, -0.447333, 0.893771,
-0.170230, -0.460027, 0.873497,
0.016951, -0.542186, 0.842188,
-0.101320, -0.548380, 0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, 0.935873,
0.068490, -0.447333, 0.893771,
0.051465, -0.253243, 0.967907,
0.187360, -0.432312, 0.884084,
0.169912, -0.239836, 0.957675,
0.237148, -0.328607, 0.916138,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, -0.935873,
-0.051465, -0.253243, -0.967907,
0.119955, -0.364061, -0.925578,
0.017129, -0.156873, -0.989292,
0.186862, -0.267263, -0.947199,
0.135828, -0.164667, -0.978757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, -0.935873,
0.119955, -0.364061, -0.925578,
-0.068490, -0.447333, -0.893771,
0.170230, -0.460027, -0.873497,
-0.016951, -0.542186, -0.842188,
0.101320, -0.548380, -0.832192,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.000000, -0.357472, -0.935873,
-0.068490, -0.447333, -0.893771,
-0.051465, -0.253243, -0.967907,
-0.187360, -0.432312, -0.884084,
-0.169912, -0.239836, -0.957675,
-0.237148, -0.328607, -0.916138,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, 0.357472,
0.967907, -0.051465, 0.253243,
0.925578, 0.119955, 0.364061,
0.989292, 0.017129, 0.156873,
0.947199, 0.186862, 0.267263,
0.978757, 0.135828, 0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, 0.357472,
0.925578, 0.119955, 0.364061,
0.893771, -0.068490, 0.447333,
0.873497, 0.170230, 0.460027,
0.842188, -0.016951, 0.542186,
0.832192, 0.101320, 0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, 0.357472,
0.893771, -0.068490, 0.447333,
0.967907, -0.051465, 0.253243,
0.884084, -0.187360, 0.432312,
0.957675, -0.169912, 0.239836,
0.916138, -0.237148, 0.328607,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, -0.357472,
0.967907, 0.051465, -0.253243,
0.925578, -0.119955, -0.364061,
0.989292, -0.017129, -0.156873,
0.947199, -0.186862, -0.267263,
0.978757, -0.135828, -0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, -0.357472,
0.925578, -0.119955, -0.364061,
0.893771, 0.068490, -0.447333,
0.873497, -0.170230, -0.460027,
0.842188, 0.016951, -0.542186,
0.832192, -0.101320, -0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.935873, 0.000000, -0.357472,
0.893771, 0.068490, -0.447333,
0.967907, 0.051465, -0.253243,
0.884084, 0.187360, -0.432312,
0.957675, 0.169912, -0.239836,
0.916138, 0.237148, -0.328607,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, 0.357472,
-0.967907, 0.051465, 0.253243,
-0.925578, -0.119955, 0.364061,
-0.989292, -0.017129, 0.156873,
-0.947199, -0.186862, 0.267263,
-0.978757, -0.135828, 0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, 0.357472,
-0.925578, -0.119955, 0.364061,
-0.893771, 0.068490, 0.447333,
-0.873497, -0.170230, 0.460027,
-0.842188, 0.016951, 0.542186,
-0.832192, -0.101320, 0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, 0.357472,
-0.893771, 0.068490, 0.447333,
-0.967907, 0.051465, 0.253243,
-0.884084, 0.187360, 0.432312,
-0.957675, 0.169912, 0.239836,
-0.916138, 0.237148, 0.328607,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, -0.357472,
-0.967907, -0.051465, -0.253243,
-0.925578, 0.119955, -0.364061,
-0.989292, 0.017129, -0.156873,
-0.947199, 0.186862, -0.267263,
-0.978757, 0.135828, -0.164667,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, -0.357472,
-0.925578, 0.119955, -0.364061,
-0.893771, -0.068490, -0.447333,
-0.873497, 0.170230, -0.460027,
-0.842188, -0.016951, -0.542186,
-0.832192, 0.101320, -0.548380,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.935873, 0.000000, -0.357472,
-0.893771, -0.068490, -0.447333,
-0.967907, -0.051465, -0.253243,
-0.884084, -0.187360, -0.432312,
-0.957675, -0.169912, -0.239836,
-0.916138, -0.237148, -0.328607,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, 0.935873, 0.000000,
0.253243, 0.967907, -0.051465,
0.364061, 0.925578, 0.119955,
0.156873, 0.989292, 0.017129,
0.267263, 0.947199, 0.186862,
0.164667, 0.978757, 0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, 0.935873, 0.000000,
0.364061, 0.925578, 0.119955,
0.447333, 0.893771, -0.068490,
0.460027, 0.873497, 0.170230,
0.542186, 0.842188, -0.016951,
0.548380, 0.832192, 0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, 0.935873, 0.000000,
0.447333, 0.893771, -0.068490,
0.253243, 0.967907, -0.051465,
0.432312, 0.884084, -0.187360,
0.239836, 0.957675, -0.169912,
0.328607, 0.916138, -0.237148,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, -0.935873, 0.000000,
0.253243, -0.967907, 0.051465,
0.364061, -0.925578, -0.119955,
0.156873, -0.989292, -0.017129,
0.267263, -0.947199, -0.186862,
0.164667, -0.978757, -0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, -0.935873, 0.000000,
0.364061, -0.925578, -0.119955,
0.447333, -0.893771, 0.068490,
0.460027, -0.873497, -0.170230,
0.542186, -0.842188, 0.016951,
0.548380, -0.832192, -0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.357472, -0.935873, 0.000000,
0.447333, -0.893771, 0.068490,
0.253243, -0.967907, 0.051465,
0.432312, -0.884084, 0.187360,
0.239836, -0.957675, 0.169912,
0.328607, -0.916138, 0.237148,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, 0.935873, 0.000000,
-0.253243, 0.967907, 0.051465,
-0.364061, 0.925578, -0.119955,
-0.156873, 0.989292, -0.017129,
-0.267263, 0.947199, -0.186862,
-0.164667, 0.978757, -0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, 0.935873, 0.000000,
-0.364061, 0.925578, -0.119955,
-0.447333, 0.893771, 0.068490,
-0.460027, 0.873497, -0.170230,
-0.542186, 0.842188, 0.016951,
-0.548380, 0.832192, -0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, 0.935873, 0.000000,
-0.447333, 0.893771, 0.068490,
-0.253243, 0.967907, 0.051465,
-0.432312, 0.884084, 0.187360,
-0.239836, 0.957675, 0.169912,
-0.328607, 0.916138, 0.237148,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, -0.935873, 0.000000,
-0.253243, -0.967907, -0.051465,
-0.364061, -0.925578, 0.119955,
-0.156873, -0.989292, 0.017129,
-0.267263, -0.947199, 0.186862,
-0.164667, -0.978757, 0.135828,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, -0.935873, 0.000000,
-0.364061, -0.925578, 0.119955,
-0.447333, -0.893771, -0.068490,
-0.460027, -0.873497, 0.170230,
-0.542186, -0.842188, -0.016951,
-0.548380, -0.832192, 0.101320,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.357472, -0.935873, 0.000000,
-0.447333, -0.893771, -0.068490,
-0.253243, -0.967907, -0.051465,
-0.432312, -0.884084, -0.187360,
-0.239836, -0.957675, -0.169912,
-0.328607, -0.916138, -0.237148,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, 0.578402,
0.478245, 0.603846, 0.640528,
0.640528, 0.478245, 0.603846,
0.441186, 0.529264, 0.727210,
0.602352, 0.405013, 0.690412,
0.503585, 0.430377, 0.751471,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, 0.578402,
0.640528, 0.478245, 0.603846,
0.603846, 0.640528, 0.478245,
0.727210, 0.441186, 0.529264,
0.690412, 0.602352, 0.405013,
0.751471, 0.503585, 0.430377,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, 0.578402,
0.603846, 0.640528, 0.478245,
0.478245, 0.603846, 0.640528,
0.529264, 0.727210, 0.441186,
0.405013, 0.690412, 0.602352,
0.430377, 0.751471, 0.503585,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, -0.578402,
0.529710, 0.520574, -0.672335,
0.520574, 0.672335, -0.529710,
0.424056, 0.556980, -0.716624,
0.415490, 0.707363, -0.574925,
0.367757, 0.650150, -0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, -0.578402,
0.520574, 0.672335, -0.529710,
0.672335, 0.529710, -0.520574,
0.556980, 0.716624, -0.424056,
0.707363, 0.574925, -0.415490,
0.650150, 0.667525, -0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, 0.578402, -0.578402,
0.672335, 0.529710, -0.520574,
0.529710, 0.520574, -0.672335,
0.716624, 0.424056, -0.556980,
0.574925, 0.415490, -0.707363,
0.667525, 0.367757, -0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, 0.578402,
0.529710, -0.520574, 0.672335,
0.520574, -0.672335, 0.529710,
0.424056, -0.556980, 0.716624,
0.415490, -0.707363, 0.574925,
0.367757, -0.650150, 0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, 0.578402,
0.520574, -0.672335, 0.529710,
0.672335, -0.529710, 0.520574,
0.556980, -0.716624, 0.424056,
0.707363, -0.574925, 0.415490,
0.650150, -0.667525, 0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, 0.578402,
0.672335, -0.529710, 0.520574,
0.529710, -0.520574, 0.672335,
0.716624, -0.424056, 0.556980,
0.574925, -0.415490, 0.707363,
0.667525, -0.367757, 0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, -0.578402,
0.478245, -0.603846, -0.640528,
0.640528, -0.478245, -0.603846,
0.441186, -0.529264, -0.727210,
0.602352, -0.405013, -0.690412,
0.503585, -0.430377, -0.751471,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, -0.578402,
0.640528, -0.478245, -0.603846,
0.603846, -0.640528, -0.478245,
0.727210, -0.441186, -0.529264,
0.690412, -0.602352, -0.405013,
0.751471, -0.503585, -0.430377,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.578402, -0.578402, -0.578402,
0.603846, -0.640528, -0.478245,
0.478245, -0.603846, -0.640528,
0.529264, -0.727210, -0.441186,
0.405013, -0.690412, -0.602352,
0.430377, -0.751471, -0.503585,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, 0.578402,
-0.529710, 0.520574, 0.672335,
-0.520574, 0.672335, 0.529710,
-0.424056, 0.556980, 0.716624,
-0.415490, 0.707363, 0.574925,
-0.367757, 0.650150, 0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, 0.578402,
-0.520574, 0.672335, 0.529710,
-0.672335, 0.529710, 0.520574,
-0.556980, 0.716624, 0.424056,
-0.707363, 0.574925, 0.415490,
-0.650150, 0.667525, 0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, 0.578402,
-0.672335, 0.529710, 0.520574,
-0.529710, 0.520574, 0.672335,
-0.716624, 0.424056, 0.556980,
-0.574925, 0.415490, 0.707363,
-0.667525, 0.367757, 0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, -0.578402,
-0.478245, 0.603846, -0.640528,
-0.640528, 0.478245, -0.603846,
-0.441186, 0.529264, -0.727210,
-0.602352, 0.405013, -0.690412,
-0.503585, 0.430377, -0.751471,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, -0.578402,
-0.640528, 0.478245, -0.603846,
-0.603846, 0.640528, -0.478245,
-0.727210, 0.441186, -0.529264,
-0.690412, 0.602352, -0.405013,
-0.751471, 0.503585, -0.430377,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, 0.578402, -0.578402,
-0.603846, 0.640528, -0.478245,
-0.478245, 0.603846, -0.640528,
-0.529264, 0.727210, -0.441186,
-0.405013, 0.690412, -0.602352,
-0.430377, 0.751471, -0.503585,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, 0.578402,
-0.478245, -0.603846, 0.640528,
-0.640528, -0.478245, 0.603846,
-0.441186, -0.529264, 0.727210,
-0.602352, -0.405013, 0.690412,
-0.503585, -0.430377, 0.751471,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, 0.578402,
-0.640528, -0.478245, 0.603846,
-0.603846, -0.640528, 0.478245,
-0.727210, -0.441186, 0.529264,
-0.690412, -0.602352, 0.405013,
-0.751471, -0.503585, 0.430377,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, 0.578402,
-0.603846, -0.640528, 0.478245,
-0.478245, -0.603846, 0.640528,
-0.529264, -0.727210, 0.441186,
-0.405013, -0.690412, 0.602352,
-0.430377, -0.751471, 0.503585,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, -0.578402,
-0.529710, -0.520574, -0.672335,
-0.520574, -0.672335, -0.529710,
-0.424056, -0.556980, -0.716624,
-0.415490, -0.707363, -0.574925,
-0.367757, -0.650150, -0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, -0.578402,
-0.520574, -0.672335, -0.529710,
-0.672335, -0.529710, -0.520574,
-0.556980, -0.716624, -0.424056,
-0.707363, -0.574925, -0.415490,
-0.650150, -0.667525, -0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.578402, -0.578402, -0.578402,
-0.672335, -0.529710, -0.520574,
-0.529710, -0.520574, -0.672335,
-0.716624, -0.424056, -0.556980,
-0.574925, -0.415490, -0.707363,
-0.667525, -0.367757, -0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.311064, 0.072893, 0.949214,
0.369144, -0.017371, 0.930743,
0.358769, 0.168707, 0.919731,
0.458837, -0.007671, 0.889663,
0.458134, 0.161360, 0.875744,
0.498134, 0.071254, 0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.311064, -0.072893, -0.949214,
0.369144, 0.017371, -0.930743,
0.358769, -0.168707, -0.919731,
0.458837, 0.007671, -0.889663,
0.458134, -0.161360, -0.875744,
0.498134, -0.071254, -0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.311064, -0.072893, 0.949214,
-0.369144, 0.017371, 0.930743,
-0.358769, -0.168707, 0.919731,
-0.458837, 0.007671, 0.889663,
-0.458134, -0.161360, 0.875744,
-0.498134, -0.071254, 0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.311064, 0.072893, -0.949214,
-0.369144, -0.017371, -0.930743,
-0.358769, 0.168707, -0.919731,
-0.458837, -0.007671, -0.889663,
-0.458134, 0.161360, -0.875744,
-0.498134, 0.071254, -0.865376,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.949214, 0.311064, 0.072893,
0.930743, 0.369144, -0.017371,
0.919731, 0.358769, 0.168707,
0.889663, 0.458837, -0.007671,
0.875744, 0.458134, 0.161360,
0.865376, 0.498134, 0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.949214, -0.311064, -0.072893,
0.930743, -0.369144, 0.017371,
0.919731, -0.358769, -0.168707,
0.889663, -0.458837, 0.007671,
0.875744, -0.458134, -0.161360,
0.865376, -0.498134, -0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.949214, -0.311064, 0.072893,
-0.930743, -0.369144, -0.017371,
-0.919731, -0.358769, 0.168707,
-0.889663, -0.458837, -0.007671,
-0.875744, -0.458134, 0.161360,
-0.865376, -0.498134, 0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.949214, 0.311064, -0.072893,
-0.930743, 0.369144, 0.017371,
-0.919731, 0.358769, -0.168707,
-0.889663, 0.458837, 0.007671,
-0.875744, 0.458134, -0.161360,
-0.865376, 0.498134, -0.071254,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.072893, 0.949214, 0.311064,
-0.017371, 0.930743, 0.369144,
0.168707, 0.919731, 0.358769,
-0.007671, 0.889663, 0.458837,
0.161360, 0.875744, 0.458134,
0.071254, 0.865376, 0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.072893, -0.949214, -0.311064,
-0.017371, -0.930743, -0.369144,
0.168707, -0.919731, -0.358769,
-0.007671, -0.889663, -0.458837,
0.161360, -0.875744, -0.458134,
0.071254, -0.865376, -0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.072893, -0.949214, 0.311064,
0.017371, -0.930743, 0.369144,
-0.168707, -0.919731, 0.358769,
0.007671, -0.889663, 0.458837,
-0.161360, -0.875744, 0.458134,
-0.071254, -0.865376, 0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.072893, 0.949214, -0.311064,
0.017371, 0.930743, -0.369144,
-0.168707, 0.919731, -0.358769,
0.007671, 0.889663, -0.458837,
-0.161360, 0.875744, -0.458134,
-0.071254, 0.865376, -0.498134,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.327110, -0.117482, 0.939297,
0.389883, -0.200426, 0.900501,
0.369144, -0.017371, 0.930743,
0.486241, -0.172096, 0.858373,
0.458837, -0.007671, 0.889663,
0.510545, -0.075995, 0.857706,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.327110, 0.117482, -0.939297,
0.389883, 0.200426, -0.900501,
0.369144, 0.017371, -0.930743,
0.486241, 0.172096, -0.858373,
0.458837, 0.007671, -0.889663,
0.510545, 0.075995, -0.857706,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.327110, 0.117482, 0.939297,
-0.389883, 0.200426, 0.900501,
-0.369144, 0.017371, 0.930743,
-0.486241, 0.172096, 0.858373,
-0.458837, 0.007671, 0.889663,
-0.510545, 0.075995, 0.857706,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.327110, -0.117482, -0.939297,
-0.389883, -0.200426, -0.900501,
-0.369144, -0.017371, -0.930743,
-0.486241, -0.172096, -0.858373,
-0.458837, -0.007671, -0.889663,
-0.510545, -0.075995, -0.857706,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.939297, -0.327110, 0.117482,
0.900501, -0.389883, 0.200426,
0.930743, -0.369144, 0.017371,
0.858373, -0.486241, 0.172096,
0.889663, -0.458837, 0.007671,
0.857706, -0.510545, 0.075995,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.939297, 0.327110, -0.117482,
0.900501, 0.389883, -0.200426,
0.930743, 0.369144, -0.017371,
0.858373, 0.486241, -0.172096,
0.889663, 0.458837, -0.007671,
0.857706, 0.510545, -0.075995,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.939297, 0.327110, 0.117482,
-0.900501, 0.389883, 0.200426,
-0.930743, 0.369144, 0.017371,
-0.858373, 0.486241, 0.172096,
-0.889663, 0.458837, 0.007671,
-0.857706, 0.510545, 0.075995,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.939297, -0.327110, -0.117482,
-0.900501, -0.389883, -0.200426,
-0.930743, -0.369144, -0.017371,
-0.858373, -0.486241, -0.172096,
-0.889663, -0.458837, -0.007671,
-0.857706, -0.510545, -0.075995,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.117482, -0.939297, 0.327110,
0.200426, -0.900501, 0.389883,
0.017371, -0.930743, 0.369144,
0.172096, -0.858373, 0.486241,
0.007671, -0.889663, 0.458837,
0.075995, -0.857706, 0.510545,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.117482, 0.939297, -0.327110,
0.200426, 0.900501, -0.389883,
0.017371, 0.930743, -0.369144,
0.172096, 0.858373, -0.486241,
0.007671, 0.889663, -0.458837,
0.075995, 0.857706, -0.510545,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.117482, 0.939297, 0.327110,
-0.200426, 0.900501, 0.389883,
-0.017371, 0.930743, 0.369144,
-0.172096, 0.858373, 0.486241,
-0.007671, 0.889663, 0.458837,
-0.075995, 0.857706, 0.510545,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.117482, -0.939297, -0.327110,
-0.200426, -0.900501, -0.389883,
-0.017371, -0.930743, -0.369144,
-0.172096, -0.858373, -0.486241,
-0.007671, -0.889663, -0.458837,
-0.075995, -0.857706, -0.510545,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, 0.245477, 0.827608,
0.458134, 0.161360, 0.875744,
0.600083, 0.221748, 0.770590,
0.498134, 0.071254, 0.865376,
0.630230, 0.117097, 0.769383,
0.574129, 0.051708, 0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, -0.245477, -0.827608,
0.458134, -0.161360, -0.875744,
0.600083, -0.221748, -0.770590,
0.498134, -0.071254, -0.865376,
0.630230, -0.117097, -0.769383,
0.574129, -0.051708, -0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, -0.245477, 0.827608,
-0.458134, -0.161360, 0.875744,
-0.600083, -0.221748, 0.770590,
-0.498134, -0.071254, 0.865376,
-0.630230, -0.117097, 0.769383,
-0.574129, -0.051708, 0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, 0.245477, -0.827608,
-0.458134, 0.161360, -0.875744,
-0.600083, 0.221748, -0.770590,
-0.498134, 0.071254, -0.865376,
-0.630230, 0.117097, -0.769383,
-0.574129, 0.051708, -0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, 0.507827, 0.245477,
0.875744, 0.458134, 0.161360,
0.770590, 0.600083, 0.221748,
0.865376, 0.498134, 0.071254,
0.769383, 0.630230, 0.117097,
0.818409, 0.574129, 0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, -0.507827, -0.245477,
0.875744, -0.458134, -0.161360,
0.770590, -0.600083, -0.221748,
0.865376, -0.498134, -0.071254,
0.769383, -0.630230, -0.117097,
0.818409, -0.574129, -0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, -0.507827, 0.245477,
-0.875744, -0.458134, 0.161360,
-0.770590, -0.600083, 0.221748,
-0.865376, -0.498134, 0.071254,
-0.769383, -0.630230, 0.117097,
-0.818409, -0.574129, 0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, 0.507827, -0.245477,
-0.875744, 0.458134, -0.161360,
-0.770590, 0.600083, -0.221748,
-0.865376, 0.498134, -0.071254,
-0.769383, 0.630230, -0.117097,
-0.818409, 0.574129, -0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, 0.827608, 0.507827,
0.161360, 0.875744, 0.458134,
0.221748, 0.770590, 0.600083,
0.071254, 0.865376, 0.498134,
0.117097, 0.769383, 0.630230,
0.051708, 0.818409, 0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, -0.827608, -0.507827,
0.161360, -0.875744, -0.458134,
0.221748, -0.770590, -0.600083,
0.071254, -0.865376, -0.498134,
0.117097, -0.769383, -0.630230,
0.051708, -0.818409, -0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, -0.827608, 0.507827,
-0.161360, -0.875744, 0.458134,
-0.221748, -0.770590, 0.600083,
-0.071254, -0.865376, 0.498134,
-0.117097, -0.769383, 0.630230,
-0.051708, -0.818409, 0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, 0.827608, -0.507827,
-0.161360, 0.875744, -0.458134,
-0.221748, 0.770590, -0.600083,
-0.071254, 0.865376, -0.498134,
-0.117097, 0.769383, -0.630230,
-0.051708, 0.818409, -0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, -0.241314, 0.802249,
0.635360, -0.196763, 0.748788,
0.486241, -0.172096, 0.858373,
0.647601, -0.088990, 0.758647,
0.510545, -0.075995, 0.857706,
0.581800, -0.039297, 0.813668,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, 0.241314, -0.802249,
0.635360, 0.196763, -0.748788,
0.486241, 0.172096, -0.858373,
0.647601, 0.088990, -0.758647,
0.510545, 0.075995, -0.857706,
0.581800, 0.039297, -0.813668,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, 0.241314, 0.802249,
-0.635360, 0.196763, 0.748788,
-0.486241, 0.172096, 0.858373,
-0.647601, 0.088990, 0.758647,
-0.510545, 0.075995, 0.857706,
-0.581800, 0.039297, 0.813668,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, -0.241314, -0.802249,
-0.635360, -0.196763, -0.748788,
-0.486241, -0.172096, -0.858373,
-0.647601, -0.088990, -0.758647,
-0.510545, -0.075995, -0.857706,
-0.581800, -0.039297, -0.813668,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, -0.548859, 0.241314,
0.748788, -0.635360, 0.196763,
0.858373, -0.486241, 0.172096,
0.758647, -0.647601, 0.088990,
0.857706, -0.510545, 0.075995,
0.813668, -0.581800, 0.039297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, 0.548859, -0.241314,
0.748788, 0.635360, -0.196763,
0.858373, 0.486241, -0.172096,
0.758647, 0.647601, -0.088990,
0.857706, 0.510545, -0.075995,
0.813668, 0.581800, -0.039297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, 0.548859, 0.241314,
-0.748788, 0.635360, 0.196763,
-0.858373, 0.486241, 0.172096,
-0.758647, 0.647601, 0.088990,
-0.857706, 0.510545, 0.075995,
-0.813668, 0.581800, 0.039297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, -0.548859, -0.241314,
-0.748788, -0.635360, -0.196763,
-0.858373, -0.486241, -0.172096,
-0.758647, -0.647601, -0.088990,
-0.857706, -0.510545, -0.075995,
-0.813668, -0.581800, -0.039297,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, -0.802249, 0.548859,
0.196763, -0.748788, 0.635360,
0.172096, -0.858373, 0.486241,
0.088990, -0.758647, 0.647601,
0.075995, -0.857706, 0.510545,
0.039297, -0.813668, 0.581800,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, 0.802249, -0.548859,
0.196763, 0.748788, -0.635360,
0.172096, 0.858373, -0.486241,
0.088990, 0.758647, -0.647601,
0.075995, 0.857706, -0.510545,
0.039297, 0.813668, -0.581800,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, 0.802249, 0.548859,
-0.196763, 0.748788, 0.635360,
-0.172096, 0.858373, 0.486241,
-0.088990, 0.758647, 0.647601,
-0.075995, 0.857706, 0.510545,
-0.039297, 0.813668, 0.581800,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, -0.802249, -0.548859,
-0.196763, -0.748788, -0.635360,
-0.172096, -0.858373, -0.486241,
-0.088990, -0.758647, -0.647601,
-0.075995, -0.857706, -0.510545,
-0.039297, -0.813668, -0.581800,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.031659, -0.697982, 0.717565,
-0.078820, -0.703738, 0.708253,
0.088990, -0.758647, 0.647601,
-0.117097, -0.769383, 0.630230,
0.039297, -0.813668, 0.581800,
-0.051708, -0.818409, 0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.031659, 0.697982, -0.717565,
-0.078820, 0.703738, -0.708253,
0.088990, 0.758647, -0.647601,
-0.117097, 0.769383, -0.630230,
0.039297, 0.813668, -0.581800,
-0.051708, 0.818409, -0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.031659, 0.697982, 0.717565,
0.078820, 0.703738, 0.708253,
-0.088990, 0.758647, 0.647601,
0.117097, 0.769383, 0.630230,
-0.039297, 0.813668, 0.581800,
0.051708, 0.818409, 0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.031659, -0.697982, -0.717565,
0.078820, -0.703738, -0.708253,
-0.088990, -0.758647, -0.647601,
0.117097, -0.769383, -0.630230,
-0.039297, -0.813668, -0.581800,
0.051708, -0.818409, -0.574129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.717565, -0.031659, 0.697982,
0.708253, 0.078820, 0.703738,
0.647601, -0.088990, 0.758647,
0.630230, 0.117097, 0.769383,
0.581800, -0.039297, 0.813668,
0.574129, 0.051708, 0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.717565, 0.031659, -0.697982,
0.708253, -0.078820, -0.703738,
0.647601, 0.088990, -0.758647,
0.630230, -0.117097, -0.769383,
0.581800, 0.039297, -0.813668,
0.574129, -0.051708, -0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.717565, 0.031659, 0.697982,
-0.708253, -0.078820, 0.703738,
-0.647601, 0.088990, 0.758647,
-0.630230, -0.117097, 0.769383,
-0.581800, 0.039297, 0.813668,
-0.574129, -0.051708, 0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.717565, -0.031659, -0.697982,
-0.708253, 0.078820, -0.703738,
-0.647601, -0.088990, -0.758647,
-0.630230, 0.117097, -0.769383,
-0.581800, -0.039297, -0.813668,
-0.574129, 0.051708, -0.818409,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.697982, -0.717565, 0.031659,
0.703738, -0.708253, -0.078820,
0.758647, -0.647601, 0.088990,
0.769383, -0.630230, -0.117097,
0.813668, -0.581800, 0.039297,
0.818409, -0.574129, -0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.697982, 0.717565, -0.031659,
0.703738, 0.708253, 0.078820,
0.758647, 0.647601, -0.088990,
0.769383, 0.630230, 0.117097,
0.813668, 0.581800, -0.039297,
0.818409, 0.574129, 0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.697982, 0.717565, 0.031659,
-0.703738, 0.708253, -0.078820,
-0.758647, 0.647601, 0.088990,
-0.769383, 0.630230, -0.117097,
-0.813668, 0.581800, 0.039297,
-0.818409, 0.574129, -0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.697982, -0.717565, -0.031659,
-0.703738, -0.708253, 0.078820,
-0.758647, -0.647601, -0.088990,
-0.769383, -0.630230, 0.117097,
-0.813668, -0.581800, -0.039297,
-0.818409, -0.574129, 0.051708,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, -0.038720, 0.989394,
0.218219, -0.133007, 0.968550,
0.201390, 0.066921, 0.978959,
0.327110, -0.117482, 0.939297,
0.311064, 0.072893, 0.949214,
0.369144, -0.017371, 0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, 0.038720, -0.989394,
0.218219, 0.133007, -0.968550,
0.201390, -0.066921, -0.978959,
0.327110, 0.117482, -0.939297,
0.311064, -0.072893, -0.949214,
0.369144, 0.017371, -0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, 0.038720, 0.989394,
-0.218219, 0.133007, 0.968550,
-0.201390, -0.066921, 0.978959,
-0.327110, 0.117482, 0.939297,
-0.311064, -0.072893, 0.949214,
-0.369144, 0.017371, 0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, -0.038720, -0.989394,
-0.218219, -0.133007, -0.968550,
-0.201390, 0.066921, -0.978959,
-0.327110, -0.117482, -0.939297,
-0.311064, 0.072893, -0.949214,
-0.369144, -0.017371, -0.930743,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, -0.151867, 0.038720,
0.968550, -0.218219, 0.133007,
0.978959, -0.201390, -0.066921,
0.939297, -0.327110, 0.117482,
0.949214, -0.311064, -0.072893,
0.930743, -0.369144, 0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, 0.151867, -0.038720,
0.968550, 0.218219, -0.133007,
0.978959, 0.201390, 0.066921,
0.939297, 0.327110, -0.117482,
0.949214, 0.311064, 0.072893,
0.930743, 0.369144, -0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, 0.151867, 0.038720,
-0.968550, 0.218219, 0.133007,
-0.978959, 0.201390, -0.066921,
-0.939297, 0.327110, 0.117482,
-0.949214, 0.311064, -0.072893,
-0.930743, 0.369144, 0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, -0.151867, -0.038720,
-0.968550, -0.218219, -0.133007,
-0.978959, -0.201390, 0.066921,
-0.939297, -0.327110, -0.117482,
-0.949214, -0.311064, 0.072893,
-0.930743, -0.369144, -0.017371,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, -0.989394, 0.151867,
0.133007, -0.968550, 0.218219,
-0.066921, -0.978959, 0.201390,
0.117482, -0.939297, 0.327110,
-0.072893, -0.949214, 0.311064,
0.017371, -0.930743, 0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, 0.989394, -0.151867,
0.133007, 0.968550, -0.218219,
-0.066921, 0.978959, -0.201390,
0.117482, 0.939297, -0.327110,
-0.072893, 0.949214, -0.311064,
0.017371, 0.930743, -0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, 0.989394, 0.151867,
-0.133007, 0.968550, 0.218219,
0.066921, 0.978959, 0.201390,
-0.117482, 0.939297, 0.327110,
0.072893, 0.949214, 0.311064,
-0.017371, 0.930743, 0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, -0.989394, -0.151867,
-0.133007, -0.968550, -0.218219,
0.066921, -0.978959, -0.201390,
-0.117482, -0.939297, -0.327110,
0.072893, -0.949214, -0.311064,
-0.017371, -0.930743, -0.369144,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.358769, 0.168707, 0.919731,
0.458134, 0.161360, 0.875744,
0.300802, 0.266631, 0.917511,
0.507827, 0.245477, 0.827608,
0.350348, 0.359869, 0.866726,
0.457350, 0.347231, 0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.358769, -0.168707, -0.919731,
0.458134, -0.161360, -0.875744,
0.300802, -0.266631, -0.917511,
0.507827, -0.245477, -0.827608,
0.350348, -0.359869, -0.866726,
0.457350, -0.347231, -0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.358769, -0.168707, 0.919731,
-0.458134, -0.161360, 0.875744,
-0.300802, -0.266631, 0.917511,
-0.507827, -0.245477, 0.827608,
-0.350348, -0.359869, 0.866726,
-0.457350, -0.347231, 0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.358769, 0.168707, -0.919731,
-0.458134, 0.161360, -0.875744,
-0.300802, 0.266631, -0.917511,
-0.507827, 0.245477, -0.827608,
-0.350348, 0.359869, -0.866726,
-0.457350, 0.347231, -0.820767,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.919731, 0.358769, 0.168707,
0.875744, 0.458134, 0.161360,
0.917511, 0.300802, 0.266631,
0.827608, 0.507827, 0.245477,
0.866726, 0.350348, 0.359869,
0.820767, 0.457350, 0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.919731, -0.358769, -0.168707,
0.875744, -0.458134, -0.161360,
0.917511, -0.300802, -0.266631,
0.827608, -0.507827, -0.245477,
0.866726, -0.350348, -0.359869,
0.820767, -0.457350, -0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.919731, -0.358769, 0.168707,
-0.875744, -0.458134, 0.161360,
-0.917511, -0.300802, 0.266631,
-0.827608, -0.507827, 0.245477,
-0.866726, -0.350348, 0.359869,
-0.820767, -0.457350, 0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.919731, 0.358769, -0.168707,
-0.875744, 0.458134, -0.161360,
-0.917511, 0.300802, -0.266631,
-0.827608, 0.507827, -0.245477,
-0.866726, 0.350348, -0.359869,
-0.820767, 0.457350, -0.347231,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.168707, 0.919731, 0.358769,
0.161360, 0.875744, 0.458134,
0.266631, 0.917511, 0.300802,
0.245477, 0.827608, 0.507827,
0.359869, 0.866726, 0.350348,
0.347231, 0.820767, 0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.168707, -0.919731, -0.358769,
0.161360, -0.875744, -0.458134,
0.266631, -0.917511, -0.300802,
0.245477, -0.827608, -0.507827,
0.359869, -0.866726, -0.350348,
0.347231, -0.820767, -0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.168707, -0.919731, 0.358769,
-0.161360, -0.875744, 0.458134,
-0.266631, -0.917511, 0.300802,
-0.245477, -0.827608, 0.507827,
-0.359869, -0.866726, 0.350348,
-0.347231, -0.820767, 0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.168707, 0.919731, -0.358769,
-0.161360, 0.875744, -0.458134,
-0.266631, 0.917511, -0.300802,
-0.245477, 0.827608, -0.507827,
-0.359869, 0.866726, -0.350348,
-0.347231, 0.820767, -0.457350,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.389883, -0.200426, 0.900501,
0.349069, -0.305872, 0.887688,
0.486241, -0.172096, 0.858373,
0.412998, -0.383799, 0.828006,
0.548859, -0.241314, 0.802249,
0.516013, -0.348834, 0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.389883, 0.200426, -0.900501,
0.349069, 0.305872, -0.887688,
0.486241, 0.172096, -0.858373,
0.412998, 0.383799, -0.828006,
0.548859, 0.241314, -0.802249,
0.516013, 0.348834, -0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.389883, 0.200426, 0.900501,
-0.349069, 0.305872, 0.887688,
-0.486241, 0.172096, 0.858373,
-0.412998, 0.383799, 0.828006,
-0.548859, 0.241314, 0.802249,
-0.516013, 0.348834, 0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.389883, -0.200426, -0.900501,
-0.349069, -0.305872, -0.887688,
-0.486241, -0.172096, -0.858373,
-0.412998, -0.383799, -0.828006,
-0.548859, -0.241314, -0.802249,
-0.516013, -0.348834, -0.784503,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.900501, -0.389883, 0.200426,
0.887688, -0.349069, 0.305872,
0.858373, -0.486241, 0.172096,
0.828006, -0.412998, 0.383799,
0.802249, -0.548859, 0.241314,
0.784503, -0.516013, 0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.900501, 0.389883, -0.200426,
0.887688, 0.349069, -0.305872,
0.858373, 0.486241, -0.172096,
0.828006, 0.412998, -0.383799,
0.802249, 0.548859, -0.241314,
0.784503, 0.516013, -0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.900501, 0.389883, 0.200426,
-0.887688, 0.349069, 0.305872,
-0.858373, 0.486241, 0.172096,
-0.828006, 0.412998, 0.383799,
-0.802249, 0.548859, 0.241314,
-0.784503, 0.516013, 0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.900501, -0.389883, -0.200426,
-0.887688, -0.349069, -0.305872,
-0.858373, -0.486241, -0.172096,
-0.828006, -0.412998, -0.383799,
-0.802249, -0.548859, -0.241314,
-0.784503, -0.516013, -0.348834,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.200426, -0.900501, 0.389883,
0.305872, -0.887688, 0.349069,
0.172096, -0.858373, 0.486241,
0.383799, -0.828006, 0.412998,
0.241314, -0.802249, 0.548859,
0.348834, -0.784503, 0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.200426, 0.900501, -0.389883,
0.305872, 0.887688, -0.349069,
0.172096, 0.858373, -0.486241,
0.383799, 0.828006, -0.412998,
0.241314, 0.802249, -0.548859,
0.348834, 0.784503, -0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.200426, 0.900501, 0.389883,
-0.305872, 0.887688, 0.349069,
-0.172096, 0.858373, 0.486241,
-0.383799, 0.828006, 0.412998,
-0.241314, 0.802249, 0.548859,
-0.348834, 0.784503, 0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.200426, -0.900501, -0.389883,
-0.305872, -0.887688, -0.349069,
-0.172096, -0.858373, -0.486241,
-0.383799, -0.828006, -0.412998,
-0.241314, -0.802249, -0.548859,
-0.348834, -0.784503, -0.516013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.082584, -0.619716, 0.782644,
0.031659, -0.697982, 0.717565,
0.198481, -0.605595, 0.772867,
0.088990, -0.758647, 0.647601,
0.255961, -0.673087, 0.696301,
0.196763, -0.748788, 0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.082584, 0.619716, -0.782644,
0.031659, 0.697982, -0.717565,
0.198481, 0.605595, -0.772867,
0.088990, 0.758647, -0.647601,
0.255961, 0.673087, -0.696301,
0.196763, 0.748788, -0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.082584, 0.619716, 0.782644,
-0.031659, 0.697982, 0.717565,
-0.198481, 0.605595, 0.772867,
-0.088990, 0.758647, 0.647601,
-0.255961, 0.673087, 0.696301,
-0.196763, 0.748788, 0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.082584, -0.619716, -0.782644,
-0.031659, -0.697982, -0.717565,
-0.198481, -0.605595, -0.772867,
-0.088990, -0.758647, -0.647601,
-0.255961, -0.673087, -0.696301,
-0.196763, -0.748788, -0.635360,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.782644, -0.082584, 0.619716,
0.717565, -0.031659, 0.697982,
0.772867, -0.198481, 0.605595,
0.647601, -0.088990, 0.758647,
0.696301, -0.255961, 0.673087,
0.635360, -0.196763, 0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.782644, 0.082584, -0.619716,
0.717565, 0.031659, -0.697982,
0.772867, 0.198481, -0.605595,
0.647601, 0.088990, -0.758647,
0.696301, 0.255961, -0.673087,
0.635360, 0.196763, -0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.782644, 0.082584, 0.619716,
-0.717565, 0.031659, 0.697982,
-0.772867, 0.198481, 0.605595,
-0.647601, 0.088990, 0.758647,
-0.696301, 0.255961, 0.673087,
-0.635360, 0.196763, 0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.782644, -0.082584, -0.619716,
-0.717565, -0.031659, -0.697982,
-0.772867, -0.198481, -0.605595,
-0.647601, -0.088990, -0.758647,
-0.696301, -0.255961, -0.673087,
-0.635360, -0.196763, -0.748788,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.619716, -0.782644, 0.082584,
0.697982, -0.717565, 0.031659,
0.605595, -0.772867, 0.198481,
0.758647, -0.647601, 0.088990,
0.673087, -0.696301, 0.255961,
0.748788, -0.635360, 0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.619716, 0.782644, -0.082584,
0.697982, 0.717565, -0.031659,
0.605595, 0.772867, -0.198481,
0.758647, 0.647601, -0.088990,
0.673087, 0.696301, -0.255961,
0.748788, 0.635360, -0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.619716, 0.782644, 0.082584,
-0.697982, 0.717565, 0.031659,
-0.605595, 0.772867, 0.198481,
-0.758647, 0.647601, 0.088990,
-0.673087, 0.696301, 0.255961,
-0.748788, 0.635360, 0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.619716, -0.782644, -0.082584,
-0.697982, -0.717565, -0.031659,
-0.605595, -0.772867, -0.198481,
-0.758647, -0.647601, -0.088990,
-0.673087, -0.696301, -0.255961,
-0.748788, -0.635360, -0.196763,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.600083, 0.221748, 0.770590,
0.630230, 0.117097, 0.769383,
0.649636, 0.297794, 0.701919,
0.708253, 0.078820, 0.703738,
0.734147, 0.261131, 0.629525,
0.763222, 0.147679, 0.631727,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.600083, -0.221748, -0.770590,
0.630230, -0.117097, -0.769383,
0.649636, -0.297794, -0.701919,
0.708253, -0.078820, -0.703738,
0.734147, -0.261131, -0.629525,
0.763222, -0.147679, -0.631727,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.600083, -0.221748, 0.770590,
-0.630230, -0.117097, 0.769383,
-0.649636, -0.297794, 0.701919,
-0.708253, -0.078820, 0.703738,
-0.734147, -0.261131, 0.629525,
-0.763222, -0.147679, 0.631727,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.600083, 0.221748, -0.770590,
-0.630230, 0.117097, -0.769383,
-0.649636, 0.297794, -0.701919,
-0.708253, 0.078820, -0.703738,
-0.734147, 0.261131, -0.629525,
-0.763222, 0.147679, -0.631727,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.770590, 0.600083, 0.221748,
0.769383, 0.630230, 0.117097,
0.701919, 0.649636, 0.297794,
0.703738, 0.708253, 0.078820,
0.629525, 0.734147, 0.261131,
0.631727, 0.763222, 0.147679,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.770590, -0.600083, -0.221748,
0.769383, -0.630230, -0.117097,
0.701919, -0.649636, -0.297794,
0.703738, -0.708253, -0.078820,
0.629525, -0.734147, -0.261131,
0.631727, -0.763222, -0.147679,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.770590, -0.600083, 0.221748,
-0.769383, -0.630230, 0.117097,
-0.701919, -0.649636, 0.297794,
-0.703738, -0.708253, 0.078820,
-0.629525, -0.734147, 0.261131,
-0.631727, -0.763222, 0.147679,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.770590, 0.600083, -0.221748,
-0.769383, 0.630230, -0.117097,
-0.701919, 0.649636, -0.297794,
-0.703738, 0.708253, -0.078820,
-0.629525, 0.734147, -0.261131,
-0.631727, 0.763222, -0.147679,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.221748, 0.770590, 0.600083,
0.117097, 0.769383, 0.630230,
0.297794, 0.701919, 0.649636,
0.078820, 0.703738, 0.708253,
0.261131, 0.629525, 0.734147,
0.147679, 0.631727, 0.763222,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.221748, -0.770590, -0.600083,
0.117097, -0.769383, -0.630230,
0.297794, -0.701919, -0.649636,
0.078820, -0.703738, -0.708253,
0.261131, -0.629525, -0.734147,
0.147679, -0.631727, -0.763222,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.221748, -0.770590, 0.600083,
-0.117097, -0.769383, 0.630230,
-0.297794, -0.701919, 0.649636,
-0.078820, -0.703738, 0.708253,
-0.261131, -0.629525, 0.734147,
-0.147679, -0.631727, 0.763222,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.221748, 0.770590, -0.600083,
-0.117097, 0.769383, -0.630230,
-0.297794, 0.701919, -0.649636,
-0.078820, 0.703738, -0.708253,
-0.261131, 0.629525, -0.734147,
-0.147679, 0.631727, -0.763222,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, -0.038720, 0.989394,
0.201390, 0.066921, 0.978959,
0.034135, -0.049111, 1.000000,
0.135828, 0.164667, 0.978757,
-0.034135, 0.049111, 1.000000,
0.017129, 0.156873, 0.989292,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, 0.038720, -0.989394,
0.201390, -0.066921, -0.978959,
0.034135, 0.049111, -1.000000,
0.135828, -0.164667, -0.978757,
-0.034135, -0.049111, -1.000000,
0.017129, -0.156873, -0.989292,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, 0.038720, 0.989394,
-0.201390, -0.066921, 0.978959,
-0.034135, 0.049111, 1.000000,
-0.135828, -0.164667, 0.978757,
0.034135, -0.049111, 1.000000,
-0.017129, -0.156873, 0.989292,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, -0.038720, -0.989394,
-0.201390, 0.066921, -0.978959,
-0.034135, -0.049111, -1.000000,
-0.135828, 0.164667, -0.978757,
0.034135, 0.049111, -1.000000,
-0.017129, 0.156873, -0.989292,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, -0.151867, 0.038720,
0.978959, -0.201390, -0.066921,
1.000000, -0.034135, 0.049111,
0.978757, -0.135828, -0.164667,
1.000000, 0.034135, -0.049111,
0.989292, -0.017129, -0.156873,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, 0.151867, -0.038720,
0.978959, 0.201390, 0.066921,
1.000000, 0.034135, -0.049111,
0.978757, 0.135828, 0.164667,
1.000000, -0.034135, 0.049111,
0.989292, 0.017129, 0.156873,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, 0.151867, 0.038720,
-0.978959, 0.201390, -0.066921,
-1.000000, 0.034135, 0.049111,
-0.978757, 0.135828, -0.164667,
-1.000000, -0.034135, -0.049111,
-0.989292, 0.017129, -0.156873,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, -0.151867, -0.038720,
-0.978959, -0.201390, 0.066921,
-1.000000, -0.034135, -0.049111,
-0.978757, -0.135828, 0.164667,
-1.000000, 0.034135, 0.049111,
-0.989292, -0.017129, 0.156873,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, -0.989394, 0.151867,
-0.066921, -0.978959, 0.201390,
0.049111, -1.000000, 0.034135,
-0.164667, -0.978757, 0.135828,
-0.049111, -1.000000, -0.034135,
-0.156873, -0.989292, 0.017129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, 0.989394, -0.151867,
-0.066921, 0.978959, -0.201390,
0.049111, 1.000000, -0.034135,
-0.164667, 0.978757, -0.135828,
-0.049111, 1.000000, 0.034135,
-0.156873, 0.989292, -0.017129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, 0.989394, 0.151867,
0.066921, 0.978959, 0.201390,
-0.049111, 1.000000, 0.034135,
0.164667, 0.978757, 0.135828,
0.049111, 1.000000, -0.034135,
0.156873, 0.989292, 0.017129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, -0.989394, -0.151867,
0.066921, -0.978959, -0.201390,
-0.049111, -1.000000, -0.034135,
0.164667, -0.978757, -0.135828,
0.049111, -1.000000, 0.034135,
0.156873, -0.989292, -0.017129,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.237148, -0.328607, 0.916138,
0.187360, -0.432312, 0.884084,
0.349069, -0.305872, 0.887688,
0.252218, -0.512440, 0.823024,
0.412998, -0.383799, 0.828006,
0.365816, -0.487560, 0.795010,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.237148, 0.328607, -0.916138,
0.187360, 0.432312, -0.884084,
0.349069, 0.305872, -0.887688,
0.252218, 0.512440, -0.823024,
0.412998, 0.383799, -0.828006,
0.365816, 0.487560, -0.795010,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.237148, 0.328607, 0.916138,
-0.187360, 0.432312, 0.884084,
-0.349069, 0.305872, 0.887688,
-0.252218, 0.512440, 0.823024,
-0.412998, 0.383799, 0.828006,
-0.365816, 0.487560, 0.795010,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.237148, -0.328607, -0.916138,
-0.187360, -0.432312, -0.884084,
-0.349069, -0.305872, -0.887688,
-0.252218, -0.512440, -0.823024,
-0.412998, -0.383799, -0.828006,
-0.365816, -0.487560, -0.795010,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.916138, -0.237148, 0.328607,
0.884084, -0.187360, 0.432312,
0.887688, -0.349069, 0.305872,
0.823024, -0.252218, 0.512440,
0.828006, -0.412998, 0.383799,
0.795010, -0.365816, 0.487560,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.916138, 0.237148, -0.328607,
0.884084, 0.187360, -0.432312,
0.887688, 0.349069, -0.305872,
0.823024, 0.252218, -0.512440,
0.828006, 0.412998, -0.383799,
0.795010, 0.365816, -0.487560,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.916138, 0.237148, 0.328607,
-0.884084, 0.187360, 0.432312,
-0.887688, 0.349069, 0.305872,
-0.823024, 0.252218, 0.512440,
-0.828006, 0.412998, 0.383799,
-0.795010, 0.365816, 0.487560,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.916138, -0.237148, -0.328607,
-0.884084, -0.187360, -0.432312,
-0.887688, -0.349069, -0.305872,
-0.823024, -0.252218, -0.512440,
-0.828006, -0.412998, -0.383799,
-0.795010, -0.365816, -0.487560,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.328607, -0.916138, 0.237148,
0.432312, -0.884084, 0.187360,
0.305872, -0.887688, 0.349069,
0.512440, -0.823024, 0.252218,
0.383799, -0.828006, 0.412998,
0.487560, -0.795010, 0.365816,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.328607, 0.916138, -0.237148,
0.432312, 0.884084, -0.187360,
0.305872, 0.887688, -0.349069,
0.512440, 0.823024, -0.252218,
0.383799, 0.828006, -0.412998,
0.487560, 0.795010, -0.365816,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.328607, 0.916138, 0.237148,
-0.432312, 0.884084, 0.187360,
-0.305872, 0.887688, 0.349069,
-0.512440, 0.823024, 0.252218,
-0.383799, 0.828006, 0.412998,
-0.487560, 0.795010, 0.365816,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.328607, -0.916138, -0.237148,
-0.432312, -0.884084, -0.187360,
-0.305872, -0.887688, -0.349069,
-0.512440, -0.823024, -0.252218,
-0.383799, -0.828006, -0.412998,
-0.487560, -0.795010, -0.365816,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.170230, 0.460027, 0.873497,
0.286353, 0.457208, 0.844121,
0.101320, 0.548380, 0.832192,
0.331681, 0.542792, 0.773913,
0.147679, 0.631727, 0.763222,
0.261131, 0.629525, 0.734147,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.170230, -0.460027, -0.873497,
0.286353, -0.457208, -0.844121,
0.101320, -0.548380, -0.832192,
0.331681, -0.542792, -0.773913,
0.147679, -0.631727, -0.763222,
0.261131, -0.629525, -0.734147,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.170230, -0.460027, 0.873497,
-0.286353, -0.457208, 0.844121,
-0.101320, -0.548380, 0.832192,
-0.331681, -0.542792, 0.773913,
-0.147679, -0.631727, 0.763222,
-0.261131, -0.629525, 0.734147,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.170230, 0.460027, -0.873497,
-0.286353, 0.457208, -0.844121,
-0.101320, 0.548380, -0.832192,
-0.331681, 0.542792, -0.773913,
-0.147679, 0.631727, -0.763222,
-0.261131, 0.629525, -0.734147,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.873497, 0.170230, 0.460027,
0.844121, 0.286353, 0.457208,
0.832192, 0.101320, 0.548380,
0.773913, 0.331681, 0.542792,
0.763222, 0.147679, 0.631727,
0.734147, 0.261131, 0.629525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.873497, -0.170230, -0.460027,
0.844121, -0.286353, -0.457208,
0.832192, -0.101320, -0.548380,
0.773913, -0.331681, -0.542792,
0.763222, -0.147679, -0.631727,
0.734147, -0.261131, -0.629525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.873497, -0.170230, 0.460027,
-0.844121, -0.286353, 0.457208,
-0.832192, -0.101320, 0.548380,
-0.773913, -0.331681, 0.542792,
-0.763222, -0.147679, 0.631727,
-0.734147, -0.261131, 0.629525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.873497, 0.170230, -0.460027,
-0.844121, 0.286353, -0.457208,
-0.832192, 0.101320, -0.548380,
-0.773913, 0.331681, -0.542792,
-0.763222, 0.147679, -0.631727,
-0.734147, 0.261131, -0.629525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.460027, 0.873497, 0.170230,
0.457208, 0.844121, 0.286353,
0.548380, 0.832192, 0.101320,
0.542792, 0.773913, 0.331681,
0.631727, 0.763222, 0.147679,
0.629525, 0.734147, 0.261131,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.460027, -0.873497, -0.170230,
0.457208, -0.844121, -0.286353,
0.548380, -0.832192, -0.101320,
0.542792, -0.773913, -0.331681,
0.631727, -0.763222, -0.147679,
0.629525, -0.734147, -0.261131,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.460027, -0.873497, 0.170230,
-0.457208, -0.844121, 0.286353,
-0.548380, -0.832192, 0.101320,
-0.542792, -0.773913, 0.331681,
-0.631727, -0.763222, 0.147679,
-0.629525, -0.734147, 0.261131,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.460027, 0.873497, -0.170230,
-0.457208, 0.844121, -0.286353,
-0.548380, 0.832192, -0.101320,
-0.542792, 0.773913, -0.331681,
-0.631727, 0.763222, -0.147679,
-0.629525, 0.734147, -0.261131,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.350348, 0.359869, 0.866726,
0.457350, 0.347231, 0.820767,
0.286353, 0.457208, 0.844121,
0.503585, 0.430377, 0.751471,
0.331681, 0.542792, 0.773913,
0.441186, 0.529264, 0.727210,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.350348, -0.359869, -0.866726,
0.457350, -0.347231, -0.820767,
0.286353, -0.457208, -0.844121,
0.503585, -0.430377, -0.751471,
0.331681, -0.542792, -0.773913,
0.441186, -0.529264, -0.727210,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.350348, -0.359869, 0.866726,
-0.457350, -0.347231, 0.820767,
-0.286353, -0.457208, 0.844121,
-0.503585, -0.430377, 0.751471,
-0.331681, -0.542792, 0.773913,
-0.441186, -0.529264, 0.727210,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.350348, 0.359869, -0.866726,
-0.457350, 0.347231, -0.820767,
-0.286353, 0.457208, -0.844121,
-0.503585, 0.430377, -0.751471,
-0.331681, 0.542792, -0.773913,
-0.441186, 0.529264, -0.727210,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.866726, 0.350348, 0.359869,
0.820767, 0.457350, 0.347231,
0.844121, 0.286353, 0.457208,
0.751471, 0.503585, 0.430377,
0.773913, 0.331681, 0.542792,
0.727210, 0.441186, 0.529264,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.866726, -0.350348, -0.359869,
0.820767, -0.457350, -0.347231,
0.844121, -0.286353, -0.457208,
0.751471, -0.503585, -0.430377,
0.773913, -0.331681, -0.542792,
0.727210, -0.441186, -0.529264,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.866726, -0.350348, 0.359869,
-0.820767, -0.457350, 0.347231,
-0.844121, -0.286353, 0.457208,
-0.751471, -0.503585, 0.430377,
-0.773913, -0.331681, 0.542792,
-0.727210, -0.441186, 0.529264,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.866726, 0.350348, -0.359869,
-0.820767, 0.457350, -0.347231,
-0.844121, 0.286353, -0.457208,
-0.751471, 0.503585, -0.430377,
-0.773913, 0.331681, -0.542792,
-0.727210, 0.441186, -0.529264,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.359869, 0.866726, 0.350348,
0.347231, 0.820767, 0.457350,
0.457208, 0.844121, 0.286353,
0.430377, 0.751471, 0.503585,
0.542792, 0.773913, 0.331681,
0.529264, 0.727210, 0.441186,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.359869, -0.866726, -0.350348,
0.347231, -0.820767, -0.457350,
0.457208, -0.844121, -0.286353,
0.430377, -0.751471, -0.503585,
0.542792, -0.773913, -0.331681,
0.529264, -0.727210, -0.441186,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.359869, -0.866726, 0.350348,
-0.347231, -0.820767, 0.457350,
-0.457208, -0.844121, 0.286353,
-0.430377, -0.751471, 0.503585,
-0.542792, -0.773913, 0.331681,
-0.529264, -0.727210, 0.441186,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.359869, 0.866726, -0.350348,
-0.347231, 0.820767, -0.457350,
-0.457208, 0.844121, -0.286353,
-0.430377, 0.751471, -0.503585,
-0.542792, 0.773913, -0.331681,
-0.529264, 0.727210, -0.441186,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.198481, -0.605595, 0.772867,
0.255961, -0.673087, 0.696301,
0.252218, -0.512440, 0.823024,
0.367757, -0.650150, 0.667525,
0.365816, -0.487560, 0.795010,
0.424056, -0.556980, 0.716624,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.198481, 0.605595, -0.772867,
0.255961, 0.673087, -0.696301,
0.252218, 0.512440, -0.823024,
0.367757, 0.650150, -0.667525,
0.365816, 0.487560, -0.795010,
0.424056, 0.556980, -0.716624,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.198481, 0.605595, 0.772867,
-0.255961, 0.673087, 0.696301,
-0.252218, 0.512440, 0.823024,
-0.367757, 0.650150, 0.667525,
-0.365816, 0.487560, 0.795010,
-0.424056, 0.556980, 0.716624,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.198481, -0.605595, -0.772867,
-0.255961, -0.673087, -0.696301,
-0.252218, -0.512440, -0.823024,
-0.367757, -0.650150, -0.667525,
-0.365816, -0.487560, -0.795010,
-0.424056, -0.556980, -0.716624,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.772867, -0.198481, 0.605595,
0.696301, -0.255961, 0.673087,
0.823024, -0.252218, 0.512440,
0.667525, -0.367757, 0.650150,
0.795010, -0.365816, 0.487560,
0.716624, -0.424056, 0.556980,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.772867, 0.198481, -0.605595,
0.696301, 0.255961, -0.673087,
0.823024, 0.252218, -0.512440,
0.667525, 0.367757, -0.650150,
0.795010, 0.365816, -0.487560,
0.716624, 0.424056, -0.556980,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.772867, 0.198481, 0.605595,
-0.696301, 0.255961, 0.673087,
-0.823024, 0.252218, 0.512440,
-0.667525, 0.367757, 0.650150,
-0.795010, 0.365816, 0.487560,
-0.716624, 0.424056, 0.556980,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.772867, -0.198481, -0.605595,
-0.696301, -0.255961, -0.673087,
-0.823024, -0.252218, -0.512440,
-0.667525, -0.367757, -0.650150,
-0.795010, -0.365816, -0.487560,
-0.716624, -0.424056, -0.556980,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.605595, -0.772867, 0.198481,
0.673087, -0.696301, 0.255961,
0.512440, -0.823024, 0.252218,
0.650150, -0.667525, 0.367757,
0.487560, -0.795010, 0.365816,
0.556980, -0.716624, 0.424056,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.605595, 0.772867, -0.198481,
0.673087, 0.696301, -0.255961,
0.512440, 0.823024, -0.252218,
0.650150, 0.667525, -0.367757,
0.487560, 0.795010, -0.365816,
0.556980, 0.716624, -0.424056,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.605595, 0.772867, 0.198481,
-0.673087, 0.696301, 0.255961,
-0.512440, 0.823024, 0.252218,
-0.650150, 0.667525, 0.367757,
-0.487560, 0.795010, 0.365816,
-0.556980, 0.716624, 0.424056,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.605595, -0.772867, -0.198481,
-0.673087, -0.696301, -0.255961,
-0.512440, -0.823024, -0.252218,
-0.650150, -0.667525, -0.367757,
-0.487560, -0.795010, -0.365816,
-0.556980, -0.716624, -0.424056,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.201390, 0.066921, 0.978959,
0.311064, 0.072893, 0.949214,
0.135828, 0.164667, 0.978757,
0.358769, 0.168707, 0.919731,
0.186862, 0.267263, 0.947199,
0.300802, 0.266631, 0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.201390, -0.066921, -0.978959,
0.311064, -0.072893, -0.949214,
0.135828, -0.164667, -0.978757,
0.358769, -0.168707, -0.919731,
0.186862, -0.267263, -0.947199,
0.300802, -0.266631, -0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.201390, -0.066921, 0.978959,
-0.311064, -0.072893, 0.949214,
-0.135828, -0.164667, 0.978757,
-0.358769, -0.168707, 0.919731,
-0.186862, -0.267263, 0.947199,
-0.300802, -0.266631, 0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.201390, 0.066921, -0.978959,
-0.311064, 0.072893, -0.949214,
-0.135828, 0.164667, -0.978757,
-0.358769, 0.168707, -0.919731,
-0.186862, 0.267263, -0.947199,
-0.300802, 0.266631, -0.917511,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.978959, 0.201390, 0.066921,
0.949214, 0.311064, 0.072893,
0.978757, 0.135828, 0.164667,
0.919731, 0.358769, 0.168707,
0.947199, 0.186862, 0.267263,
0.917511, 0.300802, 0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.978959, -0.201390, -0.066921,
0.949214, -0.311064, -0.072893,
0.978757, -0.135828, -0.164667,
0.919731, -0.358769, -0.168707,
0.947199, -0.186862, -0.267263,
0.917511, -0.300802, -0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.978959, -0.201390, 0.066921,
-0.949214, -0.311064, 0.072893,
-0.978757, -0.135828, 0.164667,
-0.919731, -0.358769, 0.168707,
-0.947199, -0.186862, 0.267263,
-0.917511, -0.300802, 0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.978959, 0.201390, -0.066921,
-0.949214, 0.311064, -0.072893,
-0.978757, 0.135828, -0.164667,
-0.919731, 0.358769, -0.168707,
-0.947199, 0.186862, -0.267263,
-0.917511, 0.300802, -0.266631,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.066921, 0.978959, 0.201390,
0.072893, 0.949214, 0.311064,
0.164667, 0.978757, 0.135828,
0.168707, 0.919731, 0.358769,
0.267263, 0.947199, 0.186862,
0.266631, 0.917511, 0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.066921, -0.978959, -0.201390,
0.072893, -0.949214, -0.311064,
0.164667, -0.978757, -0.135828,
0.168707, -0.919731, -0.358769,
0.267263, -0.947199, -0.186862,
0.266631, -0.917511, -0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.066921, -0.978959, 0.201390,
-0.072893, -0.949214, 0.311064,
-0.164667, -0.978757, 0.135828,
-0.168707, -0.919731, 0.358769,
-0.267263, -0.947199, 0.186862,
-0.266631, -0.917511, 0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.066921, 0.978959, -0.201390,
-0.072893, 0.949214, -0.311064,
-0.164667, 0.978757, -0.135828,
-0.168707, 0.919731, -0.358769,
-0.267263, 0.947199, -0.186862,
-0.266631, 0.917511, -0.300802,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.218219, -0.133007, 0.968550,
0.169912, -0.239836, 0.957675,
0.327110, -0.117482, 0.939297,
0.237148, -0.328607, 0.916138,
0.389883, -0.200426, 0.900501,
0.349069, -0.305872, 0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.218219, 0.133007, -0.968550,
0.169912, 0.239836, -0.957675,
0.327110, 0.117482, -0.939297,
0.237148, 0.328607, -0.916138,
0.389883, 0.200426, -0.900501,
0.349069, 0.305872, -0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.218219, 0.133007, 0.968550,
-0.169912, 0.239836, 0.957675,
-0.327110, 0.117482, 0.939297,
-0.237148, 0.328607, 0.916138,
-0.389883, 0.200426, 0.900501,
-0.349069, 0.305872, 0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.218219, -0.133007, -0.968550,
-0.169912, -0.239836, -0.957675,
-0.327110, -0.117482, -0.939297,
-0.237148, -0.328607, -0.916138,
-0.389883, -0.200426, -0.900501,
-0.349069, -0.305872, -0.887688,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.968550, -0.218219, 0.133007,
0.957675, -0.169912, 0.239836,
0.939297, -0.327110, 0.117482,
0.916138, -0.237148, 0.328607,
0.900501, -0.389883, 0.200426,
0.887688, -0.349069, 0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.968550, 0.218219, -0.133007,
0.957675, 0.169912, -0.239836,
0.939297, 0.327110, -0.117482,
0.916138, 0.237148, -0.328607,
0.900501, 0.389883, -0.200426,
0.887688, 0.349069, -0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.968550, 0.218219, 0.133007,
-0.957675, 0.169912, 0.239836,
-0.939297, 0.327110, 0.117482,
-0.916138, 0.237148, 0.328607,
-0.900501, 0.389883, 0.200426,
-0.887688, 0.349069, 0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.968550, -0.218219, -0.133007,
-0.957675, -0.169912, -0.239836,
-0.939297, -0.327110, -0.117482,
-0.916138, -0.237148, -0.328607,
-0.900501, -0.389883, -0.200426,
-0.887688, -0.349069, -0.305872,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.133007, -0.968550, 0.218219,
0.239836, -0.957675, 0.169912,
0.117482, -0.939297, 0.327110,
0.328607, -0.916138, 0.237148,
0.200426, -0.900501, 0.389883,
0.305872, -0.887688, 0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.133007, 0.968550, -0.218219,
0.239836, 0.957675, -0.169912,
0.117482, 0.939297, -0.327110,
0.328607, 0.916138, -0.237148,
0.200426, 0.900501, -0.389883,
0.305872, 0.887688, -0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.133007, 0.968550, 0.218219,
-0.239836, 0.957675, 0.169912,
-0.117482, 0.939297, 0.327110,
-0.328607, 0.916138, 0.237148,
-0.200426, 0.900501, 0.389883,
-0.305872, 0.887688, 0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.133007, -0.968550, -0.218219,
-0.239836, -0.957675, -0.169912,
-0.117482, -0.939297, -0.327110,
-0.328607, -0.916138, -0.237148,
-0.200426, -0.900501, -0.389883,
-0.305872, -0.887688, -0.349069,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.016951, -0.542186, 0.842188,
-0.101320, -0.548380, 0.832192,
0.082584, -0.619716, 0.782644,
-0.147679, -0.631727, 0.763222,
0.031659, -0.697982, 0.717565,
-0.078820, -0.703738, 0.708253,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.016951, 0.542186, -0.842188,
-0.101320, 0.548380, -0.832192,
0.082584, 0.619716, -0.782644,
-0.147679, 0.631727, -0.763222,
0.031659, 0.697982, -0.717565,
-0.078820, 0.703738, -0.708253,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.016951, 0.542186, 0.842188,
0.101320, 0.548380, 0.832192,
-0.082584, 0.619716, 0.782644,
0.147679, 0.631727, 0.763222,
-0.031659, 0.697982, 0.717565,
0.078820, 0.703738, 0.708253,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.016951, -0.542186, -0.842188,
0.101320, -0.548380, -0.832192,
-0.082584, -0.619716, -0.782644,
0.147679, -0.631727, -0.763222,
-0.031659, -0.697982, -0.717565,
0.078820, -0.703738, -0.708253,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.842188, -0.016951, 0.542186,
0.832192, 0.101320, 0.548380,
0.782644, -0.082584, 0.619716,
0.763222, 0.147679, 0.631727,
0.717565, -0.031659, 0.697982,
0.708253, 0.078820, 0.703738,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.842188, 0.016951, -0.542186,
0.832192, -0.101320, -0.548380,
0.782644, 0.082584, -0.619716,
0.763222, -0.147679, -0.631727,
0.717565, 0.031659, -0.697982,
0.708253, -0.078820, -0.703738,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.842188, 0.016951, 0.542186,
-0.832192, -0.101320, 0.548380,
-0.782644, 0.082584, 0.619716,
-0.763222, -0.147679, 0.631727,
-0.717565, 0.031659, 0.697982,
-0.708253, -0.078820, 0.703738,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.842188, -0.016951, -0.542186,
-0.832192, 0.101320, -0.548380,
-0.782644, -0.082584, -0.619716,
-0.763222, 0.147679, -0.631727,
-0.717565, -0.031659, -0.697982,
-0.708253, 0.078820, -0.703738,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.542186, -0.842188, 0.016951,
0.548380, -0.832192, -0.101320,
0.619716, -0.782644, 0.082584,
0.631727, -0.763222, -0.147679,
0.697982, -0.717565, 0.031659,
0.703738, -0.708253, -0.078820,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.542186, 0.842188, -0.016951,
0.548380, 0.832192, 0.101320,
0.619716, 0.782644, -0.082584,
0.631727, 0.763222, 0.147679,
0.697982, 0.717565, -0.031659,
0.703738, 0.708253, 0.078820,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.542186, 0.842188, 0.016951,
-0.548380, 0.832192, -0.101320,
-0.619716, 0.782644, 0.082584,
-0.631727, 0.763222, -0.147679,
-0.697982, 0.717565, 0.031659,
-0.703738, 0.708253, -0.078820,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.542186, -0.842188, -0.016951,
-0.548380, -0.832192, 0.101320,
-0.619716, -0.782644, -0.082584,
-0.631727, -0.763222, 0.147679,
-0.697982, -0.717565, -0.031659,
-0.703738, -0.708253, 0.078820,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, 0.245477, 0.827608,
0.600083, 0.221748, 0.770590,
0.457350, 0.347231, 0.820767,
0.649636, 0.297794, 0.701919,
0.503585, 0.430377, 0.751471,
0.602352, 0.405013, 0.690412,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.507827, -0.245477, -0.827608,
0.600083, -0.221748, -0.770590,
0.457350, -0.347231, -0.820767,
0.649636, -0.297794, -0.701919,
0.503585, -0.430377, -0.751471,
0.602352, -0.405013, -0.690412,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, -0.245477, 0.827608,
-0.600083, -0.221748, 0.770590,
-0.457350, -0.347231, 0.820767,
-0.649636, -0.297794, 0.701919,
-0.503585, -0.430377, 0.751471,
-0.602352, -0.405013, 0.690412,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.507827, 0.245477, -0.827608,
-0.600083, 0.221748, -0.770590,
-0.457350, 0.347231, -0.820767,
-0.649636, 0.297794, -0.701919,
-0.503585, 0.430377, -0.751471,
-0.602352, 0.405013, -0.690412,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, 0.507827, 0.245477,
0.770590, 0.600083, 0.221748,
0.820767, 0.457350, 0.347231,
0.701919, 0.649636, 0.297794,
0.751471, 0.503585, 0.430377,
0.690412, 0.602352, 0.405013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.827608, -0.507827, -0.245477,
0.770590, -0.600083, -0.221748,
0.820767, -0.457350, -0.347231,
0.701919, -0.649636, -0.297794,
0.751471, -0.503585, -0.430377,
0.690412, -0.602352, -0.405013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, -0.507827, 0.245477,
-0.770590, -0.600083, 0.221748,
-0.820767, -0.457350, 0.347231,
-0.701919, -0.649636, 0.297794,
-0.751471, -0.503585, 0.430377,
-0.690412, -0.602352, 0.405013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.827608, 0.507827, -0.245477,
-0.770590, 0.600083, -0.221748,
-0.820767, 0.457350, -0.347231,
-0.701919, 0.649636, -0.297794,
-0.751471, 0.503585, -0.430377,
-0.690412, 0.602352, -0.405013,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, 0.827608, 0.507827,
0.221748, 0.770590, 0.600083,
0.347231, 0.820767, 0.457350,
0.297794, 0.701919, 0.649636,
0.430377, 0.751471, 0.503585,
0.405013, 0.690412, 0.602352,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.245477, -0.827608, -0.507827,
0.221748, -0.770590, -0.600083,
0.347231, -0.820767, -0.457350,
0.297794, -0.701919, -0.649636,
0.430377, -0.751471, -0.503585,
0.405013, -0.690412, -0.602352,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, -0.827608, 0.507827,
-0.221748, -0.770590, 0.600083,
-0.347231, -0.820767, 0.457350,
-0.297794, -0.701919, 0.649636,
-0.430377, -0.751471, 0.503585,
-0.405013, -0.690412, 0.602352,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.245477, 0.827608, -0.507827,
-0.221748, 0.770590, -0.600083,
-0.347231, 0.820767, -0.457350,
-0.297794, 0.701919, -0.649636,
-0.430377, 0.751471, -0.503585,
-0.405013, 0.690412, -0.602352,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, -0.241314, 0.802249,
0.516013, -0.348834, 0.784503,
0.635360, -0.196763, 0.748788,
0.574925, -0.415490, 0.707363,
0.696301, -0.255961, 0.673087,
0.667525, -0.367757, 0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.548859, 0.241314, -0.802249,
0.516013, 0.348834, -0.784503,
0.635360, 0.196763, -0.748788,
0.574925, 0.415490, -0.707363,
0.696301, 0.255961, -0.673087,
0.667525, 0.367757, -0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, 0.241314, 0.802249,
-0.516013, 0.348834, 0.784503,
-0.635360, 0.196763, 0.748788,
-0.574925, 0.415490, 0.707363,
-0.696301, 0.255961, 0.673087,
-0.667525, 0.367757, 0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.548859, -0.241314, -0.802249,
-0.516013, -0.348834, -0.784503,
-0.635360, -0.196763, -0.748788,
-0.574925, -0.415490, -0.707363,
-0.696301, -0.255961, -0.673087,
-0.667525, -0.367757, -0.650150,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, -0.548859, 0.241314,
0.784503, -0.516013, 0.348834,
0.748788, -0.635360, 0.196763,
0.707363, -0.574925, 0.415490,
0.673087, -0.696301, 0.255961,
0.650150, -0.667525, 0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.802249, 0.548859, -0.241314,
0.784503, 0.516013, -0.348834,
0.748788, 0.635360, -0.196763,
0.707363, 0.574925, -0.415490,
0.673087, 0.696301, -0.255961,
0.650150, 0.667525, -0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, 0.548859, 0.241314,
-0.784503, 0.516013, 0.348834,
-0.748788, 0.635360, 0.196763,
-0.707363, 0.574925, 0.415490,
-0.673087, 0.696301, 0.255961,
-0.650150, 0.667525, 0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.802249, -0.548859, -0.241314,
-0.784503, -0.516013, -0.348834,
-0.748788, -0.635360, -0.196763,
-0.707363, -0.574925, -0.415490,
-0.673087, -0.696301, -0.255961,
-0.650150, -0.667525, -0.367757,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, -0.802249, 0.548859,
0.348834, -0.784503, 0.516013,
0.196763, -0.748788, 0.635360,
0.415490, -0.707363, 0.574925,
0.255961, -0.673087, 0.696301,
0.367757, -0.650150, 0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.241314, 0.802249, -0.548859,
0.348834, 0.784503, -0.516013,
0.196763, 0.748788, -0.635360,
0.415490, 0.707363, -0.574925,
0.255961, 0.673087, -0.696301,
0.367757, 0.650150, -0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, 0.802249, 0.548859,
-0.348834, 0.784503, 0.516013,
-0.196763, 0.748788, 0.635360,
-0.415490, 0.707363, 0.574925,
-0.255961, 0.673087, 0.696301,
-0.367757, 0.650150, 0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.241314, -0.802249, -0.548859,
-0.348834, -0.784503, -0.516013,
-0.196763, -0.748788, -0.635360,
-0.415490, -0.707363, -0.574925,
-0.255961, -0.673087, -0.696301,
-0.367757, -0.650150, -0.667525,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, -0.038720, 0.989394,
0.034135, -0.049111, 1.000000,
0.218219, -0.133007, 0.968550,
-0.017129, -0.156873, 0.989292,
0.169912, -0.239836, 0.957675,
0.051465, -0.253243, 0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.151867, 0.038720, -0.989394,
0.034135, 0.049111, -1.000000,
0.218219, 0.133007, -0.968550,
-0.017129, 0.156873, -0.989292,
0.169912, 0.239836, -0.957675,
0.051465, 0.253243, -0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, 0.038720, 0.989394,
-0.034135, 0.049111, 1.000000,
-0.218219, 0.133007, 0.968550,
0.017129, 0.156873, 0.989292,
-0.169912, 0.239836, 0.957675,
-0.051465, 0.253243, 0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.151867, -0.038720, -0.989394,
-0.034135, -0.049111, -1.000000,
-0.218219, -0.133007, -0.968550,
0.017129, -0.156873, -0.989292,
-0.169912, -0.239836, -0.957675,
-0.051465, -0.253243, -0.967907,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, -0.151867, 0.038720,
1.000000, -0.034135, 0.049111,
0.968550, -0.218219, 0.133007,
0.989292, 0.017129, 0.156873,
0.957675, -0.169912, 0.239836,
0.967907, -0.051465, 0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.989394, 0.151867, -0.038720,
1.000000, 0.034135, -0.049111,
0.968550, 0.218219, -0.133007,
0.989292, -0.017129, -0.156873,
0.957675, 0.169912, -0.239836,
0.967907, 0.051465, -0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, 0.151867, 0.038720,
-1.000000, 0.034135, 0.049111,
-0.968550, 0.218219, 0.133007,
-0.989292, -0.017129, 0.156873,
-0.957675, 0.169912, 0.239836,
-0.967907, 0.051465, 0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.989394, -0.151867, -0.038720,
-1.000000, -0.034135, -0.049111,
-0.968550, -0.218219, -0.133007,
-0.989292, 0.017129, -0.156873,
-0.957675, -0.169912, -0.239836,
-0.967907, -0.051465, -0.253243,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, -0.989394, 0.151867,
0.049111, -1.000000, 0.034135,
0.133007, -0.968550, 0.218219,
0.156873, -0.989292, -0.017129,
0.239836, -0.957675, 0.169912,
0.253243, -0.967907, 0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.038720, 0.989394, -0.151867,
0.049111, 1.000000, -0.034135,
0.133007, 0.968550, -0.218219,
0.156873, 0.989292, 0.017129,
0.239836, 0.957675, -0.169912,
0.253243, 0.967907, -0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, 0.989394, 0.151867,
-0.049111, 1.000000, 0.034135,
-0.133007, 0.968550, 0.218219,
-0.156873, 0.989292, -0.017129,
-0.239836, 0.957675, 0.169912,
-0.253243, 0.967907, 0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.038720, -0.989394, -0.151867,
-0.049111, -1.000000, -0.034135,
-0.133007, -0.968550, -0.218219,
-0.156873, -0.989292, 0.017129,
-0.239836, -0.957675, -0.169912,
-0.253243, -0.967907, -0.051465,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.186862, 0.267263, 0.947199,
0.300802, 0.266631, 0.917511,
0.119955, 0.364061, 0.925578,
0.350348, 0.359869, 0.866726,
0.170230, 0.460027, 0.873497,
0.286353, 0.457208, 0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.186862, -0.267263, -0.947199,
0.300802, -0.266631, -0.917511,
0.119955, -0.364061, -0.925578,
0.350348, -0.359869, -0.866726,
0.170230, -0.460027, -0.873497,
0.286353, -0.457208, -0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.186862, -0.267263, 0.947199,
-0.300802, -0.266631, 0.917511,
-0.119955, -0.364061, 0.925578,
-0.350348, -0.359869, 0.866726,
-0.170230, -0.460027, 0.873497,
-0.286353, -0.457208, 0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.186862, 0.267263, -0.947199,
-0.300802, 0.266631, -0.917511,
-0.119955, 0.364061, -0.925578,
-0.350348, 0.359869, -0.866726,
-0.170230, 0.460027, -0.873497,
-0.286353, 0.457208, -0.844121,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.947199, 0.186862, 0.267263,
0.917511, 0.300802, 0.266631,
0.925578, 0.119955, 0.364061,
0.866726, 0.350348, 0.359869,
0.873497, 0.170230, 0.460027,
0.844121, 0.286353, 0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.947199, -0.186862, -0.267263,
0.917511, -0.300802, -0.266631,
0.925578, -0.119955, -0.364061,
0.866726, -0.350348, -0.359869,
0.873497, -0.170230, -0.460027,
0.844121, -0.286353, -0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.947199, -0.186862, 0.267263,
-0.917511, -0.300802, 0.266631,
-0.925578, -0.119955, 0.364061,
-0.866726, -0.350348, 0.359869,
-0.873497, -0.170230, 0.460027,
-0.844121, -0.286353, 0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.947199, 0.186862, -0.267263,
-0.917511, 0.300802, -0.266631,
-0.925578, 0.119955, -0.364061,
-0.866726, 0.350348, -0.359869,
-0.873497, 0.170230, -0.460027,
-0.844121, 0.286353, -0.457208,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.267263, 0.947199, 0.186862,
0.266631, 0.917511, 0.300802,
0.364061, 0.925578, 0.119955,
0.359869, 0.866726, 0.350348,
0.460027, 0.873497, 0.170230,
0.457208, 0.844121, 0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.267263, -0.947199, -0.186862,
0.266631, -0.917511, -0.300802,
0.364061, -0.925578, -0.119955,
0.359869, -0.866726, -0.350348,
0.460027, -0.873497, -0.170230,
0.457208, -0.844121, -0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.267263, -0.947199, 0.186862,
-0.266631, -0.917511, 0.300802,
-0.364061, -0.925578, 0.119955,
-0.359869, -0.866726, 0.350348,
-0.460027, -0.873497, 0.170230,
-0.457208, -0.844121, 0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.267263, 0.947199, -0.186862,
-0.266631, 0.917511, -0.300802,
-0.364061, 0.925578, -0.119955,
-0.359869, 0.866726, -0.350348,
-0.460027, 0.873497, -0.170230,
-0.457208, 0.844121, -0.286353,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.187360, -0.432312, 0.884084,
0.068490, -0.447333, 0.893771,
0.252218, -0.512440, 0.823024,
0.016951, -0.542186, 0.842188,
0.198481, -0.605595, 0.772867,
0.082584, -0.619716, 0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.187360, 0.432312, -0.884084,
0.068490, 0.447333, -0.893771,
0.252218, 0.512440, -0.823024,
0.016951, 0.542186, -0.842188,
0.198481, 0.605595, -0.772867,
0.082584, 0.619716, -0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.187360, 0.432312, 0.884084,
-0.068490, 0.447333, 0.893771,
-0.252218, 0.512440, 0.823024,
-0.016951, 0.542186, 0.842188,
-0.198481, 0.605595, 0.772867,
-0.082584, 0.619716, 0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.187360, -0.432312, -0.884084,
-0.068490, -0.447333, -0.893771,
-0.252218, -0.512440, -0.823024,
-0.016951, -0.542186, -0.842188,
-0.198481, -0.605595, -0.772867,
-0.082584, -0.619716, -0.782644,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.884084, -0.187360, 0.432312,
0.893771, -0.068490, 0.447333,
0.823024, -0.252218, 0.512440,
0.842188, -0.016951, 0.542186,
0.772867, -0.198481, 0.605595,
0.782644, -0.082584, 0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.884084, 0.187360, -0.432312,
0.893771, 0.068490, -0.447333,
0.823024, 0.252218, -0.512440,
0.842188, 0.016951, -0.542186,
0.772867, 0.198481, -0.605595,
0.782644, 0.082584, -0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.884084, 0.187360, 0.432312,
-0.893771, 0.068490, 0.447333,
-0.823024, 0.252218, 0.512440,
-0.842188, 0.016951, 0.542186,
-0.772867, 0.198481, 0.605595,
-0.782644, 0.082584, 0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.884084, -0.187360, -0.432312,
-0.893771, -0.068490, -0.447333,
-0.823024, -0.252218, -0.512440,
-0.842188, -0.016951, -0.542186,
-0.772867, -0.198481, -0.605595,
-0.782644, -0.082584, -0.619716,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.432312, -0.884084, 0.187360,
0.447333, -0.893771, 0.068490,
0.512440, -0.823024, 0.252218,
0.542186, -0.842188, 0.016951,
0.605595, -0.772867, 0.198481,
0.619716, -0.782644, 0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.432312, 0.884084, -0.187360,
0.447333, 0.893771, -0.068490,
0.512440, 0.823024, -0.252218,
0.542186, 0.842188, -0.016951,
0.605595, 0.772867, -0.198481,
0.619716, 0.782644, -0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.432312, 0.884084, 0.187360,
-0.447333, 0.893771, 0.068490,
-0.512440, 0.823024, 0.252218,
-0.542186, 0.842188, 0.016951,
-0.605595, 0.772867, 0.198481,
-0.619716, 0.782644, 0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.432312, -0.884084, -0.187360,
-0.447333, -0.893771, -0.068490,
-0.512440, -0.823024, -0.252218,
-0.542186, -0.842188, -0.016951,
-0.605595, -0.772867, -0.198481,
-0.619716, -0.782644, -0.082584,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412998, -0.383799, 0.828006,
0.365816, -0.487560, 0.795010,
0.516013, -0.348834, 0.784503,
0.424056, -0.556980, 0.716624,
0.574925, -0.415490, 0.707363,
0.529710, -0.520574, 0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.412998, 0.383799, -0.828006,
0.365816, 0.487560, -0.795010,
0.516013, 0.348834, -0.784503,
0.424056, 0.556980, -0.716624,
0.574925, 0.415490, -0.707363,
0.529710, 0.520574, -0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412998, 0.383799, 0.828006,
-0.365816, 0.487560, 0.795010,
-0.516013, 0.348834, 0.784503,
-0.424056, 0.556980, 0.716624,
-0.574925, 0.415490, 0.707363,
-0.529710, 0.520574, 0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.412998, -0.383799, -0.828006,
-0.365816, -0.487560, -0.795010,
-0.516013, -0.348834, -0.784503,
-0.424056, -0.556980, -0.716624,
-0.574925, -0.415490, -0.707363,
-0.529710, -0.520574, -0.672335,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.828006, -0.412998, 0.383799,
0.795010, -0.365816, 0.487560,
0.784503, -0.516013, 0.348834,
0.716624, -0.424056, 0.556980,
0.707363, -0.574925, 0.415490,
0.672335, -0.529710, 0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.828006, 0.412998, -0.383799,
0.795010, 0.365816, -0.487560,
0.784503, 0.516013, -0.348834,
0.716624, 0.424056, -0.556980,
0.707363, 0.574925, -0.415490,
0.672335, 0.529710, -0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.828006, 0.412998, 0.383799,
-0.795010, 0.365816, 0.487560,
-0.784503, 0.516013, 0.348834,
-0.716624, 0.424056, 0.556980,
-0.707363, 0.574925, 0.415490,
-0.672335, 0.529710, 0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.828006, -0.412998, -0.383799,
-0.795010, -0.365816, -0.487560,
-0.784503, -0.516013, -0.348834,
-0.716624, -0.424056, -0.556980,
-0.707363, -0.574925, -0.415490,
-0.672335, -0.529710, -0.520574,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.383799, -0.828006, 0.412998,
0.487560, -0.795010, 0.365816,
0.348834, -0.784503, 0.516013,
0.556980, -0.716624, 0.424056,
0.415490, -0.707363, 0.574925,
0.520574, -0.672335, 0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.383799, 0.828006, -0.412998,
0.487560, 0.795010, -0.365816,
0.348834, 0.784503, -0.516013,
0.556980, 0.716624, -0.424056,
0.415490, 0.707363, -0.574925,
0.520574, 0.672335, -0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.383799, 0.828006, 0.412998,
-0.487560, 0.795010, 0.365816,
-0.348834, 0.784503, 0.516013,
-0.556980, 0.716624, 0.424056,
-0.415490, 0.707363, 0.574925,
-0.520574, 0.672335, 0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.383799, -0.828006, -0.412998,
-0.487560, -0.795010, -0.365816,
-0.348834, -0.784503, -0.516013,
-0.556980, -0.716624, -0.424056,
-0.415490, -0.707363, -0.574925,
-0.520574, -0.672335, -0.529710,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.261131, 0.629525, 0.734147,
0.331681, 0.542792, 0.773913,
0.297794, 0.701919, 0.649636,
0.441186, 0.529264, 0.727210,
0.405013, 0.690412, 0.602352,
0.478245, 0.603846, 0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.261131, -0.629525, -0.734147,
0.331681, -0.542792, -0.773913,
0.297794, -0.701919, -0.649636,
0.441186, -0.529264, -0.727210,
0.405013, -0.690412, -0.602352,
0.478245, -0.603846, -0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.261131, -0.629525, 0.734147,
-0.331681, -0.542792, 0.773913,
-0.297794, -0.701919, 0.649636,
-0.441186, -0.529264, 0.727210,
-0.405013, -0.690412, 0.602352,
-0.478245, -0.603846, 0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.261131, 0.629525, -0.734147,
-0.331681, 0.542792, -0.773913,
-0.297794, 0.701919, -0.649636,
-0.441186, 0.529264, -0.727210,
-0.405013, 0.690412, -0.602352,
-0.478245, 0.603846, -0.640528,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.734147, 0.261131, 0.629525,
0.773913, 0.331681, 0.542792,
0.649636, 0.297794, 0.701919,
0.727210, 0.441186, 0.529264,
0.602352, 0.405013, 0.690412,
0.640528, 0.478245, 0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.734147, -0.261131, -0.629525,
0.773913, -0.331681, -0.542792,
0.649636, -0.297794, -0.701919,
0.727210, -0.441186, -0.529264,
0.602352, -0.405013, -0.690412,
0.640528, -0.478245, -0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.734147, -0.261131, 0.629525,
-0.773913, -0.331681, 0.542792,
-0.649636, -0.297794, 0.701919,
-0.727210, -0.441186, 0.529264,
-0.602352, -0.405013, 0.690412,
-0.640528, -0.478245, 0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.734147, 0.261131, -0.629525,
-0.773913, 0.331681, -0.542792,
-0.649636, 0.297794, -0.701919,
-0.727210, 0.441186, -0.529264,
-0.602352, 0.405013, -0.690412,
-0.640528, 0.478245, -0.603846,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.629525, 0.734147, 0.261131,
0.542792, 0.773913, 0.331681,
0.701919, 0.649636, 0.297794,
0.529264, 0.727210, 0.441186,
0.690412, 0.602352, 0.405013,
0.603846, 0.640528, 0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
0.629525, -0.734147, -0.261131,
0.542792, -0.773913, -0.331681,
0.701919, -0.649636, -0.297794,
0.529264, -0.727210, -0.441186,
0.690412, -0.602352, -0.405013,
0.603846, -0.640528, -0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.629525, -0.734147, 0.261131,
-0.542792, -0.773913, 0.331681,
-0.701919, -0.649636, 0.297794,
-0.529264, -0.727210, 0.441186,
-0.690412, -0.602352, 0.405013,
-0.603846, -0.640528, 0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

vertexBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffers[vertexBuffers.length - 1]);
var vertices =
[
-0.629525, 0.734147, -0.261131,
-0.542792, 0.773913, -0.331681,
-0.701919, 0.649636, -0.297794,
-0.529264, 0.727210, -0.441186,
-0.690412, 0.602352, -0.405013,
-0.603846, 0.640528, -0.478245,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
vertexBuffers[vertexBuffers.length - 1].itemSize = 3;
vertexBuffers[vertexBuffers.length - 1].numItems = 6;

}
function initColorBuffers5(gl, colorBuffers)
{
colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 5;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 5;

}
function initColorBuffers6(gl, colorBuffers)
{
colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
1.000000, 0.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
0.000000, 1.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
0.000000, 0.000000, 1.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
1.000000, 1.000000, 1.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 6;

colorBuffers.push(gl.createBuffer());
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffers[colorBuffers.length - 1]);
var colors =
[
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
0.000000, 0.000000, 0.000000, 1.000000,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
colorBuffers[colorBuffers.length - 1].itemSize = 4;
colorBuffers[colorBuffers.length - 1].numItems = 6;

}
