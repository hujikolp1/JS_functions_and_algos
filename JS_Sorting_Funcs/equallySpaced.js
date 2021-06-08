// Algorithm to equally space a variable number of objects onto a line

// --- Vars ---
//
// 1) line length 
// 2) object length 
// 3) equal part lengths 
// 4) plus minus half size of object

var lineLength; 
var objectsNumber; 
var objectsLength; 
var equalParts = lineLength / objectsNumber; 
var halfSize = objectsNumber / 2; 

// --- Output ---
// 
// points on line equal part lengths
// plus and minus halfSize onto each point  