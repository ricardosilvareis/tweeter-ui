import { FormEvent, useState, KeyboardEvent } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'

export function Timeline(){
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([''])

  function createNewTweet(event: FormEvent){
    //Evita redirecionamento para não precisar carregar toda a página
    event.preventDefault()

    setTweets([newTweet])
    setNewTweet('')

  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet])
      setNewTweet('')
    }
  }
    return(
        <main className="timeline">
          <Header title="Header" />

          <form onSubmit={createNewTweet} className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/ricardosilvareis.png" />
              <textarea id="tweet" placeholder="Whats is happening" value={newTweet} onKeyDown={handleHotKeySubmit} onChange={(event)=>{ setNewTweet(event.target.value) }}  />
            </label>

            <button type="submit">Tweet</button>
          </form>
          
          <Separator />

          {tweets.map(tweet =>{
            return <Tweet key={tweet} content={tweet}/>
          })}
          
          
        </main>
    )
}