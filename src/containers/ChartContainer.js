import {useState, useEffect} from 'react'
import ChartList from '../components/ChartList'

const ChartContainer = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs()
        
    }, [])

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result => result.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return(
        <>
        <h1>Itunes Top 20</h1>
        <ChartList songs={songs}/>
        </>
    )
}

export default ChartContainer