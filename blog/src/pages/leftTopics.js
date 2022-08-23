import React from "react"


const LeftTopics = (props) => {
    
    const style = {
        backgroundColor : 'pink',
        fontSize : '10px',
        height : '600px',
        width : '200px'
    }

    const topicList = props.topicList
    const listitems = topicList.map((item) => <span>{item}</span>);


    return (
        <div style={style}>
            {listitems}
        </div>
    );
};


export default LeftTopics