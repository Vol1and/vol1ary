import {render, screen} from '@testing-library/react';
import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import {IRecord} from "@/types";
import dayjs from "dayjs";
import {DATE_FORMAT} from "@/config/base.config";


describe('BTable', () => {
    const columns: ITableColumn<IRecord>[] = [
        {label: 'Хедер 1', value: (item) => item.description},
        {label: 'Хедер 2', value: (item) => item.date.format(DATE_FORMAT)},
    ]

    const items: IRecord[] = [
        {
            description: "Сергей Валерьевич 1",
            date: dayjs()
        },
        {
            date: dayjs(),
            description: "Сергей Валерьевич 2",
        }
    ];

    test('renders correct count of headers', () => {
        render(<BTable columns={columns} />);

        columns.forEach((el) => {
            const header = screen.getByText(new RegExp(`${el.label}`, 'i'));
            expect(header).toBeInTheDocument();
        })
    });

    test('displays label if table has no data', () => {
        render(<BTable columns={columns} />);
        const noDataLabel = screen.getByText(/В таблице нет данных/i)
        expect(noDataLabel).toBeInTheDocument();
    });

    test('displays dash if items do not contain needed key', () => {

        const columns2: ITableColumn<IRecord>[] = [
            {label: 'Хедер 1', value: (item) => ''},
            {label: 'Хедер 2', value: (item) => ''}
        ]

        render(<BTable columns={columns2} items={items} />);

        const noDataCells = screen.getAllByText(/-/i)

        expect(noDataCells.length).toBe(items.length  * columns.length)
    });

    test('displays cell data correctly', () => {

        render(<BTable columns={columns} items={items} />);

        const cells = screen.getByTestId('b-table').querySelectorAll('td')

        items.forEach((item, itemIdx) => {
            columns.forEach((col, colIdx) => {
                expect(cells[(itemIdx * columns.length) + colIdx].textContent).toBe(col.value(item) || '-')
            })
        })
    });
})

