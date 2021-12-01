const DummyExpenses = () =>{
    const dummyExpense = [
        {
          id: "a1",
          title: "Food items",
          amount: 135.29,
          date: new Date(2020, 3, 27),
        },
        {
          id: "a2",
          title: "Room rent",
          amount: 120.0,
          date: new Date(2021, 5, 12),
        },
        {
          id: "a3",
          title: "Bike Inurance",
          amount: 520.22,
          date: new Date(2020, 5, 30),
        },
        {
          id: "a4",
          title: "Clothing",
          amount: 311.21,
          date: new Date(2021, 6, 20),
        },
      ];

    return dummyExpense;
}

export default DummyExpenses;