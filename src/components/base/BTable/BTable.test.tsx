import {render, screen} from '@testing-library/react';
import BTable, {ITableColumn} from "@/components/base/BTable/BTable";
import {IRecord} from "@/types";


describe('BTable', () => {
    const columns: ITableColumn[] = [
        {label: 'Хедер 1', key: 'key3'},
        {label: 'Хедер 2', key: 'key1'},
        {label: 'Хедер 3', key: 'key2'}
    ]

    const items: IRecord[] = [
        {
            description: "Сергей Валерьевич 1",
            date: "2002-02-31T22:00:00.000Z"
        },
        {
            date: "2002-01-31T22:00:00.000Z",
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
        render(<BTable columns={columns} items={items} />);

        const noDataCells = screen.getAllByText(/-/i)

        expect(noDataCells.length).toBe(items.length  * columns.length)
    });

    test('displays cell data correctly', () => {
        const columns2: ITableColumn[] = [
            {label: 'Хедер 1', key: 'description'},
            {label: 'Хедер 2', key: 'data'}
        ]

        render(<BTable columns={columns2} items={items} />);

        const cells = screen.getByTestId('b-table').querySelectorAll('td')

        items.forEach((item, itemIdx) => {
            columns2.forEach((col, colIdx) => {
                expect(cells[(itemIdx * columns2.length) + colIdx].textContent).toBe(item[col.key] || '-')
            })
        })
    });
})

