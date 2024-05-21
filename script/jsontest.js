async function populate() {
    const requestURL =
      "/characters.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const characters = await response.json();
    
    console.log(characters)
    populateHeader(characters);

  }
  
  function populateHeader(obj) {
    const header = document.querySelector('header')
    const myH1 = document.createElement('h1')
    const myP = document.createElement('p')
    let proteus = obj.regions[0].characters[0]
    let myPContent = proteus.personality.join(', ')
    myH1.textContent = proteus.name
    myP.textContent = myPContent
    // myP.textContent = myPContent.replace(",", ", ")
    header.appendChild(myH1)
    header.appendChild(myP)
  }

  populate()