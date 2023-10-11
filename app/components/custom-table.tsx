
export type TableProps = {
    headers: {
        title: string,
        associated_data: string
    }[],
    data: {}[]
}
const CustomTable : React.FC<TableProps> = ({headers, data}) => {
    
    return(
        <div className="rounded-xl border">
        <table className="table-auto text-sm w-full">
            <tbody className="divide-y divide-slate-100">
                <tr className="text-left py-2">
                    {headers.map((header) => <th className="p-4">{header.title}</th>)}
                </tr>

                {data.map((data : any, index) =>
                    <tr key={index}>
                        <td className="p-4">{data[headers[index].associated_data]}</td>
                    </tr>)}
            </tbody>
        </table>
    </div>
    )
}

export default CustomTable;