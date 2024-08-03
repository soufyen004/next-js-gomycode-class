'use client'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Page() {

    const router = useRouter()
    const params = useParams()
    const [post,setPost] = useState({})
    const {id} = params
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>setPost(response.data))
    },[])

  return (
    <div class="max-w-screen-xl mx-auto">

        
    
        <main class="mt-10">
    
          <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: "24em"}}>
            <div class="absolute left-0 bottom-0 w-full h-full z-10"
              style={{backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}></div>
            <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
            <div class="p-4 absolute bottom-0 left-0 z-20">
              <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                {post?.title}
              </h2>
              <div class="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/97.jpg"
                  class="h-10 w-10 rounded-full mr-2 object-cover" />
                {/* <div>
                  <p class="font-semibold text-gray-200 text-sm"> Mike Sullivan </p>
                  <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
                </div> */}
              </div>
            </div>
          </div>
    
          <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p class="pb-6">{post?.body}</p>
    
          </div>
        </main>

      </div>


  )
}

export default Page