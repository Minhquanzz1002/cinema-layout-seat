import React from 'react';

type LayoutSeatProps = {
    layout: Layout;
}

export interface Layout {
    id: number;
    maxColumn: number;
    maxRow: number;
    rows: Row[];
}

interface Row {
    name: string;
    index: number;
    seats: Seat[];
}

interface Seat {
    name: string;
    rowIndex: number;
    columnIndex: number;
    area: number;
    id: number;
    groupSeats: GroupSeat[];
    type: 'VIP' | 'NORMAL' | 'COUPLE',
    status: 'ACTIVE' | 'INACTIVE'
}

interface GroupSeat {
    rowIndex: number;
    columnIndex: number;
    area: number;
}

const LayoutSeat = ({layout}: LayoutSeatProps) => {
    const rows = Array(layout.maxRow).fill(null);
    layout.rows.forEach(row => rows[row.index] = row);

    const renderSeat = (seat: Seat | null, index: number, array: (Seat | null)[]) => {
        if (!seat) {
            return <div key={`empty-${index}`} className="h-full aspect-square"/>;
        }

        if (seat.area === 2) {
            const nextSeat = array[index + 1];
            // for (let i = index + 1; i < array.length; i++) {
            //     if (i + 1 <= array.length) {
            //         array[i] = array[i + 1];
            //     } else {
            //         array = array.slice(0, -1);
            //     }
            // }
            array.splice(index + 1, 1);

            return (
                <button key={seat.id}
                        className="h-full w-11 border text-center text-xs rounded flex justify-around items-center hover:bg-orange-400">
                    <div>{seat.name}</div>
                    <div>{nextSeat?.name}</div>
                </button>
            )
        }

        return (
            <button key={seat.id}
                    className="h-full aspect-square border flex justify-center items-center hover:bg-orange-400 text-xs rounded">
                {seat.name}
            </button>
        )
    }

    const renderRow = (row: Row) => {
        const seats = Array(layout.maxColumn).fill(null);
        row.seats.forEach(seat => seats[seat.columnIndex] = seat);
        return seats.map(renderSeat)
    }

    return (
        <div className="flex justify-center pt-7">
            <div className="w-1/2 rounded p-2 border">
                {
                    rows.map((row, rowIndex: number) => (
                        <div className="flex justify-between my-1 h-[20px]" key={rowIndex}>
                            {
                                row ? (
                                    <>
                                        <div
                                            className="w-[15px] text-center text-sm text-gray-600 font-semibold">{row.name}</div>
                                        <div className="flex justify-center gap-x-1">
                                            {renderRow(row)}
                                        </div>
                                        <div
                                            className="w-[15px] text-center text-sm text-gray-600 font-semibold">{row.name}</div>
                                    </>
                                ) : <div/>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LayoutSeat;