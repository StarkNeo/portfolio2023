import React from "react";
import { useState, useEffect } from "react";
import { Article } from "./article";
import { articles } from "../../services/articlesList";
import './articles.css';
import { listTopics } from "../../services/articlesList";
export const Articles = (props) => {
    const [topics, setTopics]= useState([])
    
    useEffect(()=>{
        setTopics(listTopics)
    },[])
    if (!topics) return <h2>Loading...</h2>
    return   (
        <aside className="aside-topics">
            
        {topics.map(e => (
                <details className="topic">
                    <summary>{e}</summary>
                    <Article topic={e} data={articles} />
                </details>

            
        ))}
        </aside>
        
    
    )
       
    
}