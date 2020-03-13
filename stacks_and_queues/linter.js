//==============================================================================
/*
========================_Simple_JS_Linter_for_()_[]_{}_=========================
=============================_How_Algorithm_Works_==============================

1) if you encounter a (), [], or {}, then ignore.
2) if you encounter an opening brace (, then push it on the stack and await to
close it later. The stack only consists of (, [, or {
3) if you find a closing brace/parenths ), then switch if...
a) if the stack is empty, we found a close without an open. This is a syntax error
b) if there is data in the stack but the top is not an opening, then this is
also a syntax error.
c) if the top of the stack closes the brace/parenths, we are successful in closing and
now we pop the top element since it is not needed.
4) if we reach the end of the line and do not encounter a closing brace/parenths ),
then the opening brace/parenths has no closing and this is an error.
5) if, at the end of reading the line, the stack is empty, then no errors
*/
//==============================================================================










//==============================================================================
