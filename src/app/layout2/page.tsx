import LayoutSeat, {Layout} from "@/components/LayoutSeat";

const layout: Layout = {
    id: 2,
    maxRow: 7,
    maxColumn: 11,
    rows: [
        {
            name: "D",
            index: 0,
            seats: [
                {
                    name: "8",
                    id: 78,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 0,
                    columnIndex: 0,
                    area: 1
                },
                {
                    name: "7",
                    id: 79,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 0,
                    columnIndex: 1,
                    area: 1
                },
                {
                    name: "6",
                    id: 80,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 0,
                            columnIndex: 3,
                            area: 1
                        },
                        {
                            rowIndex: 0,
                            columnIndex: 4,
                            area: 1
                        }
                    ],
                    rowIndex: 0,
                    columnIndex: 3,
                    area: 2
                },
                {
                    name: "5",
                    id: 81,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 0,
                            columnIndex: 4,
                            area: 1
                        },
                        {
                            rowIndex: 0,
                            columnIndex: 3,
                            area: 1
                        }
                    ],
                    rowIndex: 0,
                    columnIndex: 4,
                    area: 2
                },
                {
                    name: "4",
                    id: 82,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 0,
                    columnIndex: 6,
                    area: 1
                },
                {
                    name: "3",
                    id: 83,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 0,
                    columnIndex: 7,
                    area: 1
                },
                {
                    name: "2",
                    id: 84,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 0,
                            columnIndex: 9,
                            area: 1
                        },
                        {
                            rowIndex: 0,
                            columnIndex: 10,
                            area: 1
                        }
                    ],
                    rowIndex: 0,
                    columnIndex: 9,
                    area: 2
                },
                {
                    name: "1",
                    id: 85,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 0,
                            columnIndex: 10,
                            area: 1
                        },
                        {
                            rowIndex: 0,
                            columnIndex: 9,
                            area: 1
                        }
                    ],
                    rowIndex: 0,
                    columnIndex: 10,
                    area: 2
                }
            ]
        },
        {
            name: "C",
            index: 2,
            seats: [
                {
                    name: "7",
                    id: 86,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 2,
                            columnIndex: 0,
                            area: 1
                        },
                        {
                            rowIndex: 2,
                            columnIndex: 1,
                            area: 1
                        }
                    ],
                    rowIndex: 2,
                    columnIndex: 0,
                    area: 2
                },
                {
                    name: "6",
                    id: 87,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 2,
                            columnIndex: 1,
                            area: 1
                        },
                        {
                            rowIndex: 2,
                            columnIndex: 0,
                            area: 1
                        }
                    ],
                    rowIndex: 2,
                    columnIndex: 1,
                    area: 2
                },
                {
                    name: "5",
                    id: 88,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 2,
                    columnIndex: 4,
                    area: 1
                },
                {
                    name: "4",
                    id: 89,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 2,
                            columnIndex: 7,
                            area: 1
                        },
                        {
                            rowIndex: 2,
                            columnIndex: 8,
                            area: 1
                        }
                    ],
                    rowIndex: 2,
                    columnIndex: 7,
                    area: 2
                },
                {
                    name: "3",
                    id: 90,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 2,
                            columnIndex: 8,
                            area: 1
                        },
                        {
                            rowIndex: 2,
                            columnIndex: 7,
                            area: 1
                        }
                    ],
                    rowIndex: 2,
                    columnIndex: 8,
                    area: 2
                },
                {
                    name: "2",
                    id: 91,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 2,
                    columnIndex: 10,
                    area: 1
                }
            ]
        },
        {
            name: "B",
            index: 4,
            seats: [
                {
                    name: "7",
                    id: 92,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 4,
                    columnIndex: 0,
                    area: 1
                },
                {
                    name: "6",
                    id: 93,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 4,
                            columnIndex: 2,
                            area: 1
                        },
                        {
                            rowIndex: 4,
                            columnIndex: 3,
                            area: 1
                        }
                    ],
                    rowIndex: 4,
                    columnIndex: 2,
                    area: 2
                },
                {
                    name: "5",
                    id: 94,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 4,
                            columnIndex: 3,
                            area: 1
                        },
                        {
                            rowIndex: 4,
                            columnIndex: 2,
                            area: 1
                        }
                    ],
                    rowIndex: 4,
                    columnIndex: 3,
                    area: 2
                },
                {
                    name: "4",
                    id: 95,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 4,
                    columnIndex: 6,
                    area: 1
                },
                {
                    name: "3",
                    id: 96,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 4,
                    columnIndex: 7,
                    area: 1
                },
                {
                    name: "2",
                    id: 97,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 4,
                            columnIndex: 9,
                            area: 1
                        },
                        {
                            rowIndex: 4,
                            columnIndex: 10,
                            area: 1
                        }
                    ],
                    rowIndex: 4,
                    columnIndex: 9,
                    area: 2
                },
                {
                    name: "1",
                    id: 98,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 4,
                            columnIndex: 10,
                            area: 1
                        },
                        {
                            rowIndex: 4,
                            columnIndex: 9,
                            area: 1
                        }
                    ],
                    rowIndex: 4,
                    columnIndex: 10,
                    area: 2
                }
            ]
        },
        {
            name: "A",
            index: 6,
            seats: [
                {
                    name: "7",
                    id: 99,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 6,
                            columnIndex: 0,
                            area: 1
                        },
                        {
                            rowIndex: 6,
                            columnIndex: 1,
                            area: 1
                        }
                    ],
                    rowIndex: 6,
                    columnIndex: 0,
                    area: 2
                },
                {
                    name: "6",
                    id: 100,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 6,
                            columnIndex: 1,
                            area: 1
                        },
                        {
                            rowIndex: 6,
                            columnIndex: 0,
                            area: 1
                        }
                    ],
                    rowIndex: 6,
                    columnIndex: 1,
                    area: 2
                },
                {
                    name: "5",
                    id: 101,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 6,
                    columnIndex: 4,
                    area: 1
                },
                {
                    name: "4",
                    id: 102,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 6,
                            columnIndex: 6,
                            area: 1
                        },
                        {
                            rowIndex: 6,
                            columnIndex: 7,
                            area: 1
                        }
                    ],
                    rowIndex: 6,
                    columnIndex: 6,
                    area: 2
                },
                {
                    name: "3",
                    id: 103,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [
                        {
                            rowIndex: 6,
                            columnIndex: 7,
                            area: 1
                        },
                        {
                            rowIndex: 6,
                            columnIndex: 6,
                            area: 1
                        }
                    ],
                    rowIndex: 6,
                    columnIndex: 7,
                    area: 2
                },
                {
                    name: "2",
                    id: 104,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 6,
                    columnIndex: 9,
                    area: 1
                },
                {
                    name: "1",
                    id: 105,
                    type: "NORMAL",
                    status: "ACTIVE",
                    groupSeats: [],
                    rowIndex: 6,
                    columnIndex: 10,
                    area: 1
                }
            ]
        }
    ]
}

export default function Layout2() {
    return <LayoutSeat layout={layout}/>
}
