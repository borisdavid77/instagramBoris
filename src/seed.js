// eslint-disable-next-line import/prefer-default-export
export function seedDatabase(firebase) {
  const users = [
    {
<<<<<<< HEAD
      userId: "XuJzzxVLlEb2dmZEbvAGl3xMQI63",
=======
      userId: "JaOIZxH3h7QS0KOUXe8VCuHEfdI3",
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
      username: "boris",
      fullName: "Boris David",
      emailAddress: "borisdavid779@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "raphael",
      fullName: "Raffaello Sanzio da Urbino",
      emailAddress: "raphael@sanzio.com",
      following: [],
<<<<<<< HEAD
      followers: ["XuJzzxVLlEb2dmZEbvAGl3xMQI63"],
=======
      followers: ["JaOIZxH3h7QS0KOUXe8VCuHEfdI3"],
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "dali",
      fullName: "Salvador Dalí",
      emailAddress: "salvador@dali.com",
      following: [],
<<<<<<< HEAD
      followers: [],
=======
      followers: ["JaOIZxH3h7QS0KOUXe8VCuHEfdI3"],
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "orwell",
      fullName: "George Orwell",
      emailAddress: "george@orwell.com",
      following: [],
<<<<<<< HEAD
      followers: [],
=======
      followers: ["JaOIZxH3h7QS0KOUXe8VCuHEfdI3"],
>>>>>>> 7ae4ad4a182b28aa5d9d73ad9f3d040d6bc884b0
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k += 1) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; i += 1) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
