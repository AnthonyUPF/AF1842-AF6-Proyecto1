// const eventosData = {
//     "page": 1,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 1,
//             "email": "george.bluth@reqres.in",
//             "first_name": "George",
//             "last_name": "Bluth",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 2,
//             "email": "janet.weaver@reqres.in",
//             "first_name": "Janet",
//             "last_name": "Weaver",
//             "avatar": "https://reqres.in/img/faces/2-image.jpg"
//         },
//         {
//             "id": 3,
//             "email": "emma.wong@reqres.in",
//             "first_name": "Emma",
//             "last_name": "Wong",
//             "avatar": "https://reqres.in/img/faces/3-image.jpg"
//         },
//         {
//             "id": 4,
//             "email": "eve.holt@reqres.in",
//             "first_name": "Eve",
//             "last_name": "Holt",
//             "avatar": "https://reqres.in/img/faces/4-image.jpg"
//         },
//         {
//             "id": 5,
//             "email": "charles.morris@reqres.in",
//             "first_name": "Charles",
//             "last_name": "Morris",
//             "avatar": "https://reqres.in/img/faces/5-image.jpg"
//         },
//         {
//             "id": 6,
//             "email": "tracey.ramos@reqres.in",
//             "first_name": "Tracey",
//             "last_name": "Ramos",
//             "avatar": "https://reqres.in/img/faces/6-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// };

// const eventosJSON = {
//     "eventos": [
//         {
//             "id": 1,
//             "nombre": "Festival de Música Indie",
//             "fecha": "2023-08-15",
//             "hora": "19:30",
//             // "lugar": "Parque Central",
//             // "categoria": "Música",
//             // "hashtag": "#Pop",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 2,
//             "nombre": "Exposición de Arte Urbano",
//             "fecha": "2023-09-05",
//             "hora": "11:00",
//             // "lugar": "Galería de Arte Contemporáneo",
//             // "categoria": "Arte",
//             // "hashtag": "#ArteUrbano",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 3,
//             "nombre": "Festival de Cine Juvenil",
//             "fecha": "2023-10-20",
//             "hora": "15:00",
//             // "lugar": "Teatro Principal",
//             // "categoria": "Cine",
//             // "hashtag": "#CineJuvenil",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 4,
//             "nombre": "Taller de Escritura Creativa para Jóvenes",
//             "fecha": "2023-11-08",
//             "hora": "18:00",
//             // "lugar": "Biblioteca Pública",
//             // "categoria": "Literatura",
//             // "hashtag": "#EscrituraCreativaJóvenes",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 5,
//             "nombre": "Feria de Comida Callejera",
//             "fecha": "2023-12-02",
//             "hora": "12:30",
//             // "lugar": "Plaza del Sabor",
//             // "categoria": "Gastronomía",
//             // "hashtag": "#ComidaCallejera",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 6,
//             "nombre": "Partido de Baloncesto",
//             "fecha": "2023-12-15",
//             "hora": "20:00",
//             // "lugar": "Polideportivo Municipal",
//             // "categoria": "Deportes",
//             // "hashtag": "#Baloncesto",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//     ]
// };



// // Wait for the DOM content to load
// window.addEventListener('DOMContentLoaded', function() {
//   const card = document.querySelector('.card');
//   const image = card.querySelector('.card-img-top');
//   const title = card.querySelector('.card-title');
//   const text = card.querySelector('.card-text');

//   const titleInput = document.querySelector('.title');
//   const h1= document.createElement('h1');
//   h1.style.textAlign = "center"; // Aplica alineación centrada al elemento <h1>
//   h1.style.margin = "0";
//   h1.textContent = "Eventos";
//   titleInput.appendChild(h1);  


//   // Step 2: Update the card elements with event data
//   eventosJSON.data.forEach(function(event, index) {
//     if (index > 0) {
//       // Clone the existing card element for additional events
//       const newCard = card.cloneNode(true);

//       // Select elements within the new card
//       const newImage = newCard.querySelector('.card-img-top');
//       const newTitle = newCard.querySelector('.card-title');
//       const newText = newCard.querySelector('.card-text');
      

//       // Update the content of the new card
//       newImage.src = event.avatar;
//       newTitle.textContent = event.nombre + ' ' + event.fecha;
//       newText.textContent = event.hora;
//     //   newText.textContent =event.hora;
//     //   newText.textContent =event.lugar;
//     //   newText.textContent =event.categoria;
//     //   newText.textContent =event.hashtag;

