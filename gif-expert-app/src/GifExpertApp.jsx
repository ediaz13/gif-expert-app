
import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([  ]);
    
    const onAddCategory = ( newCategory ) => {
        //console.log( newCategory );
        
        if(categories.includes(newCategory)) return;

        setCategories( [ newCategory, ...categories ] );
       //setCategories( cat => [...cat, 'Evangelion'] );

    }


    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories= { setCategories }
                onNewCategory = { onAddCategory }
            />
            
            {
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }
            
        </>
        
    )
}
