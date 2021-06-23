
const ChartEntry = ({song}) => {

    // const previewSong = (event) => {

    // }

    return(
        <li>
            <h3>{song['im:name'].label}</h3>
            <p>by: {song['im:artist'].label}</p>
            <img src={song['im:image'][1].label} alt='album artwork'></img>
            <br></br>
            <audio controls>
                <source src={song.link[1].attributes.href} />
            </audio>
        </li>
    )
}

export default ChartEntry