//       // Append the new card to the container
//       card.parentNode.appendChild(newCard);
//     } else {
//       // Update the content of the first card
//       image.src = event.avatar;
//       title.textContent = event.nombre + ' ' + event.fecha;
//       text.textContent =event.hora;
//     //   text.textContent =event.hora;
//     //   text.textContent =event.lugar;
//     //   text.textContent =event.categoria;
//     //   text.textContent =event.hashtag;
//     }
//   });
// });

const eventsData = {
    // "page": 1,
    // "per_page": 6,
    // "total": 12,
    // "total_pages": 2,
    "data": [
        {
            "id": 1,
            "nombre": "Festival de Música Indie",
            "fecha": "2023-08-15",
            "hora": "19:30",
            "lugar": "Parque Central",
            "categoria": "Música",
            "hashtag": "#Pop",
            "avatar": "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"
        },
        {
            "id": 2,
            "email": "janet.weaver@reqres.in",
            "nombre": "Exposición de Arte Urbano",
            "fecha": "2023-09-05",
            "hora": "11:00",
            "lugar": "Galería de Arte Contemporáneo",
            "categoria": "Arte",
            "hashtag": "#ArteUrbano",
            "avatar": "https://cdn.pixabay.com/photo/2023/05/18/15/48/graffiti-8002611_1280.jpg"
        },
        {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "nombre": "Festival de Cine Juvenil",
            "fecha": "2023-10-20",
            "hora": "15:00",
            "lugar": "Teatro Principal",
            "categoria": "Cine",
            "hashtag": "#CineJuvenil",
            "avatar": "https://cdn.pixabay.com/photo/2016/09/22/13/51/bollywood-1687410_1280.jpg"
        },
        {
            "id": 4,
            "email": "eve.holt@reqres.in",
            "nombre": "Taller de Escritura Creativa para Jóvenes",
            "fecha": "2023-11-08",
            "hora": "18:00",
            "lugar": "Biblioteca Pública",
            "categoria": "Literatura",
            "hashtag": "#EscrituraCreativaJóvenes",
            "avatar": "https://cdn.pixabay.com/photo/2014/09/05/18/33/old-letters-436501_1280.jpg"
        },
        {
            "id": 5,
            "email": "charles.morris@reqres.in",
            "nombre": "Feria de Comida Callejera",
            "fecha": "2023-12-02",
            "hora": "12:30",
            "lugar": "Plaza del Sabor",
            "categoria": "Gastronomía",
            "hashtag": "#ComidaCallejera",
            "avatar": "https://cdn.pixabay.com/photo/2016/04/05/08/53/korean-street-food-1308958_1280.jpg"
        },
        {
            "id": 6,
            "email": "tracey.ramos@reqres.in",
            "nombre": "Partido de Baloncesto",
            "fecha": "2023-12-15",
            "hora": "20:00",
            "lugar": "Polideportivo Municipal",
            "categoria": "Deportes",
            "hashtag": "#Baloncesto",
            "avatar": "https://cdn.pixabay.com/photo/2018/09/04/12/13/basketball-3653674_1280.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
};



// Wait for the DOM content to load
window.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.card');
  const image = card.querySelector('.card-img-top');
  const title = card.querySelector('.card-title');
  const text = card.querySelector('.card-text');

  const titleInput = document.querySelector('.title');
  const h1= document.createElement('h1');
  h1.style.textAlign = "center"; // Aplica alineación centrada al elemento <h1>
  h1.style.margin = "0";
  h1.textContent = "Eventos";
  titleInput.appendChild(h1);  


  // Step 2: Update the card elements with user data
  eventsData.data.forEach(function(event, index) {
    if (index > 0) {
      // Clone the existing card element for additional users
      const newCard = card.cloneNode(true);

      // Select elements within the new card
      const newImage = newCard.querySelector('.card-img-top');
      const newTitle = newCard.querySelector('.card-title');
      const newText = newCard.querySelector('.card-text');
      const newText2 = newCard.querySelector('.card-text2');


      // Update the content of the new card
      newImage.src = event.avatar;
      newTitle.textContent = event.nombre;
      newText.textContent = event.fecha + ' (' + event.hora + ') ';
      newText2.textContent = event.lugar;
  

      // Append the new card to the container
      card.parentNode.appendChild(newCard);
    
     } else {
       // Update the content of the first card
       image.src = event.avatar;
       title.textContent = event.nombre;
       text.textContent = event.fecha + ' (' + event.hora + ') ';
     }
  });
});