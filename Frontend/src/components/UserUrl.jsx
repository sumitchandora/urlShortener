import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getUrls } from '../api/user.api.js';
import {delete_Url} from '../api/shortUrl.api.js'

const UserUrl = () => {
  let { data: urls } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getUrls,

    staleTime: 1000,
  });

  
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (url, id) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };


const queryClient = useQueryClient()
  const deleteUrl = async(id)=>{
    await delete_Url(id)
    queryClient.invalidateQueries(['userUrls']); 
   
  }

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center my-8">
  //       <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500" />
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-4">
  //       Error loading your URLs: {error.message}
  //     </div>
  //   );
  // }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Shortened URLs</h1>
     


{
      (urls == undefined || urls.length === 0) ? (
        <p className="text-gray-500">"No URLs found!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 shadow-md rounded-lg">
            <thead>
              <tr className="bg-indigo-100 text-left text-indigo-800">
                <th className="p-3">Original URL</th>
                <th className="p-3">Short URL</th>
                <th className="p-3">Clicks</th>
                <th className="p-3">Action</th>
                <th className='p-3'>Delete</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url._id} className="border-t hover:bg-gray-50 transition">
                  <td className="p-3 break-words text-gray-700">{url.full_url}</td>
                  <td className="p-3">
                    <a
                      href={"http://localhost:3000/"+url.short_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 underline"
                    >
                      {url.short_url}
                    </a>
                  </td>
                  <td className="p-3 text-center">{url.clicks}</td>
                  <td className="p-3">
                    <button
                      onClick={() =>
                        handleCopy("http://localhost:3000/" + url.short_url, url._id)
                      }
                      className={`text-sm px-4 py-1 w-26 rounded transition ${
                        copiedId === url._id
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'bg-indigo-100 text-indigo-700 border border-indigo-300 hover:bg-indigo-200'
                      }`}
                    >
                      {copiedId === url._id ? '✅ Copied!' : '📋 Copy'}
                    </button>
                  </td>
                  <td>
                    <button 
                    onClick={()=>{
                      deleteUrl(url._id)
                    }}
                    className='text-sm px-4 py-1 w-22 rounded transition bg-indigo-100 text-indigo-700 border border-indigo-300 hover:bg-indigo-200'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    
    </div>
  );
};

export default UserUrl;
