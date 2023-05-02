import React, {HTMLProps, ReactNode, useState} from "react";
import classNames from "classnames";

export interface ITableColumn<T> {
    label: ReactNode | string
    cellClass?: string
    value: ((item: T) => string | ReactNode)
}

interface Props<T> extends HTMLProps<HTMLDivElement> {
    columns: ITableColumn<T>[]
    items?: T[]
    dblClickHandler?: (el: T) => void | Promise<void>
}

const BTable = <T extends {}>({items = [], columns, dblClickHandler = undefined, className}: Props<T>) => {

    const [activeRow, setActiveRow] = useState<null | T>(null)

    const classes = classNames('b-table', className);


    const handleDoubleClick = async (el: T) => {
        if(dblClickHandler) {
            await dblClickHandler(el)
        }
    }

    return (
        <div className={classes}>
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
                        <tr
                            key={`row-${rowIdx}`}
                            onClick={() => setActiveRow(item)}
                            onDoubleClick={() =>handleDoubleClick(item)}
                            className={`b-table__row ${item === activeRow ? 'b-table__row_active' : ''}`}
                        >
                            {
                                columns.map((col, colIdcx) => (
                                    <td className={`b-table__row-cell ${col.cellClass}`}
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
