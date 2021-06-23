
const ChartEntry = ({song}) => {

    return(
        <li>
            <h3>{song['im:name'].label}</h3>
            <p>by: {song['im:artist'].label}</p>
            <img src={song['im:image'][1].label} alt='album artwork'></img>
        </li>
    )
}

export default ChartEntry