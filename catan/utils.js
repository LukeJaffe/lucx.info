/* Math */
function feq(a, b) 
{
    if (Math.abs(a-b) < 1e-5)
        return true;
    else
        return false;
}

/* Graphics */
function clippedBackgroundImage(context, img, w, h)
{
    context.save(); // Save the context before clipping
    context.clip(); // Clip to whatever path is on the context

    var imgHeight = w / img.width * img.height;
    if (imgHeight < h)
    {
        context.fillStyle = '#000';
        context.fill();
    }
    context.drawImage(img,-w,-h,2*w,2*imgHeight);

    context.restore(); // Get rid of the clipping region
}

/* Shuffle array */
function shuffle(array, seed) 
{
    /* Seed rng with game seed */
    Math.seedrandom(seed);

    /* stuff */
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) 
    {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
