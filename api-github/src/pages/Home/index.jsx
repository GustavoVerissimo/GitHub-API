import { React, useEffect, useState } from 'react'
import api from '../../services/api';
import Header from '../../components/Header/Header'
import { AiOutlineLike } from 'react-icons/ai'


function Home(){
    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        api.get("/repositories").then(({data})=>{
            setRepositories(data);
        })
    },[])

    return(
        <>
             <Header />
             <main className='pt-5 flex flex-col items-center text-center font-mono'>
                <h1 className='text-4xl text-white pt-5 pb-5 '>Repositórios GitHub</h1>
                {
                    repositories?.map((repositorie)=>{
                        return(
                            <div className="w-4/5 m-5 bg-white p-5 text-black rounded-md border-black border-5" key={repositorie.id}>
                            <h1 className="text-3xl text-left">{repositorie.name}</h1>
                                <div className=" flex flex-row justify-end">   
                                    <button className='pr-2'><a href={repositorie.html_url}>Acessar Repositório</a></button>
                                </div>
                                <p className="text-sm pt-3 text-justify">{repositorie.description}</p>
                        </div>
                        )
                    })
                }
                
             </main>
        </>
    )
}


export default Home