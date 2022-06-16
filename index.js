// holy shit this is a mess but it works!!

const { load: parse } = require("js-yaml")
const { readFileSync, writeFileSync } = require("fs")

const file = parse(readFileSync("./config.yaml", "utf8"))["links"]

let the = ""
for (let i = 0; i < file.length; i++)
{
  let div = `\t\t<h1>~/<span>${Object.keys(file[i])[0]}</span></h1>`
  
  for (const x of file[i][Object.keys(file[i])])
  {
    div = div + `\n\t\t\t<h2>| <a href="${x[Object.keys(x)[0]]}" target="_blank">${Object.keys(x)[0]}</a></h2>`
  }
  
  the = the + `${i !== 0 && i % 4 == 0 ? "\n\t\t<div></div>\n" : ""}\n\t\t<div>\n\t${div}\n\t\t</div>\n`
  div = ""
}

const saturn = 
`
\t\t<pre>
                                         <span>_.oo.</span>
                 _.u[[/;:,.         <span>.odMMMMMM'</span>
              .o888UU[[[/;:-.  <span>.o@P^    MMM^</span>
             oN88888UU[[[/;::-.        <span>dP^</span>
            dNMMNN888UU[[[/;:--.   <span>.o@P^</span>
           ,MMMMMM:)88UU[[/;::-. <span>o@^</span>
           NNMMMNN888UU[[[/~.<span>o@P^</span>
           888888888UU[[[/<span>o@^</span>-..
          <span>.</span>oI8888UU[[[/<span>o@P^</span>:--..
       <span>.@^</span>  YUU[[[/<span>o@^</span>;::---...
     <span>oMP</span>     ^/<span>o@P^</span>;:::---...
  <span>.dMMM    .o@^</span> ^;::---....
 <span>dMMMMMMM@^\`</span>       \`^^^^
<span>YMMMUP^</span>
 <span>^^</span>
</pre>
`

writeFileSync("src/page.html", `<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>~</title>\n\t\t<link rel="stylesheet" href="style.css">\n\t</head>\n\n\t<body>${saturn}${the}\t</body>\n</html>`)
console.log("lets gooo")
