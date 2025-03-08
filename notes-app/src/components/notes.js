import {useState, useEffect} from 'react'
import { fetchNotes } from '../services/notesApi'

const Notes = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    loadNotes();
  }, [])

  const loadNotes = async () => {
    try {
      const response = await fetchNotes();
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Notes</h1>
      {
        notes.map((note) => {
          return(
            <div key={note.id}>{note.title}</div>
          )
        })
      }
    </>
  )
}

export default Notes;