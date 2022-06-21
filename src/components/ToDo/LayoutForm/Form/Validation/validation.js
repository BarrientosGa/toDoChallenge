import * as yup from 'yup';

export const validationSchema = yup.object({
    projectName: yup
        .string('Ingrese el nombre de su proyecto')
        .required('Es necesario que ingrese el nombre del proyecto'),

    description: yup
        .string('Ingrese una descripción')
        .required('Es necesario ingresar una descripción'),

    projectManager: yup
        .string('Elija un project manager')
        .required('Debe elegir un project Manager'),

    assignedTo: yup
        .string('Elija una persona para asignar')
        .required('Debe asignar a una persona'),

    status: yup
        .string('Elija una disponibilidad')
        .required('Debe establecer si esta habilitado o no')
})