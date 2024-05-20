import { useTable,Column ,TableOptions} from "react-table"


function TableHOC<T extends Object>(columns:Column<T>[],data:T[],containerClassname:string,heading:string){
  return function HOC(){  

    const options=TableOptions<T>={
      columns,
      data
    }

    const {getTableProps,getTableBodyPropos,headerGroups,rows,prepareRow}=useTable(options)
    return <div className={containerClassname}>
      <h2 className="heading">{heading}</h2>

      <table className="table" {...getTableProps()}>
        <thead>
            {
              headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map(columns=>(
                      <th {...columns.getHeaderProps()}>
                        {columns.render("Header")}
                      </th>
                    ))
                  }
                </tr>
              ))
            }
        </thead>
        <tbody {...getTableBodyPropos}>
            {
              rows.map(row=>{
                prepareRow(row);

                return <tr {...row.getRowProps()}>
                  {
                    row.cells.map(cell=>(
                      <td {...getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    ))
                  }
                </tr>
              })
            }
        </tbody>
      </table>
    </div>
  }
}

export default TableHOC