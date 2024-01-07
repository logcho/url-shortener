'use client';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'




export default function Home() {

  const [URL, setURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [message, setMessage] = useState('');
  const apiUrl = 'https://q48xd77jcd.execute-api.us-east-1.amazonaws.com/test1/urls?url=';

  const postData = async () => {
    try {
      const end = apiUrl + URL;
      const response = await fetch(end, { method: 'POST' }).then(res => res.text())
      setShortURL(response)
    } catch (error) {
      console.error('Error during post:', error);
    }
  };

  const handleClick = async () => {
    setMessage('Clicked');
    postData();
  };

  const handleURLChange = (e: any) => {
    setURL(e);
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

        <div className='flex flex-col justify-center self-center p-4 rounded'>
          <div className="flex w-full justify-center items-center space-x-2 ml-auto mr-auto">
            <Input 
              type="email" 
              placeholder="Link"
              value={URL}
              onChange={(e) => handleURLChange(e.target.value)}
              className='text-xl'
            />
            <Button onClick={handleClick} className='text-xl'>
              Shorten
            </Button>
          </div>
          <h1 className='text-center'>{shortURL}</h1>

        </div>
        


        <h1>{message}</h1>

    </main>
  )
}
