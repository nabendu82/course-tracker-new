import React, { useEffect, useState } from 'react'

const Tags = ({ tagsUpdated, key }) => {
    const tagChoices = ['node','javascript','react','react-native','devops'];
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        setSelectedTags([])
    }, [key]);

    useEffect(() => {
        tagsUpdated(selectedTags);
    }, [selectedTags, tagsUpdated])

    const tagChange = (e) => {
        const value = e.target.value;
        const alreadySelected = selectedTags.includes(value);
        if(e.target.checked && !alreadySelected){
            setSelectedTags([...selectedTags, value]);
        } else if(!e.target.checked && alreadySelected){
            setSelectedTags(selectedTags.filter(prevTag => prevTag !== value));
        }
    }

    return (
        <>
            {tagChoices.map((choice, index) => (
                <label className="checkbox-inline mr-3" key={index}>
                    <input type="checkbox" value={choice} onChange={tagChange} />
                    {' ' + choice}
                </label>
            ))}
            
        </>
    )
}

export default Tags
