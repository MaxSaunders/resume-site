import { useCallback, useEffect, useMemo, useState } from 'react'
import { AiFillSetting } from 'react-icons/ai'
// GiSettingsKnobs
import { Container } from 'react-bootstrap'
import propTypes from 'prop-types'

import { AlignField, ColLimitField, PageButtons, TableRowsField } from './TableControls'
import useGetTableData from './getTableData'
import Modal from '../../Modal/Modal'
import './index.scss'
import SelectInputField from '../../SelectInputField'

const DataRow = ({ rowIndex, rowData, dataColumns }) => {
    // console.log({ dataColumns, rowData })

    return (
        <tr>
            {dataColumns?.map(h =>
                <td key={`row-${rowIndex}-${rowData[h].value}`}>
                    {rowData?.[h].value}
                </td>
            )}
        </tr>
    )
}

DataRow.propTypes = {
    rowData: propTypes.object,
    dataColumns: propTypes.array,
    rowIndex: propTypes.number,
}

const HeaderCol = ({ sort, label, colKey }) => {
    let sortKey = sort || ''
    let desc = false

    if (sortKey.startsWith(`~`)) {
        sortKey = sort.slice(1)
        desc = true
    }

    return (
        <span className='text-dark'>
            {label}
            {(sortKey === colKey && desc) && '\u2BC5'}
            {(sortKey === colKey && !desc) && '\u2BC6'}
        </span>
    )
}

HeaderCol.propTypes = {
    sort: propTypes.string,
    label: propTypes.string,
    colKey: propTypes.string,
}

const Table = () => {
    const { getTableData } = useGetTableData()
    // console.log({ dataEE })

    const [showSettings, setShowSettings] = useState(false)
    const [align, setAlign] = useState('left')
    const [data, setData] = useState([])
    const [resultsLength, setResultsLength] = useState(0)
    const [filter, setFilter] = useState({})
    const [tableState, setTableState] = useState({ page: 0, pageSize: 10, sort: '' })
    const [colLimit, setColLimit] = useState(4)

    const setPage = useCallback(index => {
        setTableState(prev => {
            return { ...prev, page: index }
        })
    }, [])

    const setSort = useCallback(newSort => {
        setTableState(prev => {
            const { sort } = prev
            if (sort === newSort) {
                return { ...prev, sort: '~' + sort }
            }
            return { ...prev, sort: newSort }
        })
    }, [])

    const headers = useMemo(() => {
        return Object.entries(data?.[0] || {})?.map(([key, e]) => ({ label: e.header, key })).splice(0, colLimit)
    }, [colLimit, data])

    const dataColumns = useMemo(() => {
        return Object.keys(data?.[0] || {}).splice(0, colLimit)
    }, [colLimit, data])

    useEffect(() => {
        console.log('hitting api', tableState)
        const [tempData, totalResultsCount] = getTableData(filter, tableState)
        setData(tempData)
        setResultsLength(totalResultsCount)
        // set
    }, [getTableData, filter, tableState])

    return (
        <Container fluid className='table-demo blur-table'>
            {showSettings &&
                <Modal modalClassName='settings-modal' onClose={() => setShowSettings(false)} body={
                    <>
                        <div className='settings-modal-body'>
                            <TableRowsField value={tableState.pageSize} onChange={i => setTableState(p => ({ ...p, pageSize: i }))} />
                            <AlignField value={align} onChange={setAlign} />
                            <ColLimitField value={colLimit} onChange={setColLimit} />
                        </div>
                    </>
                } />
            }
            <div className='header-controls'>
                <span className='text-start'>
                    <TableRowsField value={tableState.pageSize} onChange={i => setTableState(p => ({ ...p, pageSize: i }))} />
                </span>
                <span className='page-selector'>
                    <PageButtons {...tableState} setPage={setPage} totalResults={resultsLength} />
                </span>
                <span className='text-end'>
                    <AiFillSetting size='22px' onClick={() => setShowSettings(true)} />
                </span>
            </div>
            <table className='demo-table'>
                <thead className={`table-header align-${align}`}>
                    <tr className='underline'>
                        {headers?.map(({ label, key }) =>
                            <td key={label} onClick={() => setSort(key)}>
                                <HeaderCol sort={tableState.sort} label={label} colKey={key} />
                            </td>
                        )}
                    </tr>
                </thead>
                <tbody className={`table-body align-${align}`}>
                    {data?.map((rowData, rowIndex) =>
                        <DataRow
                            key={`data-row-${rowIndex}`}
                            rowIndex={rowIndex}
                            rowData={rowData}
                            dataColumns={dataColumns}
                        />
                    )}
                </tbody>
            </table>
            <div className='footer-controls'>
                <span>
                    <SelectInputField options={[{ value: 1, label: 1 }]} label='Select...' />
                </span>
                <span className='page-selector'>
                    <PageButtons {...tableState} setPage={setPage} totalResults={resultsLength} />
                </span>
                <span className='text-end'>
                    <AiFillSetting size='22px' onClick={() => setShowSettings(true)} />
                </span>
            </div>
        </Container>
    )
}

export default Table
