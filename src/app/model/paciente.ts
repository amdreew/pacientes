export interface Paciente {
    identificacion: string;
    tipoId: string;
    idExpedicion: string;
    nombres: string;
    apellidos: string;
    municipio: string;
    departamento: string;
    edad: number;
    sexo: string;   
    unidadMedida: string;    
}

export interface pacienteContrato {
    position: number;
    code: string;  
    name: string;
    type: string;
    state: string
}


