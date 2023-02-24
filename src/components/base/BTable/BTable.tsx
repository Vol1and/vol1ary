import React from "react";
import {ITableDisplayable} from "@/types";

export interface ITableColumn {
    label: string
    key: string
}

interface Props {
    columns: ITableColumn[]
    items?: ITableDisplayable[]
}

const BTable: React.FC<Props> = ({items = [], columns}) => {

    return (
        <div className="b-table">
            <table data-testid="b-table">
                <thead className="b-table__header">
                <tr>
                    {
                        columns.map((el) => (
                            <th className="b-table__header-cell" key={`header-${el.key}`}>{el.label}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, rowIdx) => (
                        <tr key={`row-${rowIdx}`} className="b-table__row">
                            {
                                columns.map((col) => (
                                    <td className="b-table__row-cell"
                                        key={`cell-${rowIdx}-${col.key}`}>{`${item[col.key] || '-'}`}</td>
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
