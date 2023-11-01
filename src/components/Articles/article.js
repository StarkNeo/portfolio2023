import React from "react"

export const Article = (props) => {
    let filterByTopic= props.data.filter(element=>element.topic === props.topic)
    return (
        filterByTopic.map(element =>(
        <article key={element.title}>
            <details>
                <summary>
                {element.title}
                </summary>
                <figure>

                    <figcaption>
                       {element.author} 
                    </figcaption>
                </figure>
            </details>

        </article>    )
        )
    )
            
        }
         
        

    



