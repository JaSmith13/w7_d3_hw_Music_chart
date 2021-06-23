
const ChartEntry = ({song}) => {

    return(
        <li>
            <h3>{song['im:name'].label}</h3>
            by: {song['im:artist'].label}
        </li>
    )
}

export default ChartEntry