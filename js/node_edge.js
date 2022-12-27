// just maintain whitespace
function preTitle(text) {
    const container = document.createElement("pre");
    container.innerText = text;
    return container;
}

// HTML parsing with all XSS goodness
function htmlTitle(html) {
    const container = document.createElement("div");
    container.innerHTML = html;
    return container;
}

var DIR = "./img/";

// create an array with nodes
var nodes = new vis.DataSet([
    {
      id: "me",
      label: "Ji Haein",
      font: {
        size: 25,
        face: 'Rock Salt',
      },
      title: htmlTitle("안녕하세요, 저는 지해인입니다. 그리고 이곳은 제 홈페이지입니다."),
      x: 0,
      y: 0,
      shape: "image",
      image: DIR + "profile.png",
      imagePadding: -15,
      size: "100",
      link: '#',
      fixed: true
    },
    { 
      id: "family",
      label: "Family",
      title: htmlTitle("제 가족들입니다."),
      link: '#'
    },
    { id: "wife", 
      label: "Cheonsan",
      font: {
        size: 20,
        face: 'Rock Salt',
      },
      title: htmlTitle("제 와이프입니다."),
      shape: "image",
      image: DIR + "wife.png",
      imagePadding: -15,
      size: "50",
      link: '#'
    },
    { 
      id: "kokam",
      label: "Kokam",
      font: {
        size: 20,
        face: 'Rock Salt',
      },
      title: htmlTitle("제가 키우는 고슴도치입니다."),
      shape: "image",
      image: DIR + "kokam.png",
      imagePadding: -15,
      size: "50",
      link: '#'
    },
    { 
      id: "webResource",
      label: "Web Resource",
      title: htmlTitle("저와 관련된 웹 페이지들입니다."),
      link: '#'
    },
    { 
      id: "git",
      label: "Github",
      font: {
        size: 20,
        face: 'Rock Salt',
      },
      title: htmlTitle("더블 클릭 시 깃허브 페이지로 이동합니다."),
      shape: "image",
      image: DIR + "github.png",
      imagePadding: -15,
      size: "50",
      link: "https://github.com/Esantomi"
    },
    {
      id: "cv",
      label: "CV",
      font: {
        size: 20,
        face: 'Rock Salt',
      },
      title: htmlTitle("더블 클릭 시 CV 페이지로 이동합니다."),
      shape: "image",
      image: DIR + "cv.png",
      imagePadding: -10,
      size: "50",
      link: "src/cv.pdf"
    },
    { 
      id: "wiki",
      label: "Jangseogak",
      font: {
        size: 20,
        face: 'Rock Salt',
      },
      title: htmlTitle("더블 클릭 시 장서각으로 이동합니다."),
      shape: "image",
      image: DIR + "wiki.png",
      imagePadding: -15,
      size: "20",
      link: "https://wiki.haein.info/"
    },
    { 
      id: "pavilion",
      label: "Pavilion",
      font: {
        size: 20,
        face: 'Rock Salt',
      },
      title: htmlTitle("더블 클릭 시 파빌리온 페이지로 이동합니다. (현재 미완)"),
      shape: "image",
      image: DIR + "pavilion.png",
      imagePadding: -15,
      size: "50",
      link: "http://dh.aks.ac.kr/~haein/pavilion/220512/ADG.htm"
    },
    { 
      id: "hobby",
      label: "Hobby",
      title: htmlTitle("제 취미들입니다."),
      link: '#'
    },
    { 
      id: "cartoon",
      label: "Cartoon",
      font: {
        size: 20,
        face: 'Rock Salt',
      },
      title: htmlTitle("더블 클릭 시 hedgehogtoon으로 이동합니다."),
      shape: "image",
      image: DIR + "cartoon.png",
      imagePadding: -15,
      size: "50",
      link: "https://hedgehogtoon.site/"
    },
    { 
      id: "work",
      label: "Work",
      title: htmlTitle("제 성과들입니다. 추후 추가될 예정입니다."),
      link: '#'
    }
]);

// create an array with edges
var edges = new vis.DataSet([
    { from: 'family', to: 'me', label: "foaf:member", arrows: "to" },
    { from: 'family', to: 'wife', label: "foaf:member", arrows: "to" },
    { from: 'family', to: 'kokam', label: "foaf:member", arrows: "to" },
    { from: 'me', to: 'webResource', label: "dcterms:creator", arrows: "to" },
    { from: 'git', to: 'webResource', label: "foaf:page", arrows: "to" },
    { from: 'cv', to: 'me', label: "dcterms:description", arrows: "to" },
    { from: 'wiki', to: 'webResource', label: "foaf:page", arrows: "to" },
    { from: 'pavilion', to: 'webResource', label: "foaf:page", arrows: "to" },
    { from: 'me', to: 'hobby', label: "foaf:interest", arrows: "to" },
    { from: 'cartoon', to: 'hobby', label: "dcterms:isPartOf", arrows: "to" },
    { from: 'cartoon', to: 'kokam', label: "foaf:depicts", arrows: "to" },
    { from: 'cartoon', to: 'webResource', label: "foaf:page", arrows: "to" },
    { from: 'me', to: 'work', label: "dcterms:creator", arrows: "to" },
]);
