import React from "react";
import { useState, useEffect } from "react";
import { topics } from "../services/topicsList";
import { Articles } from "./Articles/Articles";
export const Topics=()=>{
    const [topic, setTopic]=useState([]);

    useEffect(()=>{
        setTopic(topics)
    },[]);
    
    if(!topics) return <h2>Loading...</h2>
    return (
        topic.map(element=>(
            <aside key={element}>
            <details>
            <summary>{element}</summary>
            <Articles topic={element} />
            </details>
            
        </aside>
        ))
        
    )
}