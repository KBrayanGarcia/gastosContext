import Swal from 'sweetalert2';

export const alerta = (mensaje, estilos) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        background: estilos === "danger" ? "red" : "green",
        timerProgressBar: true,
        timer: 3000,
        customClass: {
            title: "text-light",
        },
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });
    
    Toast.fire({
        icon: estilos === 'danger' ? 'warning' : 'success',
        title: mensaje, 
        
    })
}