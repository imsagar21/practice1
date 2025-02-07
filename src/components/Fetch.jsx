import React, { useEffect, useState } from 'react'

const Fetch = () => {

    const [userList,setUserList] = useState([])
    const [loading,setLoading] = useState(false)
    const fetchItems = async ()=>{
        try{
            setLoading(true)
            const apiResponse = await fetch(' https://api.github.com/users')
            const data = await apiResponse.json()
            console.log(data);
            
            
            if(data){
                setUserList(data)
                setLoading(false)
            }
            else{
                setUserList([])
                setLoading(false)

            }
        }catch(e){
            console.log(e);
            
        }
    }
    // useEffect(()=>{
    //     fetchItems()
    // },[])
    if(loading) return <h1>Loading! Please Wait</h1>
  return (
    <div>
        <button onClick={fetchItems}>UserList</button>
        <ul>
            {
               userList && userList.length>0 ? userList.map((list,index)=>{
                    return <li key={index}>{list.login}</li>
                })
                : <h1>User Not Found</h1>
            }
        </ul>
    </div>
  )
}

export default Fetch