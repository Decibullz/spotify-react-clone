import './SongRow.css'

function SongRow({ song, playSong }) {
  return (
    <div className="songRow" onClick={() => playSong(song.id)}>
      <img
        className="songRow_album"
        src={song.album.images[1].url}
        alt={song.name}
      />
      <div className="songRow_info">
        <h1>{song.name}</h1>
        <p>
          {song.artists.map((artist) => artist.name).join(', ')}
          {song.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow
