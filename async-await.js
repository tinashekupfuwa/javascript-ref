//Async Await

const customers = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 5_000_000_000) i++;
    resolve([
      { name: "Jamila", id: 1 },
      { name: "Bob", id: 2 },
    ]);
  });
});

const addresses = new Promise((resolve, reject) => {
  return Promise.resolve().then(() => {
    let i = 0;
    while (i < 5_000_000) i++;
    resolve([
      { customerId: 1, address: "London" },
      { customerId: 2, address: "USA" },
    ]);
  });
});

// const fetchData = () => {
//   customers.then((c) => {
//     addresses
//       .then((a) => {
//         console.log(c);
//         console.log(a);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// };

// const fetchData = async () => {
//   try {
//     const c = await customers;
//     const a = await addresses;
//     console.log(c);
//     console.log(a);
//   } catch (error) {
//     console.log(error);
//   }
// };

const fetchData = async () => {
  try {
    const c = await customers;
    const a = await addresses;
    console.log(c);
    console.log(a);
  } catch (error) {
    console.log(err);
  }
};

fetchData();
