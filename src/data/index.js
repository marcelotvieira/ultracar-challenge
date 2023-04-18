const clients = [
  {
    id: 1,
    name: 'Ana Clara',
    email: 'anaclara@contato.com',
    phone: 'XX999999999',
    vehicles: [
      {
        brand: 'Ford',
        model: 'Fusion',
        year: '2019',    
        license: 'MMM-111'           
      },
      {
        brand: 'Fiat',
        model: 'Palio',
        year: '2013',   
        license: 'RRR-222'           
      },
    ],
    services: [
      1,
      2,
      3,
    ]
  }
];

const employees = [
  {
    id: 1,
    fullName: 'João da Silva',
    initialDate: new Date('2020-01-01'),
    active: true,

  },
  {
    id: 2,
    fullName: 'Maria Santos',
    initialDate: new Date('2019-03-15'),
    active: false,

  },
  {
    id: 3,
    fullName: 'Pedro Oliveira',
    initialDate: new Date('2022-02-10'),
    active: false,

  },
  {
    id: 4,
    fullName: 'Luciana Souza',
    initialDate: new Date('2021-07-20'),
    active: true,
  }
];

const carParts = [
  {
    id: 1,
    brand: 'Bosch',
    name: 'Bateria',
    price: 500.00
  },
  {
    id: 2,
    brand: 'Fram',
    name: 'Filtro de óleo',
    price: 40.00
  },
  {
    id: 3,
    brand: 'Continental',
    name: 'Pneu',
    price: 400.00
  },
  {
    id: 4,
    brand: 'Mobil',
    name: 'Óleo de motor',
    price: 80.00
  },
  {
    id: 5,
    brand: 'Brembo',
    name: 'Pastilha de freio',
    price: 200.00
  }
];

const services = [
  {
    id: 1,
    clientId: 1,
    employeeId: 4,
    value: 4000,
    spareParts: [1, 3, 4, 2, 5],
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 2,
    clientId: 1,
    employeeId: 1,
    value: 3000,
    spareParts: [1, 3],
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 3,
    clientId: 1,
    employeeId: 4,
    spareParts: [2],
    value: 700,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 4,
    clientId: 1,
    employeeId: 2,
    spareParts: [3],
    value: 1200,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 5,
    clientId: 1,
    employeeId: 4,
    spareParts: [2],
    value: 2400,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 6,
    clientId: 1,
    employeeId: 2,
    spareParts: [3, 5],
    value: 6000,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 7,
    clientId: 1,
    employeeId: 3,
    spareParts: [4, 2],
    value: 7600,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 8,
    clientId: 1,
    employeeId: 2,
    spareParts: [1, 2],
    value: 1400,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 9,
    clientId: 1,
    employeeId: 4,
    spareParts: [5, 1],
    value: 400,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 10,
    clientId: 1,
    employeeId: 2,
    spareParts: [4, 3],
    value: 690,
    description: 'Breve descrição sobre o serviço a ser executado',
  },
  {
    id: 11,
    clientId: 1,
    employeeId: 3,
    spareParts: [1, 2],
    value: 1450,
    description: 'Breve descrição sobre o serviço a ser executado',
  },

];



export {
  employees,
  clients,
  carParts,
  services,
};