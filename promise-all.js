//Promise.all([]) takes an array of promises

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

// const fetchData = async () => {
//   Promise.all([customers, addresses])
//     .then((values) => {
//       const [c, a] = values;
//       console.log(a);
//       console.log(c);
//     })
//     .catch((err) => console.log(err));
// };

const fetchData = async () => {
  try {
    const values = await Promise.all([customers, addresses]);
    const [c, a] = values;
    console.log(a);
    console.log(c);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
