const fs = require('fs');

fs.readdir("./files", (err, paths) => {
  const quantity = paths.length;
  let fails = 0;

  for (let i = 0; i < quantity; i++) {
    let original = paths[i];
    let file = paths[i].toLowerCase();
    file = file.split(".");
    
    const ext = file[file.length - 1];
    
    filename = file[0];
    
    filename = filename.replace(/\s/g, "_");
    filename = filename.replace(/-/g, "_");
    filename = filename.normalize("NFD").replace(/[\u0300-\u036f()]/g, "");

    const name = `${filename}.${ext}`;

    fs.rename(`./files/${original}`, `./files/${name}`, (err) => {
      if(err) {
        fails += 1;
      }
    });
  }

  
  if(fails !== 0) {
    console.log(`Houveram ${fails} arquivos não renomeados`);
  } else {
    console.log('Todos os arquivos foram renomeados');
  }

  console.log('Fim do programa');
})