import React from "react";

export interface ITableColumn<T> {
    label: string
    value: ((item: T) => string)
}

interface Props<T> {
    columns: ITableColumn<T>[]
    items?: T[]
}

const BTable = <T extends {}>({items = [], columns}: Props<T>) => {

    return (
        <div className="b-table">
            <table data-testid="b-table">
                <thead className="b-table__header">
                <tr>
                    {
                        columns.map((el, idx) => (
                            <th className="b-table__header-cell" key={`header-${idx}`}>{el.label}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, rowIdx) => (
                        <tr key={`row-${rowIdx}`} className="b-table__row">
                            {
                                columns.map((col, colIdcx) => (
                                    <td className="b-table__row-cell"
                                        key={`cell-${rowIdx}-${colIdcx}`}>{col.value(item) || '-'}</td>
                                ))
                            }
                        </tr>
                    ))
                }
                </tbody>
            </table>
            {!items?.length && <div className="t-p2">В таблице нет данных</div>}
        </div>
    )
}

export default BTable
