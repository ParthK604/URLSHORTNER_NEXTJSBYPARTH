"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {

  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = async () => {

    if (!url || !shorturl) {
      alert("Please enter both fields")
      return;
    }

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: url,
        shorturl: shorturl
      })
    });

    const result = await response.json();

    if (result.success) {
      setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
      seturl("");
      setshorturl("");
      alert(result.message);
    }
    else {
      alert("Something went wrong");
    }
  }

  return (
    <div className='mx-auto max-w-lg my-16 p-8 rounded-lg bg-purple-100 flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>Generate all short URL's</h1>

      <div className='flex flex-col gap-2'>
        <input
          type="text"
          className='p-4 focus:outline-purple-600'
          value={url}
          placeholder='Enter Your URL'
          onChange={e => seturl(e.target.value)}
        />

        <input
          type="text"
          className='p-4 focus:outline-purple-600'
          placeholder='Enter Your Preferred Short URL text'
          value={shorturl}
          onChange={e => setshorturl(e.target.value)}
        />

        <button
          className='bg-amber-200 p-2 rounded'
          onClick={generate}>
          Generate
        </button>
      </div>

      {
        generated && (
          <>
            <span className='font-bold text-lg'>Your Link:</span>
            <code>
              <Link target="_blank" href={generated}>
                {generated}
              </Link>
            </code>
          </>
        )
      }

    </div>
  )
}

export default Shorten
