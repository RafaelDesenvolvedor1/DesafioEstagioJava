import React, { useContext } from "react";
import { useState } from "react";
import { ListContext } from "../contexts/list";

export default function Modal({id, titulo, text, status, onClose}){
    const {editarTask} = useContext(ListContext)
    const [mudarTitulo, setMudarTitulo] = useState(titulo)
    const [mudarText, setMudarText] = useState(text)
   // const [statusModal, setStatus] = useState(status)

    function digitarTitulo(e){
        setMudarTitulo(e.target.value)
    }
    function digitarText(e){
        setMudarText(e.target.value)
    }

    return(
        <div
        class={status ? "modal active" : "modal"}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!status}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}

              ></button>
            </div>
            <div class="modal-body">
            <form onSubmit={()=> editarTask(id, mudarTitulo, mudarText)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Titulo</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={mudarTitulo} onChange={digitarTitulo} required/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Descrição</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" value={mudarText} onChange={digitarText} required/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
}