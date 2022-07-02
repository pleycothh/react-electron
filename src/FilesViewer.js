export const FileViewer = ({ files, onBack, onOpen}) => (
    <table className="table">
        <tbody>
            <tr className="clickable" onClick={onBack}>
                <td className="iicon-row">
                    <IconFolderOpen />

                </td>
                <td>...</td>
                <td></td>
            </tr>


            {files.map(({name, directory, size}) => {
                return (
                    <tr className="clickable">
                        <td className="icon-row"></td>
                        {directory ? <IconFolder/> : <IconFile />}
                        <td>
                            <span className="float-end">{size}</span>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
)