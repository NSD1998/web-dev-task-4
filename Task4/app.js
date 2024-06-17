

let movies = [
    {
      name: "Game of thrones",
      des: "Game of thrones is an American television series created by David Benioff, D.B. Weiss is watch now on  Disney+Hotstar.",
      image: "Image\got slider.png",
  
    },

    {
      name: "Falcon and the winter soldier",
      des: "Falcon and the Winter Soldier is an American television series created for the streaming platform Disney+.",
      image: "Image\The Falcon and the Ws slider.PNG",
    },
    {
      name: "WandaVision",
      des: "WandaVision is an American television series created for the streaming service Disney+",
      image: "Image\Wanda vision slider.PNG",
    },
  
    {
      name: "Raya and the Last Dragon",
      des: "Raya and the Last Dragon is an animated Disney film released in 2021.",
      image: "Image\Raya slider.PNG",
    },
  
    {
      name: "Luca",
      des: "Luca is a Disney-Pixar animated film released in 2021.",
      image: "Image\Luca Slider.PNG",
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      des: "The film chronicles the life of Dhoni from a young age through a series of life events.",
      image: "Image\msd slider.jpg",
    },

    {
      name: "Manjummel boys",
      des: "In 2006, a group of 10 friends from an arts club in Kochi leave on a trip to Kodaikanal in the neighbouring state of Tamil Nadu, during the Onam vacation.",
      image: "Image\manjummel boys slider.jpg",
    },

    {
      name: "Frozen",
      des: "Fearless Anna teams up with Kristoff and a snowman named Olaf to find her sister Elsa, whose icy powers have trapped the kingdom in eternal winter",
      image: "Image\Frozen Slider.jpg",
    },

    {
      name: "Ind vs Pak",
      des: "Live Action On 9 th june",
      image: "Image\ind vs pak slider.jpg",
    },
  ];
  

  const carousel = document.querySelector('.carousel');
  let sliders = [];
  
  let slideIndex = 0;
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    //creating DOM element
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
  
    //attaching all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    //setting up image
    imgElement.src = movies[slideIndex].image;
    imgElement.src = movies[slideIndex].image.replace(/\\/g, '/');
    slideIndex++;
  
    //setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    //adding sliding effect
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 5000);
  
  //video cards
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
  
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  
  //card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });

  // Searching


  document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');
    const cards = document.querySelectorAll('.card');
    const loadingIndicator = document.getElementById('loading-indicator');

    const filterCards = () => {
        const query = searchBox.value.toLowerCase();
        let found = false;

        loadingIndicator.style.display = 'block';
        setTimeout(() => {
            cards.forEach(card => {
                const name = card.getAttribute('data-name').toLowerCase();
                if (name.includes(query)) {
                    card.style.display = 'block';
                    card.classList.add('fade-in');
                    if (!found) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        found = true;
                    }
                } else {
                    card.style.display = 'none';
                }
            });
            loadingIndicator.style.display = 'none';
        }, 500); // Simulate a delay for loading indicator
    };

    searchButton.addEventListener('click', filterCards);

    searchBox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            filterCards();
        }
    });
});
