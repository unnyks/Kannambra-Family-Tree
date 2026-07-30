async function loadTree()
{
    const response = await fetch("tree.xml");

    const xmlText = await response.text();

    const parser = new DOMParser();

    const xml = parser.parseFromString(xmlText, "text/xml");

    const firstPerson =
        xml.querySelector("Person Name");

    document.getElementById("output").innerHTML =
        firstPerson.textContent;
}

loadTree();
