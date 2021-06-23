import ChartEntry from './ChartEntry'

const ChartList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return <ChartEntry song={song} key={index} />
    })

    return(
        <>
            <ol>
                {songItems}
            </ol>
        </>
    )
}

export default ChartList