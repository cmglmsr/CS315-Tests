%option main
digit [0-9]
sign [+-]
%%
{sign}?{digit}*(\.)?{digit}+ {float val;
sscanf(yytext, "%f", &val);
printf(">%f<", val);}
. ;
%%