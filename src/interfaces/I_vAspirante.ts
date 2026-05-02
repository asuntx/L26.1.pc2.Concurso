export interface I_vAspirante {
    get nombre(): string;
    get apellido(): string;
    get cedula(): string; 
    get sexo(): string;
    get fechaNac(): string;
    get puntosIA(): number;
    get puntosPrep(): number;
    get puntosDiplomas(): number;
    mostrar(): void;
    ocultar(): void;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
}