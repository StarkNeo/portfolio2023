import React from "react";
import { useState, useEffect } from "react";
import { Article } from "./article";
import { articles } from "../../services/articlesList";

export const Articles = (props) => {
    const [list, setList]= useState([])
    
    useEffect(()=>{
        setList(articles)
    },[])
    return(

        <Article topic={props.topic} data={list} />
    )
    
}