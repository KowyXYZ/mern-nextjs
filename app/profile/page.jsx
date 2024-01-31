"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import Profile from '@components/Profile'

const MyProfile = () => {

    const {data: session} = useSession()

    const [posts, setPosts] = useState([])

    const router = useRouter()

    useEffect(() => {
        const fetchPosts = async() => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`)
          const data = await response.json()
    
          setPosts(data)
        }
        if(session?.user?.id) fetchPosts()
        
      }, [])

    const handleEdit = (posts) => {
      router.push(`/update-prompt?id=${posts._id}`)
    }

    const handleDelete = async(data) => {
      const hasConfirmed = confirm(
        "Are you sure you want to delete this prompt?"
      );
  
      if (hasConfirmed) {
        try {
          await fetch(`/api/prompt/${data._id.toString()}`, {
            method: "DELETE",
          });
  
          const filteredPosts = posts.filter((item) => item._id !== data._id);
  
          setPosts(filteredPosts);
        } catch (error) {
          console.log(error);
        }
      }
    };
    

  return (
    <Profile name='My' desc='Welcomee to personalized profile page' data={posts} handleDelete={handleDelete} handleEdit={handleEdit}/>
  )
}

export default MyProfile