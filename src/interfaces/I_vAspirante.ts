export interface I_vAspirante {
    get nombre(): string;
    get apellido(): string;
    get cedula(): string; 
    get sexo(): string;
    get fechaNacimiento(): string;
    get peso(): number; 
    get indiceA(): number;
    get preparador(): number;
    get diploma(): number;
    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
    mostrar(): void;
    ocultar(): void;
}