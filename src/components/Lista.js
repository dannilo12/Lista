import React, { useState, useRef } from "react"


export default function Lista(){

    const [listaDeTarefa, SetListaDeTarefa] = useState(() => { return [] })
    const [tarefa, setTarefa] = useState(() => { return ''} )

    const idTarefa = useRef(0)
    const inputRef = useRef()

    function addTarefa() {
        SetListaDeTarefa(old => { return [...old, { id: idTarefa.current, text: tarefa }] })
        idTarefa.current = idTarefa.current + 1
        setTarefa('')
        inputRef.current.focus()
    }

    function removeTarefa(id) {
        const remover = listaDeTarefa.filter(tarefa => tarefa.id !== id)
        SetListaDeTarefa(remover)
    }

    return (
        <div>
            <div>
                <h3>LISTA DE TAREFAS</h3>
            </div>
       
            <div>
                <input ref={ inputRef } type="text" placeholder="Adicione item"  value={ tarefa } onChange={ (e) => { setTarefa(e.target.value) } }/>
            </div>

            <div>
                <button onClick={ addTarefa }> Adicionar </button>
               
            </div>

            <div>
                <p>TAREFAS</p>
                
                { listaDeTarefa.map((tarefa) => { return <p key={ tarefa.id }>{ tarefa.text } - <button onClick={() => { removeTarefa(tarefa.id) } }>remover</button> </p> })}
            </div>
        </div>
    )
}
    
