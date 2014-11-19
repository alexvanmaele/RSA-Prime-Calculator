// Pad a number with digits on the left
// e.g. 61 into 4 digits --> padLeft(61, 4) --> 0061
function padLeft(nr, n, str)
{
    return Array(n-String(nr).length+1).join(str||'0')+nr;
}