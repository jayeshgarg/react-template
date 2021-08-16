import React from "react";
import {DetailsList} from '@fluentui/react'

const OperationsTable = () => {

    const operations = [
        {
            from: '1234 1234 1234 1234',
            to: '1111 1111 1111 1111',
            amount: '$1234',
            date: '20-5-2020'
        },
        {
            from: '1234 1234 1234 1234',
            to: '1111 1111 1111 1111',
            amount: '$1234',
            date: '20-5-2020'
        },
        {
            from: '1234 1234 1234 1234',
            to: '1111 1111 1111 1111',
            amount: '$1234',
            date: '20-5-2020'
        },
        {
            from: '1234 1234 1234 1234',
            to: '1111 1111 1111 1111',
            amount: '$1234',
            date: '20-5-2020'
        },
        {
            from: '1234 1234 1234 1234',
            to: '1111 1111 1111 1111',
            amount: '$1234',
            date: '20-5-2020'
        }
    ]

    const columns = [
        {key: 'col1', name: 'From', fieldName: 'from', minWidth: 100, maxWidth: 300, isResizable: true},
        {key: 'col2', name: 'To', fieldName: 'to', minWidth: 100, maxWidth: 300, isResizable: true},
        {key: 'col3', name: 'Amount', fieldName: 'amount', minWidth: 100, maxWidth: 300, isResizable: true},
        {key: 'col4', name: 'Date', fieldName: 'date', minWidth: 100, maxWidth: 300, isResizable: true}
    ]

    return (
        <div data-is-scrollable={true}>
            <div className='s-Grid-col ms-sm9 ms-xl9'>
                <DetailsList items={operations} columns={columns} selectionMode={0}/>
            </div>
        </div>
    )
}

export default OperationsTable
