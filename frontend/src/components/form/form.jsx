import React from "react";
import "./form.css"

function RenderForm(props) {
    return (
        <form className="form">
            <div className="form-container">
                <div className="form-title form-inputs">
                    <div>
                        <label htmlFor="title">Titulo </label>
                    </div>
                    <div>
                        <input type="text" 
                            placeholder="Digite o titulo da notícia" 
                            name="title" 
                            onChange={e => props.uptadeField(e)} 
                            value={props.titleValue} 
                        />
                    </div>
                </div>

                <div className="form-category form-inputs">
                    <div>
                        <label htmlFor="category">Categoria </label>
                    </div>
                    <div>
                        <input type="text" 
                            placeholder="Informe a categoria da notícia" 
                            name="category" 
                            onChange={e => props.uptadeField(e)} 
                            value={props.categoryValue} />
                    </div>
                </div>

                <div className="form-description form-inputs">
                    <div>
                        <label htmlFor="description">Descrição </label>
                    </div>
                    <div>
                        <input type="text" 
                            name="description" 
                            placeholder="Faça um resumo da notícia." 
                            maxLength="200" 
                            onChange={e => props.uptadeField(e)} 
                            value={props.descriptionValue} 
                        />
                    </div>
                </div>
                
                <hr />

                <div className="form-buttons form-input">

                    <button
                        className="button button-save"
                        onClick={e => props.save(e)}>
                        Salvar
                    </button>
                    <button className="button button-cancel"
                        onClick={e => props.clear(e)}>
                        Cancelar
                    </button>
                </div>
            </div>
        </form>
    )
}

export default RenderForm