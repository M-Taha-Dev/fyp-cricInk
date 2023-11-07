import React, { useEffect, useRef, useState } from 'react'
import Message from '../components/Message'
import InputBar from '../components/InputBar'
import fetchPlayerNames from '../utils/NER';
// const { MongoClient } = require('mongodb');
const Articles = () => {
    const [msg, setMsg] = useState([{}]);
    const messageContainerRef = useRef(null);
    const [mg, setMg] = useState([])
    function replaceSpacesWithPlus(text) {
      // Use the replace method with a regular expression to replace spaces with '+'
      return text.replace(/\s+/g, '+');
    }
    useEffect(() => {
        if (messageContainerRef.current) {
          messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
          templateSelection()
        }
      }, [msg]);
    const [playerName, setPlayerName] = useState('')
    const [articleType, setArticleType] = useState('')

    async function connectToMongoDB() {
      // Connection to the MongoDB server running on the default port
      const uri = 'mongodb://localhost:27017';
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
      try {
        await client.connect();
        console.log('Connected to MongoDB');
    
        const db = client.db('fyp');
        
        const collection = db.collection('cricink');
        return collection; // Return the collection object
      } catch (err) {
        console.error('Error:', err);
        throw err;
      }
    }

    const templateSelection =  async(input) => {
      const connection = await connectToMongoDB()


      
      //check if individual
      //check if team
      //tag each template with some keywords
      //then match those keywords by parsing the input to figure out the template 
      //


      if(input === 'performance'){

        //check the player name
        //bring the stats of that player (write down the queries)
        //integrate them and show them






      }
      else if (input === 'comparison'){

      }
      else {
        return null
      }




    }



    const addMessage = async(input) => {
        const inputValue = replaceSpacesWithPlus(input)
        fetchPlayerNames(inputValue).then(
          data => {
            setPlayerName(data.player_name)
            setArticleType(data.article_type)
          }
        )
        console.log('player name: ' + playerName);
        console.log('article_type: ' + articleType)
        const output = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea at eligendi molestias esse placeat voluptate illum, sint alias beatae id eaque accusamus nobis architecto debitis. Numquam incidunt ex unde!'
        const message = {input: input, output: output}
        setMsg([message,...msg])
    }


  return (
    <div className='w-full h-screen flex flex-col justify-between'>
        <div className='h-8 text-xl font-bold font-sans flex justify-center items-center'>Article Generation</div>
        <div  ref={messageContainerRef} className='h-5/6 w-full overflow-y-auto rounded-lg'><Message  msg={msg}/></div>
        <div >
            <InputBar addMessage={addMessage}/>
        </div>

                
    </div>
  )
}

export default Articles