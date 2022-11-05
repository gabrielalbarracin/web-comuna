import React from 'react';

const FormularioConsulta = () => {
    return(
        <div className="ml-5 mr-5">
            <div className="font-weight-bold mb-3">
                <span>Datos del Solicitante</span>
            </div>

            <div className="ml-3">
                <form>
                    <div class="form-row mb-2">
                        <div class="col ">
                            <input type="text" class="form-control" placeholder="Nombre *"/>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Apellido *"/>
                        </div>
                    </div>
                    <div class="form-row mb-2">
                        <div class="col">
                            <input type="number" class="form-control" placeholder="Teléfono *"/>
                        </div>
                        <div class="col">
                            <input type="number" class="form-control" placeholder="Nro. de documento *"/>
                        </div>
                    </div>
                    <div class="form-row mb-2">
                        <div class="col">
                            <input type="" class="form-control" placeholder="Direccíon *"/>
                        </div>
                        <div class="col">
                            <input type="email" class="form-control" placeholder="Email *"/>
                        </div>
                    </div>


                </form>
            </div>
            <div>
                <div className="font-weight-bold mb-3 mt-3">
                    <span>Datos de la Consulta</span>
                </div>
                <div className="ml-3">
                    <select class="custom-select my-1 mr-sm-2 " id="inlineFormCustomSelectPref">
                        <option selected>Seleccione Tipo de Reclamo</option>
                        <option value="1">Riego</option>
                        <option value="2">Alumbrado</option>
                        <option value="3">Poda</option>
                        <option value="4">Basura</option>
                        <option value="5">Corte de Pasto</option>
                        <option value="6">Tánsito</option>
                        <option value="7">Salud Animal</option>
                    </select>
                    <div class="form-group">
                        {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Reclamo o Consulta*"></textarea>
                    </div>


                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-10">
                    <div className="mb-0 col"><span className="small">Campos Requeridos *</span></div>
                    <div className="mt-0 col"><button type="submit" class="btn btn-primary">Enviar</button></div>
                    
                </div>
            </div>


            {/* <div className="ml-3">
                <input class="form-control" type="text" placeholder="Nombre" />
                <input class="form-control" type="text" placeholder="Apellido" />
            </div> */}

        </div>
    )
};

export default FormularioConsulta;