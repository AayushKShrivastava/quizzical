import React from "react"

export default function Question(props) {
    //console.log(props.result)
    let [options, setOptions] = React.useState([])
    React.useEffect(()=>{
        let c = [props.correct, props.incorrect[0], props.incorrect[1], props.incorrect[2]]
        setOptions((c.sort(() => Math.random() - 0.5)))
    }, [props.correct, props.incorrect])
    
    function styles(option) {
        if(props.result){
            if(option === props.selected && props.incorrect.includes(option))
                return "#F8BCBC"
            else if(option === props.correct)
                return "#94D7A2"
            else 
                return "#F5F7FB"
        }
        else{
            if(option === props.selected)
                return "#D6DBF5"
            else 
                return "#F5F7FB"
        }
    }

    return (
        <div className="questionBlock">
            <h4>{props.question}</h4>
            <div className="options">
                <div className="option" style={{backgroundColor: styles(options[0])}} onClick={()=>props.selection(options[0], props.id)}>{options[0]}</div>
                <div className="option" style={{backgroundColor: styles(options[1])}} onClick={()=>props.selection(options[1], props.id)}>{options[1]}</div>
                <div className="option" style={{backgroundColor: styles(options[2])}} onClick={()=>props.selection(options[2], props.id)}>{options[2]}</div>
                <div className="option" style={{backgroundColor: styles(options[3])}} onClick={()=>props.selection(options[3], props.id)}>{options[3]}</div>
            </div>
            <hr />
        </div>
    )
}